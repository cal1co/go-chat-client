import React, { useState, useRef, useEffect } from 'react';

interface ChatDialogProps {
  roomNumber: number;
}

const ChatDialogueComponent: React.FC<ChatDialogProps> = ({ roomNumber }) => {
  const [roomMessages, setRoomMessages] = useState<Record<number, string[]>>({});
  const [newMessage, setNewMessage] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!roomMessages[roomNumber]) {
      setRoomMessages((prevMessages) => ({
        ...prevMessages,
        [roomNumber]: [],
      }));
    }

    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [roomNumber, roomMessages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setRoomMessages((prevMessages) => ({
        ...prevMessages,
        [roomNumber]: [...(prevMessages[roomNumber] || []), newMessage],
      }));
      setNewMessage('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-dialog-component">
      <h2>Room {roomNumber}</h2>
      <div className="messages">
        {roomMessages[roomNumber]?.map((message, index) => (
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
