
// import './RoomTileComponent.css'
interface RoomTileProps {
    roomNumber: number;
    onSelect: (roomNumber: number) => void;
}

const RoomTileComponent: React.FC<RoomTileProps> = ({ roomNumber, onSelect }) => {
    return (
      <div className="room-tile" onClick={() => onSelect(roomNumber)}>
        Room {roomNumber}
      </div>
    );
};
  
export default RoomTileComponent
  