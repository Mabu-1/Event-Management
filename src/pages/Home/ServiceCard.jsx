import { Link } from "react-router-dom";


const ServiceCard = ({services}) => {
const {id,title,image,description,price} =services;

    return (
        <div className="card mb-16">
        <figure ><img className="max-w-[280px] h-[190px]" src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title font-bold text-3xl">{title}</h2>

          <p className="text-lg font-semibold">{description}</p>
          <div className="flex justify-between">
  <div>
    
<button className="btn bg-[#3dd554] p-1 w-32 h-10 " onClick={()=>document.getElementById('my_modal_5').showModal()}><span className="text-white">Price:</span>${price}</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
<div className="modal-box flex flex-col items-center justify-center">
  <h3 className="font-bold text-lg text-center">Thanks For Purchasing Our Service!</h3>
  <div className="text-center">
    <img className="w-[100px] h-[70px]" src="https://i.ibb.co/1dQMgjz/party-popper.jpg" alt="" />
  </div>
  <h3 className="font-bold text-lg text-center">Please Come Again!</h3>
  <div className="modal-action">
    <form method="dialog">
    
      <button className="btn">Close</button>
    </form>
  </div>
</div>

</dialog>
    
  </div>
  <div className="">
    <Link to={`/service/${id}`}>
      <button className="btn btn-secondary p-1 w-32 h-10">Read More</button>
    </Link>
  </div>
</div>

          
        </div>
    </div>
    );
};

export default ServiceCard;