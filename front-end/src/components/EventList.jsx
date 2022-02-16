import { useEffect, useState } from "react";
import Event from "./Event";
import { fetchEvents } from "../services/Api";
import { useParams } from "react-router-dom";

function EventList() {
  const [eventList, setEventList] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setEventList(await fetchEvents(id));
    };

    fetchData();
  }, []);

  return (
    <>
      {eventList &&
        eventList.map((event) => (
          <Event
            date={event.date}
            name={event.name}
            tag={event.tag}
            ticket={event.ticket}
          />
        ))}
    </>
  );
}

export default EventList;
