import AOS from "aos"; // Import the aos package
import "aos/dist/aos.css"; // Import the CSS for aos animations
import { useEffect } from "react";

const Welcome = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
        });
      }, []);
    
    return (
        <div className="flex mt-5 sm:flex-col lg:flex-row md;flex-row " data-aos="fade-right">
            <div className="max-w-[600px]">
             <img className="w-full" src="https://i.ibb.co/9tvBfSb/5264630.jpg" alt="" />
            </div>
            <div className="mt-[100px] ml-[40px]">
            <h1 className="text-4xl font-bold ">Welcome to <span className="text-[#FFB807]">HappyBirthDays</span></h1>
            <h4 className="text-xl font-bold mt-[20px]">Elevating Events: Where Creativity Meets Precision.</h4>

            <p className="text-gray-600 mt-[60px] text-xl">Welcome to our world of event management where we transform your special occasions into unforgettable experiences. With personalized precision and creative flair, we craft events that reflect your unique style and vision. Join us in making your celebrations smarter and more impactful.</p>
            
            </div>
        </div>
    );
};

export default Welcome;