// import { useState, useEffect } from "react";
import useFetch from "../useFetch";
import { Link} from 'react-router-dom';

 function EventsList({ events, filterType, setFilterType }) {

  const { data, loading, error } = useFetch("https://meetup-backend-virid.vercel.app/events");
  console.log(data)

  return (
        <>
        {loading && <p>Loading...</p>}
        {error && <p>Error in fetching data.</p>}
          <div className="container">
            <div className="d-flex justify-content-between align-items-center my-4">
                <h1 className="mb-0">Meetup Events</h1>
                <div className="d-flex align-items-center">
                <label htmlFor="eventType" className="me-2"></label>
                <select id="eventType" className="form-select w-auto" value={filterType}
                 onChange={(e) => setFilterType(e.target.value)}
>
                    <option value=""disabled selected>Select Event Type</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Both">Both</option>
                </select>
                </div>
            </div>

            <section className="row">
             { 
               events?.map((event) => (
                  <div key={event._id} className="col-md-4 mb-4">
                  
                  <div className="card h-100">
                    <div className="position-relative">
                      <img src={event.imageUrl} alt="Event" className="card-img-top" />

                      <span className="badge bg-light text-dark position-absolute top-0 start-0 m-2">
                        {event.eventType} Event
                      </span>
                    </div>
                    <div className="card-body">
                      <h5 className="text-muted">{event.date} | {event.time} IST</h5>
                      <Link to={`/${event._id}`}>
                      <h4 className="card-title">{event.title}</h4>
                      </Link>
                    </div>
                  </div>
                </div> 
               ))
             }
            </section>
          </div>
        </>
  );
}

export default EventsList;
