import React from "react";
import { FaCocktail, FaCrown, FaShuttleVan, FaWifi } from "react-icons/fa";

export const getServicesData = () => {
  return [
    {
      id: 1,
      icon: <FaCocktail />,
      title: "free cocktails",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, debitis."
    },
    {
      id: 2,
      icon: <FaCrown />,
      title: "98 Royal Suite rooms",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, debitis."
    },
    {
      id: 3,
      icon: <FaShuttleVan />,
      title: "free shuttle",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, debitis."
    },
    {
      id: 4,
      icon: <FaWifi />,
      title: "Free Wifi in every room",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, debitis."
    }
  ];
};
