import { useState, useEffect } from "react";
import Headers from "./components/Headers";
import EventsList from "./pages/EventsList";
import Footer from "./components/Footer";

function App() {
 const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("Both");

  useEffect(() => {
    fetch("https://meetup-backend-virid.vercel.app/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setFilteredEvents(data);
      })
      .catch((error) => ("Error in fetching events.", error));
  }, []);

   useEffect(() => {
    let updatedEvents = [...events];

    if (search !== "") {
      updatedEvents = updatedEvents.filter((event) =>
        event.title.toLowerCase().includes(search.toLowerCase())
      || event.eventTags.join(" ").toLowerCase().includes(search.toLowerCase()));
    }
     if (filterType !== "Both") {
      updatedEvents = updatedEvents.filter(
        (event) => event.eventType === filterType
      );  
    }

    setFilteredEvents(updatedEvents);
  }, [search, filterType, events]);

  return (
    <>
      <Headers search={search} setSearch={setSearch} />
      <EventsList
        events={filteredEvents}
        filterType={filterType}
        setFilterType={setFilterType}
      />
      <Footer />
    </>
  );
}

export default App;
