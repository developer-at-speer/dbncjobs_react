import React from "react";

const Rooms = (props) => {
    const rooms = props.rooms.map((room, i) => (
        <li key={i}>
            {room.room_type}, {room.vacant_rooms}, ${room.price}
        </li>
    ));

    return <ol>{rooms}</ol>;
};

export default Rooms;
