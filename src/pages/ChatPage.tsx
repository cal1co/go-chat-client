import React, { useState } from 'react';
import RoomList from '../components/RoomListComponent';
import ChatDialog from '../components/ChatDialogueComponent';

const ChatPage: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  const handleRoomSelect = (roomNumber: number) => {
    setSelectedRoom(roomNumber);
  };

  return (
    <div className="chat-page">
      <div className="room-list">
        <RoomList onRoomSelect={handleRoomSelect} />
      </div>
      <div className="chat-dialog">
        {selectedRoom !== null && <ChatDialog roomNumber={selectedRoom} />}
      </div>
    </div>
  );
};

export default ChatPage;
