import { useRef, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useNavigate } from "react-router-dom";
import mapStyles from "./mapStyles";
import slugify from "slugify";

import cinemaIcon from "../assets/cinemas.svg";
import museeIcon from "../assets/musees.svg";
import concertIcon from "../assets/concerts.svg";
import spectacleIcon from "../assets/spectacles.svg";
import bibliothequeIcon from "../assets/bibliotheques.svg";
import jeuneIcon from "../assets/jeunesPublics.svg";
import artIcon from "../assets/artsDivers.svg";
import expositionIcon from "../assets/expositions.svg";

/**
 * Render components depending on map load state
 */
const render = (status) =>
  status === Status.FAILURE ? <h2>ERROR</h2> : <h2>CHARGEMENT ...</h2>;

const MyMapComponent = ({
  center = { lat: 44.835948646196954, lng: -0.5743407389195806 },
  zoom = 14,
  markers = [],
}) => {
  const navigate = useNavigate();

  // Keep a reference to the map container element
  const ref = useRef();

  // Keep a reference to the map object
  const map = useRef();

  // Keep a reference to the infowindow object
  const infowindow = useRef();

  // Keep a reference to the dipslayed marker so we can remove it from the map
  const displayedMarkers = useRef([]);

  // Trigger a navigation to the current displayed place page
  function onGotoPlacePage() {
    navigate(`/lieu/${infowindow.current.place.id}`);
  }

  useEffect(() => {
    // Creating the map
    map.current = new window.google.maps.Map(ref.current, {
      center,
      zoom,
      styles: mapStyles,
      gestureHandling: "greedy",
    });

    // Creating an info windows to display on marker click
    infowindow.current = new google.maps.InfoWindow();

    // Add an event listener on the button in infowindow to
    // go to the attached place page
    google.maps.event.addListener(infowindow.current, "domready", () => {
      document
        .getElementById(`place-${infowindow.current.place.id}`)
        .addEventListener("click", onGotoPlacePage);
    });

    // When we click on the map, close the infowindow
    google.maps.event.addListener(map.current, "click", () => {
      infowindow.current.close();
    });
  }, []);

  const icons = {
    [slugify("cinémas")]: {
      icon: cinemaIcon,
    },
    [slugify("musées")]: {
      icon: museeIcon,
    },
    [slugify("concerts")]: {
      icon: concertIcon,
    },
    [slugify("spectacles")]: {
      icon: spectacleIcon,
    },
    [slugify("bibliothèques")]: {
      icon: bibliothequeIcon,
    },
    [slugify("jeunes publics")]: {
      icon: jeuneIcon,
    },
    [slugify("arts divers")]: {
      icon: artIcon,
    },
    [slugify("expositions")]: {
      icon: expositionIcon,
    },
  };

  // Update markers when change
  useEffect(() => {
    // Remove all markers on the map
    displayedMarkers.current.map((marker) => marker.setMap(null));
    displayedMarkers.current = [];

    // Add markers on the map
    markers.map((place) => {
      // Create the marker
      const marker = new google.maps.Marker({
        position: { lat: place.lat, lng: place.lng },
        map: map.current,
        title: place.name,

        shape: {
          coords: [0, 0, 24, 24],
          type: "rect",
        },

        icon: {
          url: icons[slugify(place.tag.label)].icon,
          scaledSize: new google.maps.Size(20, 20),
        },

        opacity: 0.8,
      });

      // On marker click, show the infowindow
      marker.addListener("click", () => {
        // Attach the selected place to the infowindow
        infowindow.current.place = place;

        // Update infowindow position
        infowindow.current.setPosition({
          lat: Number(place.lag),
          lng: Number(place.lng),
        });

        // Update infowindow content
        // !!! We are not in a react component here, so use class instead of className !!!
        infowindow.current.setContent(`
          <div class="rounded-2xl font-roboto bg-white border-2 shadow-xl text-center rounded">
            <h2 class="text-center text-base font-bold p-1 mt-1 mx-1">
             ${place.name}
            </h2>

            <h3 class="text-center my-1 mx-2">
              ${place.address}
            </h3>

            <p
              id="place-${place.id}"
              class="cursor-pointer my-4 mx-2 p-2 text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Aller sur la page du lieu 

              <svg
                class="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </p>
          </div>
        `);

        infowindow.current.open({
          anchor: marker,
          map: map.current,
          shouldFocus: false,
        });
      });

      // Add the marker to displayed markers array
      displayedMarkers.current.push(marker);
    });
  }, [markers]);

  return <div ref={ref} id="map" style={{ width: "100%", height: "100%" }} />;
};

const GoogleMap = (props) => (
  <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY} render={render}>
    <MyMapComponent {...props} />
  </Wrapper>
);

export default GoogleMap;
