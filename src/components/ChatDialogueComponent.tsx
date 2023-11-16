import React, { useState, useEffect, useRef } from 'react';

interface ChatDialogProps {
  roomNumber: number;
}

const ChatDialogueComponent: React.FC<ChatDialogProps> = ({ roomNumber }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="chat-dialog-component">
      <h2>Room {roomNumber}</h2>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatDialogueComponent;
