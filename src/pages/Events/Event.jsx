import { useLoaderData } from "react-router-dom";

import Marquee from "react-fast-marquee";
import LatestEvent from "./LatestEvent";
import { useEffect, useState } from "react";
import UpcomingEvents from "./UpcomingEvents";
const Event = () => {
    const [upEvents, setUpEvents] = useState([]);
    useEffect(() => {
        // Fetch JSON data here
        fetch('/upcoming.json')
          .then(response => response.json())
          .then(data => {
            // Update the state with the fetched data
            setUpEvents(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
    const events=useLoaderData();
    return (
        <div>
          
            <div className="mt-4 " >
           <h1 className="text-center text-4xl font-bold mb-4 "> <span className="text-[#ff078b] ml-2">Latest Events</span> </h1>
           <div className="gap-4">
           <Marquee  pauseOnHover={true} speed={100}>
                    {
                        
                        events.map(event =>
                                
                            <LatestEvent key={event.id} events={event}></LatestEvent>)
                        
                    }
                </Marquee>           
            </div>
            </div>

            <div className="mt-4 " >
           <h1 className="text-center text-4xl font-bold mb-4 "> <span className="text-[#ff078b] ml-2">Upcoming Events</span> </h1>
           <div className="gap-4">
           <Marquee  pauseOnHover={true} speed={100}>
                    {
                        
                        upEvents.map(upEvent =>
                                
                                <UpcomingEvents key={upEvent.id} upEvents={upEvent}></UpcomingEvents>)
                        
                    }
                </Marquee>           
            </div>
            </div>
        </div>
    );
};

export default Event;