import { useParams } from "react-router-dom"
import useFetch from "../useFetch"
import Headers from '../components/Headers';

const EventDetails = () => {
    const { eventId } = useParams()
    const { data, loading, error } = useFetch(`https://meetup-backend-virid.vercel.app/events/${eventId}`)

    return (
        <>
            <Headers />
            {loading && <p className="text-center mt-2">Loading...</p>}
            {error && <p className="text-center">Error in fetching event details</p>}
            {data && (
        <div className="px-5 mt-3">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-12">
              <h1>{data.title}</h1>
              <p className="mb-1">
                Hosted By : <br />
                <strong>{data.hostedName}</strong>
              </p>
              <img
                src={data.imageUrl}
                alt={data.title}
                className="img-fluid rounded my-3"
                 style={{
                   display: "block",
                   marginLeft: 0,
                   maxHeight: "350px",
                   maxWidth: "450px",
                   width: "100%"
                }}
              />
              <p className="mb-1">
                <h4>Details: </h4>
                {data.details}
              </p>
              <h4 className="py-1">Additional Information:</h4>
              <p className="mb-1">
                <strong>Dress Code: </strong>
                {data.dressCode}
              </p>
              <h4 className="py-1">Event Tags:</h4>
              <div className="d-flex flex-wrap gap-2">
                {data.eventTags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge rounded-pill bg-danger text-white py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-lg-4 col-md-5 col-12">
              <div className="card mb-4 p-3">
                <p className="mb-1">
                  <strong>{data.date}</strong>
                </p>
                <p className="mb-1">{data.time}</p>
                <p className="mb-1">{data.address}</p>
                <p className="mb-1">
                  <strong>₹ {data.price}</strong>
                </p>
              </div>

              <div className="my-3">
                <h4 className="mb-3">
                  Speakers: ({data.speakers.length})
                </h4>
                <div className="row">
                  {data.speakers.map((speaker, index) => (
                    <div
                      key={index}
                      className="col-6 text-center mb-3 d-flex flex-column align-items-center"
                    >
                      <img
                        src={speaker.imageUrl}
                        alt={speaker.name}
                        className="img-fluid rounded-circle mb-2"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h6 className="mb-0">{speaker.name}</h6>
                      <p className="text-muted">
                        {speaker.designation}
                      </p >
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
    )}

export default EventDetails
