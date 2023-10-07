

const ServiceCard = ({services}) => {
const {title,image,description,price} =services;

    return (
        <div className="card mb-16">
        <figure ><img className="max-w-[280px] h-[190px]" src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title font-bold text-3xl">{title}</h2>

            {
                description.length > 200
                    ? <p>{description.slice(0, 200)} <Link
                        to={`/news/${_id}`}
                        className="text-blue-600 font-bold">Read More...</Link></p>
                    : <p>{description}</p>
            }
          <div className="flex">
            <div>
            <p className="font-bold text-2xl">Price: <span className="text-green-600">${price}</span></p>
            </div>
            <div className="mt-[-5px] ml-[117px]"> 
                <button className="btn btn-secondary p-1  ">Read More</button>
            </div>
         
          </div>
          
        </div>
    </div>
    );
};

export default ServiceCard;