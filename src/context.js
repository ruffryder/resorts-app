import React, { Component } from "react";
import Client from "./contentful";

const RoomContext = React.createContext();

//<RoomContext.Provider value={}
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
    loading: true
  };

  componentDidMount() {
    this.getData();
  }

  //getData from contentful
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        order: "sys.createdAt"
      });
      let rooms = this.formatData(response.items);

      //Only store rooms with featured = TRUE for the featuredrooms array
      let featuredRooms = rooms.filter(room => room.featured === true);

      //Define the maxPrice and maxSize values for the range inputs
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      this.setState({
        rooms,
        sortedRooms: rooms,
        featuredRooms,
        price: maxPrice,
        maxPrice,
        maxSize,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Make the id and images in the correct and more suitable format in the room object
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => {
        return image.fields.file.url;
      });
      let room = { ...item.fields, id, images };
      return room;
    });
    return tempItems;
  }

  //Find a room by slug
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    let room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    //copy all rooms into tempRooms array
    let tempRooms = [...rooms];

    //transform string values to number
    capacity = parseInt(capacity);
    price = parseInt(price);

    //filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    //filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

    //filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);

    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );

    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }

    //filter by pets value
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    this.setState({
      sortedRooms: tempRooms
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
