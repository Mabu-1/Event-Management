import { useEffect, useState } from 'react';
import {  AiOutlineArrowRight } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Banner = () => {
    const [text, setText] = useState('');
    const [showImage, setShowImage] = useState(false);
    const [showAdditionalText, setShowAdditionalText] = useState(false);
    const mainText = `Life is a collection of moments, and <span class="text-[#FFB807]">birthdays</span> make them shine`;
    const additionalText = 'Birthday Event Management Specialists';
    const delay = 50; // Delay in milliseconds between each character

    useEffect(() => {
        let currentIndex = 0;
        const textInterval = setInterval(() => {
            if (currentIndex <= mainText.length) {
                setText(mainText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(textInterval);
                // After the main text animation completes, show the image
                setShowImage(true);
            }
        }, delay);

        return () => clearInterval(textInterval);
    }, []);

    useEffect(() => {
        if (showImage) {
            // After the image is shown, delay showing the additional text
            const additionalTextTimeout = setTimeout(() => {
                setShowAdditionalText(true);
            }, 2000); // Adjust the delay as needed

            return () => clearTimeout(additionalTextTimeout);
        }
    }, [showImage]);

    const bannerStyle = {
        backgroundImage: 'url("https://i.ibb.co/hBWQ7mx/20080.jpg")',
    };

    return (
        <div className="relative bg-cover bg-no-repeat bg-center min-h-screen" style={bannerStyle}>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
                {showImage && (
                    <h2 className={`text-center text-white text-xl `}>
                        <b><i>{additionalText}</i></b>
                    </h2>
                )}
                <h2
                    className={`text-center text-white text-6xl`}
                    dangerouslySetInnerHTML={{ __html: `<b>${text}</b>` }}
                ></h2>
                {showImage && (
                   <button className='btn btn-secondary mt-4'>About Us <span><AiOutlineArrowRight className='text-lg'></AiOutlineArrowRight></span></button>
                )}
               
            </div>
            {showImage && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src="https://i.ibb.co/PxrLX4r/conf.webp" alt="Confetti" />
                </div>
            )}
            
        </div>
    );
};

Banner.propTypes = {
    handleSearch: PropTypes.func,
    handleChange: PropTypes.func,
};

export default Banner;
