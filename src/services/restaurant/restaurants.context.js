import React, { useState, createContext, useEffect, useContext } from "react";
import { LocationContext } from "../location/location.context";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (location) => {
    setLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(location)
        .then(restaurantsTransform)
        .then((results) => {
          setLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
