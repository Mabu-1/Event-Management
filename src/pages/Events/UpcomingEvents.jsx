import { GrMapLocation } from 'react-icons/gr';

const UpcomingEvents = ({ upEvents }) => {
    const { image, date, destination } = upEvents;

    return (
        <div className="card mb-16 relative">
            <div className="card-body">
                <div className="relative">
                    <img
                        src={image}
                        alt="Event Image"
                        className="w-[350px] h-[400px]"
                    />
                    <p className="absolute top-2 left-2 text-white bg-[#ff078b] px-2 py-1 rounded">
                        {date}
                    </p>
                </div>
                <p className='flex text-xl'> 
                    <GrMapLocation className='text-[#ff078b] mt-1 mr-3' />
                    <span className='text-[#ff078b]'>{destination}</span>
                </p>
            </div>
        </div>
    );
};

export default UpcomingEvents;
