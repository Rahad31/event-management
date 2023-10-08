import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredEvent } from "../Localstorage/Localstorage";
import Booking from "../Booking/Booking";
import { Link } from "react-router-dom";
const Bookings = () => {
  const [events, setEvents] = useState([]);
  const Eventcard = useLoaderData();
  const{id}=Eventcard;
  const [displayEvent, setDisplayEvent] = useState([]);

  useEffect(() => {
    const storedEvents = getStoredEvent();
    // console.log(storedEvents);
    const bookings = [];

    for (const id of storedEvents) {
      const Event = Eventcard.find((Eventcard) => Eventcard.id === id);
      // console.log(id);
      // console.log(eventcards.id);
      if (Event) {
        bookings.push(Event);
      }

      setEvents(bookings);
      setDisplayEvent(bookings);
    }
  }, [Eventcard]);

  // console.log(displayEvent);
  return (
    <div className="container mx-auto flex flex-row flex-wrap gap-5 justify-center items-center my-10">
      {displayEvent.map((event) => (
        <Booking key={id} event={event}></Booking>
      ))}
    </div>
  );
};

export default Bookings;
