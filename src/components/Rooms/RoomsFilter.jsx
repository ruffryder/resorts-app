import React, { useContext } from "react";
import { RoomContext } from "../../context";
import Title from "../Title/Title";

//get unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  //get unique type values
  let types = getUnique(rooms, "type");
  types = ["all", ...types];

  // create option html elements for each type
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  //get unique capacity values
  let capacities = getUnique(rooms, "capacity");

  //create option html elements for each capacity value
  capacities = capacities.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* type filter input */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*END of type filter input */}
        {/* capacity filter input */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {capacities}
          </select>
        </div>
        {/* END of capacity filter input */}
        {/* price filter input */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
            step={20}
          />
        </div>
        {/* END of price filter input */}
        {/*  size filter input */}

        <div className="form-group">
          <label htmlFor="size">
            room size (ft<sup>2</sup>)
          </label>
          <div className="size-inputs">
            <input
              className="size-input"
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
            />
            <input
              className="size-input"
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
        </div>
        {/*END of  size filter input */}
        {/*extras filter input */}
        <div className="form-group">
          <ul class="ks-cboxtags">
            <li>
              <input
                type="checkbox"
                id="breakfast"
                name="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">Breakfast</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="pets"
                name="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">Pets</label>
            </li>
          </ul>
        </div>
        {/*END of  extras filter input */}
      </form>
    </section>
  );
}

export default RoomsFilter;
