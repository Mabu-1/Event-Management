
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "./Banner";
import Welcome from "./Welcome";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";
import Testimonials from "./Testimonials";
import Marquee from "react-fast-marquee";


const Home = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        // Fetch JSON data here
        fetch('/testimonials.json')
          .then(response => response.json())
          .then(data => {
            // Update the state with the fetched data
            setTestimonials(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
    const services =useLoaderData();
   
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Welcome></Welcome>
           <div className="mt-4 " >
           <h1 className="text-center text-4xl font-bold mb-4 "> <span className="text-[#FFB807] ml-2">HappyBirthDays</span> Services</h1>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map(service =>
                            
                            <ServiceCard 
                            key={service.id}
                            services={service}
                            ></ServiceCard>)
                    }
                           
            </div>
           </div>
         
           <div className="mt-4 " >
           <h1 className="text-center text-4xl font-bold mb-4 "> <span className="text-[#ff078b] ml-2">Testimonials</span> </h1>
           <div className="gap-4">
           <Marquee  pauseOnHover={true} speed={100}>
                    {
                        
                            testimonials.map(testimonial =>
                                
                                <Testimonials key={testimonial.id} testimonials={testimonial}></Testimonials>)
                        
                    }
                </Marquee>           
            </div>
            </div>
           </div>
         
      
    );
};

export default Home;