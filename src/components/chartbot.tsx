"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  id?: string;
  sender: "user" | "bot";
  text: string;
  
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const text = await res.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(`API returned non-JSON response: ${text}`);
      }

      if (!res.ok) {
        throw new Error(data.error || "API error");
      }

      const botMessage: Message = { id: Date.now().toString(), sender: "bot", text: data.text };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        sender: "bot",
        text: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsTyping(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-secondary hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors duration-150 flex items-center"
      >
        {isOpen ? (
          <span className="text-xl">✕</span>
        ) : (
          <span className="text-[30px] hover:text-pink-400 hover:scale-110 transition-all duration-200">💬</span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 bg-white rounded-lg shadow-xl flex flex-col border border-blue-200" style={{ height: "500px" }}>
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
            {messages.map((msg, i) => (
              <div key={i} className={`mb-4 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs p-3 rounded-lg ${msg.sender === "user"
                    ? "bg-secondary text-white rounded-br-none"
                    : "bg-white text-gray-800 border border-blue-200 rounded-bl-none"}`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-white text-blue-900 border border-blue-200 p-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-blue-200">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {["Status?", "Invoices?", "Timeline?" ,"Documents?", "Progress?","Team?", "Updates?", "Contract?" ,"Payment?" ,"Support?"].map((action) => (
                <button
                  key={action}
                  onClick={() => setInput(action)}
                  className="flex-shrink-0 bg-white text-black text-xs px-3 py-1 rounded-full border border-blue-300 hover:bg-secondary"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-blue-200 bg-white">
            <div className="flex w-full">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                className="flex-grow min-w-0 border border-secondary p-3 rounded-l-lg focus:outline-none text-gray-700"
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-blue-700 text-white px-4 py-3 rounded-r-lg transition-colors duration-200 flex items-center whitespace-nowrap"
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
