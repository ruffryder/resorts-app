import React, { Component } from "react";
import defaultBG from "../images/bg-room.jpg";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/Hero/StyledHero";
import PropTypes from "prop-types";

class SingleRoom extends Component {
  static contextType = RoomContext;

  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBG
    };
  }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>Room was not found</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImages] = images;
    return (
      <>
        <StyledHero img={mainImg}>
          <Banner title={`${name} room`}>
            <Link className="btn-primary" to="/rooms">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>
                size: {size} ft<sup>2</sup>
              </h6>
              <h6>
                max capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((extra, index) => {
              return <li key={index}>{extra}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

SingleRoom.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default SingleRoom;
