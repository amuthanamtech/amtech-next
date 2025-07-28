"use client";

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
}

export default function TechAssistantChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      text: 'Hello! I\'m your tech assistant. I can help with:\n- Service information\n- Project quotes\n- Technical support\n- Scheduling consultations\n\nHow can I assist you today?', 
      sender: 'assistant' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Software company specific responses
  const getAssistantResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    // Services
    if (/web|website|design|development/.test(input)) {
      return "We offer comprehensive web design and development services:\n\n• Custom website development\n• Responsive design\n• CMS integration\n• E-commerce solutions\n\nWould you like a quote or to see our portfolio?";
    }
    
    if (/app|mobile|ios|android/.test(input)) {
      return "Our mobile app development services include:\n\n• Native iOS/Android apps\n• Cross-platform solutions\n• UI/UX design\n• App maintenance\n\nI can connect you with our app development team!";
    }
    
    if (/seo|optimization|ranking|search/.test(input)) {
      return "Our SEO services help boost your visibility:\n\n• Keyword research\n• Technical SEO\n• Content strategy\n• Backlink building\n\nWe offer free SEO audits. Would you like one?";
    }
    
    if (/support|maintenance|update|bug/.test(input)) {
      return "We provide ongoing maintenance packages:\n\n• Security updates\n• Performance optimization\n• 24/7 monitoring\n• Emergency support\n\nView our plans: [link to maintenance page]";
    }
    
    // Pricing
    if (/price|cost|how much|quote/.test(input)) {
      return "Pricing varies based on project requirements. For an accurate quote:\n\n1. Tell me about your project\n2. Request a callback\n3. Browse our package deals\n\nHow would you like to proceed?";
    }
    
    // Company info
    if (/about|company|team|who are you/.test(input)) {
      return "We're a full-service software development company specializing in:\n\n• Web & mobile applications\n• Digital transformation\n• Cloud solutions\n• UI/UX design\n\nFounded in 2010 with 50+ successful projects!";
    }
    
    // Contact
    if (/contact|reach|email|phone/.test(input)) {
      return "You can reach us via:\n\n📞 Phone: +1 (800) TECH-SUPP\n✉️ Email: support@company.com\n📍 Office: 123 Tech Street, Silicon Valley\n\nWould you like to schedule a consultation?";
    }
    
    // Scheduling
    if (/meet|schedule|consult|demo/.test(input)) {
      return "I'd be happy to schedule a consultation!\n\nAvailable slots this week:\n• Tue 10am-12pm\n• Wed 2pm-4pm\n• Fri 9am-11am\n\nPlease confirm your preferred time or request a callback.";
    }
    
    // Thanks
    if (/thank|thanks|appreciate/.test(input)) {
      return "You're very welcome! Is there anything else I can help with regarding our services?";
    }
    
    // Default responses
    const responses = [
      "I'd recommend checking our service pages for detailed information about that.",
      "Our team specializes in that area! Let me connect you with an expert.",
      "I've made a note of your interest in this. Would you like me to email you more information?",
      "Based on your query, I suggest looking at our case studies for similar projects.",
      "We have comprehensive documentation on that topic. I can send you a resource package.",
      "That's an excellent question! Let me provide you with our best practices for that."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user' as const
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate assistant thinking
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          id: `typing-${Date.now()}`, 
          text: "Researching our services...", 
          sender: 'assistant' 
        }
      ]);
      
      setTimeout(() => {
        // Show final response
        setMessages(prev => [
          ...prev.filter(msg => !msg.id.startsWith('typing')),
          {
            id: Date.now().toString(),
            text: getAssistantResponse(inputValue),
            sender: 'assistant'
          }
        ]);
        setIsTyping(false);
      }, 1500);
    }, 500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className=" fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-secondary hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors duration-150 flex items-center"
      >
        {isOpen ? (
          <span className="text-xl">✕</span>
        ) : (
          <>
            <span className="text-[30px] ">💭</span>
          </>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 bg-white rounded-lg shadow-xl flex flex-col border border-blue-200"
             style={{ height: '500px' }}>
          
          {/* Header */}
          <div className="bg-secondary from-secondary  text-white p-4 rounded-t-lg flex items-center">
            <div className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center mr-3">
              <span className="text-white text-xl">🤖</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Tech Support Assistant</h3>
              <p className="text-xs text-blue-200">AI-powered help for our services</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-blue-50">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs p-3 rounded-lg ${message.sender === 'user' 
                    ? 'bg-secondary text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-blue-200 rounded-bl-none'}`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white text-blue-900 border border-blue-200 p-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions */}
          <div className="px-4 py-2  border-t border-blue-200">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {["Get a Quote", "Book Demo", "Support", "Services", "Pricing"].map((action) => (
                <button
                  key={action}
                  onClick={() => setInputValue(action)}
                  className="flex-shrink-0 bg-white text-black text-xs px-3 py-1 rounded-full border border-blue-300 hover:bg-secondary"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Input form */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-blue-200 bg-white">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-1 border border-secondary p-3 rounded-l-lg focus:outline-none focus:secondary focus:secondary text-gray-700"
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary text-white p-3 px-5 rounded-r-lg transition-colors duration-200 flex items-center"
                disabled={isTyping}
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