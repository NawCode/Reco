import React from "react";
import { useEffect, useState, useContext } from "react";

import { fetchPlaces, fetchMe, fetchTags } from "../services/Api";
import SearchBar from "../components/SearchBar";
import UserContext from "../components/Context/UserContext";
import LinkButton from "../components/LinkButton";
import ButtonMap from "../components/ButtonMap";
import GoogleMap from "../components/GoogleMap";

const Accueil = () => {
  const [mapCenter, setMapCenter] = useState();
  const [place, setPlace] = useState([]);
  const { setUser } = useContext(UserContext);
  const [tags, setTags] = useState([]);
  const [placeFilter, setPlaceFilter] = useState([]);
  const [newPlaceFilter, setNewPlaceFilter] = useState([]);

  const arr = [];
  const fetchUser = async () => {
    const fetchedUser = await fetchMe();
    await setUser(fetchedUser);
  };

  const fetchPlace = async () => {
    const fetchedPlace = await fetchPlaces();
    setPlace(fetchedPlace);
  };

  const fetchTag = async () => {
    setTags(await fetchTags());
  };

  useEffect(() => {
    fetchUser();
    fetchPlace();
    fetchTag();

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMapCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <>
      <h3 className="text-white text-center mb-4 mt-2 font-roboto">
        (Re)découvrez votre ville
      </h3>
      <div className="flex flex-wrap justify-center">
        <SearchBar />

        <div
          className="mt-8 mb-4 w-screen h-96"
          style={{ borderRadius: 2, borderWidth: 3, borderColor: "black" }}
        >
          <GoogleMap
            center={mapCenter}
            markers={place.filter(
              (place) => !newPlaceFilter.includes(place.tagId)
            )}
          />
        </div>

        <div className="w-100">
          <div>
            <div className="text-center text-white text-xl mt-1">
              Filtrer la sélection
            </div>
            <div className="items-center justify-center">
              <div className="text-xs mb-8 grid grid-cols-4 gap-6 pt-6 md:grid-cols-8">
                {tags.map((tag, i) => (
                  <ButtonMap
                    key={i}
                    tag={tag}
                    place={place}
                    placeFilter={placeFilter}
                    setPlaceFilter={setPlaceFilter}
                    setNewPlaceFilter={setNewPlaceFilter}
                    newPlaceFilter={newPlaceFilter}
                    arr={arr}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="bg-black text-white px-4 mt-4 flex flex-col justify-center items-center w-full">
            <p className="text-center m-2 p-2">POUR PLACER VOTRE PUB ICI </p>
            <LinkButton
              link="/contactez-nous"
              className="buttonLink px-2 mb-2 hover:bg-white hover:text-black"
              name="CONTACTEZ-NOUS"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Accueil;
