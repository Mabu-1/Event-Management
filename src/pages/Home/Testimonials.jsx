

const Testimonials = ({ testimonials }) => {
    const { name, review, image } = testimonials;
    return (
        <div className="card mb-16 ">

            <div className="card-body">
                <div className="mb-[10px]">
                    <h2 className="card-title font-bold text-xl text-center w-[260px] h-[80px]">{review}</h2>
                </div>
                <div className="flex justify-center mt-[20px]">
                <div className="  border rounded-full h-16 w-16 overflow-hidden">
                    <img
                        src={image}
                        alt="Profile Picture"
                        className="h-full w-full object-cover"
                    />
                </div>
               
                </div>
                <div className="flex justify-center">
                <div className="mt-[10px] ">
                    <p className="text-xl font-bold text-gray-500">{name}</p>
                </div>
                </div>
             




            </div>
        </div>
    );
};

export default Testimonials;