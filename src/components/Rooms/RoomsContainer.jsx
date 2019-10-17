import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../../context";
import Loading from "../Loading/Loading";

function RoomsContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </>
        );
      }}
    </RoomConsumer>
  );
}

export default RoomsContainer;
