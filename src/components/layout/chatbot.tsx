
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { chat } from "@/ai/flows/chat-flow";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm the Nexstar Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isSubmitting]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsSubmitting(true);

    try {
      const response = await chat(currentInput);
      const assistantMessage = { role: "assistant", content: response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = {
        role: "assistant",
        content: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 w-max">
            <div className="relative animate-chat-bubble rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg">
              How can I help you?
              <div className="absolute right-4 -bottom-2 h-0 w-0 border-x-8 border-x-transparent border-t-[10px] border-t-primary"></div>
            </div>
          </div>
        )}
        <Button
          size="icon"
          className="rounded-full h-16 w-16 shadow-lg"
          onClick={toggleChat}
          aria-label="Toggle Chat"
        >
          {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
        </Button>
      </div>

      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-full max-w-sm transition-all duration-300 ease-in-out",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <Card className="shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between border-b">
            <div className="flex items-center gap-3">
               <Image
                src="https://drive.google.com/uc?export=view&id=1gxR728fAj2QFBzzcnADMc9jFwX2dbAwf"
                alt="Nexstar Logo"
                width={24}
                height={24}
                className="object-contain"
              />
              <CardTitle className="text-base font-semibold">Nexstar Assistant</CardTitle>
            </div>
             <Button variant="ghost" size="icon" onClick={toggleChat} className="h-6 w-6">
                <X className="h-4 w-4" />
             </Button>
          </CardHeader>
          <CardContent className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-end gap-2",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[75%] rounded-lg p-3 text-sm",
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary"
                  )}
                >
                  {msg.content}
                </div>
              </div>
            ))}
             {isSubmitting && (
              <div className="flex items-end gap-2 justify-start">
                <div className="max-w-[75%] rounded-lg p-3 text-sm bg-secondary flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                   Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>
          <CardFooter className="p-4 border-t">
            <div className="flex w-full items-center space-x-2">
              <Input
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !isSubmitting && handleSend()}
                disabled={isSubmitting}
              />
              <Button onClick={handleSend} size="icon" aria-label="Send Message" disabled={isSubmitting}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
