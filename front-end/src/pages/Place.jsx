import { useEffect, useState } from "react";
import { useParams } from "react-router";
import EventList from "../components/EventList";
import PlaceInfo from "../components/PlaceInfo";
import { fetchPlace } from "../services/Api";

const Place = () => {
  const [place, setPlace] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setPlace(await fetchPlace(id));
    };

    fetchData();
  }, []);

  return (
    <div>
      {place && (
        <PlaceInfo
          name={place.name}
          phone={place.phone}
          address={place.address}
        />
      )}

      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 mt-10">
          <EventList />
        </div>
      </div>
    </div>
  );
};

export default Place;
