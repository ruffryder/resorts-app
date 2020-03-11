import React from "react";
import Room from "./Room";

export default function RoomsList({ rooms }) {
  return (
    <section className="roomslist">
      {rooms.length === 0 ? (
        <div className="empty-search">
          <h3>no rooms matched your search parameters</h3>
        </div>
      ) : (
        <div className="roomslist-center">
          {rooms.map(item => {
            return <Room key={item.id} room={item} />;
          })}
        </div>
      )}
    </section>
  );
}
