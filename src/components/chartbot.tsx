"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "assistant";
}

export default function TechAssistantChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text:
        "Hello! I'm your tech assistant. I have knowledge about our company and services. How can I assist you today?",
      sender: "assistant",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [knowledge, setKnowledge] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages update
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/knowledge")
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({ error: `API error: ${res.status}` }));
          throw new Error((errorData as { error?: string }).error || `API error: ${res.status}`);
        }
        return res.json() as Promise<{ content: string }>;
      })
      .then((data) => {
        if (typeof data.content !== "string") {
          throw new Error("Invalid content in API response");
        }
        setKnowledge(data.content);
      })
      .catch((error) => {
        console.error("Failed to load knowledge:", error);
        setKnowledge("Sorry, failed to load knowledge base.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const getAssistantResponse = (userInput: string) => {
    if (!knowledge) return "Loading knowledge base...";

    const lowerInput = userInput.toLowerCase();
    
    // Split knowledge into sections based on headers
    const sections = knowledge.split(/(?=#+\s)/);
    
    // Extract key question terms
    const questionTerms = lowerInput
      .replace(/^(what|how|where|when|who|why|which|tell|explain|describe)\s+(?:me\s+)?(?:about\s+)?/, '')
      .split(/\s+/)
      .filter(word => word.length > 2 && !['the', 'and', 'for', 'our', 'your'].includes(word));

    // Score each section based on relevance
    const scoredSections = sections.map(section => {
      const sectionLower = section.toLowerCase();
      let score = 0;
      
      // Check for exact phrase matches
      if (sectionLower.includes(lowerInput)) {
        score += 10;
      }
      
      // Check for individual term matches
      questionTerms.forEach(term => {
        if (sectionLower.includes(term)) {
          score += 2;
        }
      });
      
      // Check for related terms
      const relatedTerms = {
        'service': ['service', 'solution', 'offer', 'provide'],
        'contact': ['contact', 'phone', 'email', 'reach'],
        'project': ['project', 'work', 'recent', 'sitecore', 'cloud'],
        'web': ['web', 'website', 'design', 'development'],
        'mobile': ['mobile', 'app', 'ios', 'android'],
        'seo': ['seo', 'optimization', 'search', 'ranking']
      };
      
      Object.entries(relatedTerms).forEach(([key, terms]) => {
        if (questionTerms.some(term => key.includes(term) || term.includes(key))) {
          terms.forEach(related => {
            if (sectionLower.includes(related)) {
              score += 1;
            }
          });
        }
      });
      
      return { section, score };
    });

    // Filter sections with score > 0 and sort by relevance
    const relevantSections = scoredSections
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 2); // Limit to top 2 most relevant sections

    if (relevantSections.length === 0) {
      // Try a more targeted search within sections
      const lines = knowledge.split('\n');
      const relevantLines = lines.filter(line => {
        const lineLower = line.toLowerCase();
        return questionTerms.some(term => lineLower.includes(term)) && line.trim().length > 20;
      });

      if (relevantLines.length > 0) {
        return relevantLines.slice(0, 3).join('\n');
      }
      
      return "I couldn't find specific information about that. Could you try asking about our services, recent projects, or contact information?";
    }

    // Clean up the response
    const response = relevantSections
      .map(item => item.section.trim())
      .join('\n\n')
      .replace(/^#+\s.*\n?/gm, '') // Remove headers
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold formatting
      .trim();

    // Limit response length
    const maxLength = 500;
    return response.length > maxLength 
      ? response.substring(0, maxLength) + '...' 
      : response;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `typing-${Date.now()}`,
          text: "Thinking...",
          sender: "assistant",
        },
      ]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev.filter((msg) => !msg.id.startsWith("typing")),
          {
            id: Date.now().toString(),
            text: getAssistantResponse(userMessage.text),
            sender: "assistant",
          },
        ]);
        setIsTyping(false);
      }, 1500);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-secondary hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors duration-150 flex items-center"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <span className="text-xl">✕</span>
        ) : (
          <span className="text-[30px] hover:text-pink-400 hover:scale-110 transition-all duration-200">
            💬
          </span>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className="absolute bottom-20 right-0 w-96 bg-white rounded-lg shadow-xl flex flex-col border border-blue-200"
          style={{ height: "500px" }}
        >
          {/* Header */}
          <div className="bg-secondary text-white p-4 rounded-t-lg flex items-center">
            <div className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center mr-3">
              <span className="text-white text-xl">🤖</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">AmTech Support Assistant</h3>
              <p className="text-xs text-blue-200">AI-powered help for our services</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-blue-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-secondary text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-blue-200 rounded-bl-none"
                  }`}
                >
                  <pre className="whitespace-pre-wrap text-sm">{message.text}</pre>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white text-blue-900 border border-blue-200 p-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions */}
          <div className="px-4 py-2 border-t border-blue-200">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {["Get a Quote", "Book Demo", "Support", "Services", "Pricing"].map(
                (action) => (
                  <button
                    key={action}
                    onClick={() => setInputValue(action)}
                    className="flex-shrink-0 bg-white text-black text-xs px-3 py-1 rounded-full border border-blue-300 hover:bg-secondary"
                  >
                    {action}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Input form */}
          <form
            onSubmit={handleSendMessage}
            className="p-4 border-t border-blue-200 bg-white"
          >
            <div className="flex w-full">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-grow min-w-0 border border-secondary p-3 rounded-l-lg focus:outline-none text-gray-700"
                disabled={isTyping}
                aria-label="Chat input"
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-blue-700 text-white px-4 py-3 rounded-r-lg transition-colors duration-200 flex items-center whitespace-nowrap"
                disabled={isTyping}
                aria-label="Send message"
              >
                <span>Send</span>
                <span className="ml-2">→</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
