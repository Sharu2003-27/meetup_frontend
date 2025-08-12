import { useParams } from "react-router-dom"
import useFetch from "../useFetch"
import Headers from '../components/Headers';

const EventDetails = () => {
    const { eventId } = useParams()
    const { data, loading, error } = useFetch(`https://meetup-backend-virid.vercel.app/events/${eventId}`)

    return (
        <>
            <Headers />
            {loading && <p>Loading...</p>}
            {error && <p>Error in fetching event details</p>}
            {data && 
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-8">
                        <h1>{data.title}</h1>
                        <p>Hosted By: <br /><strong>{data.hostedName}</strong></p>
                        <img src={data.imageUrl} alt={data.title} height={400} className="img-fluid my-4" />
                        <p><strong>Details: </strong><br />{data.details}</p>
                        <h3>Add  itional Information:</h3> 
                        <p><strong>Dress Code: </strong>{data.dressCode}</p>
                        <h3>Event Tags:</h3>
                        <div className="d-flex gap-2">
                            {data.eventTags.map((tag, index) => (
                                <span key={index} className="badge rounded-pill text-bg-danger">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 p-3">
                            <p><strong>{data.date}</strong></p>
                            <p>{data.time}</p>
                            <p>{data.address}</p>
                            <p><strong>₹ {data.price}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default EventDetails
