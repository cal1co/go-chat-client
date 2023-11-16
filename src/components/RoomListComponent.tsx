import React from 'react';
import RoomTile from './RoomTileComponent';

interface RoomListProps {
  onRoomSelect: (roomNumber: number) => void;
}

const RoomListComponent: React.FC<RoomListProps> = ({ onRoomSelect }) => {
  const rooms = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className="room-list">
      {rooms.map((roomNumber) => (
        <RoomTile key={roomNumber} roomNumber={roomNumber} onSelect={onRoomSelect} />
      ))}
    </div>
  );
};

export default RoomListComponent;
