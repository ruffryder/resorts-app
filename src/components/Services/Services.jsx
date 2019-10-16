import React, { Component } from "react";
import { getServicesData } from "./services_utils";
import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: []
  };

  componentDidMount() {
    const servicesData = getServicesData();
    this.setState({
      services: servicesData
    });
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(service => {
            return (
              <article className="service" key={service.id}>
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
