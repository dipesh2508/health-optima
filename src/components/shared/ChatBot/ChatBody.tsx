"use client";

import React, { useReducer, useRef, useEffect } from "react";
import Image from "next/image";
import Devi from "@/assets/images/devi.png";
import MotionDiv from "@/components/animations/MotionDiv";
import clsx from 'clsx';
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { motion } from "framer-motion";

import "@/app/globals.css";

// Define the state and action types
type Message = {
  sender: 'user' | 'devi';
  message: string;
};

type State = {
  messages: Message[];
  isTyping: boolean;
};

type Action =
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SET_TYPING'; payload: boolean };

// Reducer function
const chatReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'SET_TYPING':
      return { ...state, isTyping: action.payload };
    default:
      return state;
  }
};

const ChatBody: React.FC = () => {
  const [state, dispatch] = useReducer(chatReducer, { messages: [], isTyping: false });
  const inputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = inputRef.current?.value.trim();
    if (!message) return;

    // Add user message
    dispatch({ type: 'ADD_MESSAGE', payload: { sender: 'user', message } });
    if (inputRef.current) inputRef.current.value = '';

    // Set typing state
    dispatch({ type: 'SET_TYPING', payload: true });

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      let data: string;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const jsonData = await response.json();
        data = jsonData.message || JSON.stringify(jsonData);
      } else {
        data = await response.text();
      }
      
      // Add bot message
      dispatch({ type: 'ADD_MESSAGE', payload: { sender: 'devi', message: data } });
    } catch (error) {
      console.error('Error:', error);
      dispatch({ type: 'ADD_MESSAGE', payload: { sender: 'devi', message: 'Sorry, I encountered an error. Please try again.' } });
    } finally {
      dispatch({ type: 'SET_TYPING', payload: false });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between rounded-t-3xl bg-primary-5 py-2 px-4 text-white">
        <div className="flex items-center">
          <div className="relative">
            <Image
              src={Devi}
              alt="Devi"
              className="mr-2 h-8 w-8 rounded-full"
            />
          </div>
          <div>
            <div className="text-lg font-medium">Devi</div>
            <div className="flex flex-row items-center gap-1 text-xs">
              <div className="h-3 w-3 rounded-full border-2 border-primary-5 bg-green-400"></div>
              <div>online</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow space-y-2 overflow-y-auto p-4">
        {state.messages.map((msg, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={clsx(
              'flex',
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            <div
              className={clsx(
                'max-w-[70%] rounded-lg p-2 text-sm',
                msg.sender === 'user'
                  ? 'bg-primary-5 text-white'
                  : 'bg-gray-300 text-gray-900'
              )}
            >
              {msg.message}
            </div>
          </MotionDiv>
        ))}
        {state.isTyping && (
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-start"
          >
            <div className="max-w-[70%] rounded-lg bg-gray-300 p-2 text-sm text-gray-900">
              <div className="flex space-x-1">
                {[0, 1, 2].map((dot) => (
                  <motion.div
                    key={dot}
                    className="h-2 w-2 bg-gray-600 rounded-full"
                    animate={{
                      y: ["0%", "-50%", "0%"],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: dot * 0.1,
                    }}
                  />
                ))}
              </div>
            </div>
          </MotionDiv>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="border-t border-gray-300 py-1 px-2 bg-primary-0 rounded-b-3xl">
        <form onSubmit={handleSubmit} className="flex items-center rounded-full bg-primary-0 px-4 py-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask your question..."
            className="flex-grow outline-none bg-transparent"
          />
          <button type="submit" className="ml-2 text-slate-400">
            <PiPaperPlaneRightFill size={20} />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatBody;
