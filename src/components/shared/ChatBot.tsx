"use client";

import React, { useState } from "react";
import { IoChatbubbles, IoClose } from "react-icons/io5";
import MotionDiv from "@/components/animations/MotionDiv";
import ChatBody from "@/components/shared/ChatBot/ChatBody";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-8 right-4 z-50 flex flex-col items-end md:right-8">
      <MotionDiv
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.8,
          y: isOpen ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        className="mb-4 flex h-96 w-80 md:w-96 flex-col rounded-3xl bg-primary-0 shadow-lg"
      >
        {isOpen && <ChatBody />}
      </MotionDiv>
      <MotionDiv whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button
          onClick={toggleChat}
          className="rounded-full bg-primary-5 p-3 text-white shadow-lg"
        >
          {isOpen ? <IoClose size={32} /> : <IoChatbubbles size={32} />}
        </button>
      </MotionDiv>
    </div>
  );
};

export default ChatBot;
