import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineArrowLeft} from 'react-icons/ai'
const ServicePage = () => {
    const services = useLoaderData();
    const { id } = useParams();
   
    const service = services.find(service => service.id === id);

    if (!service) {
     
        return <div className="text-center tex-3xl font bold">Service not found</div>;
    }
    const backgroundImageStyle = {
        backgroundImage: `url(${service.image1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "60vh", 
      
    };
    const overlayStyle = {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(11, 11, 11, 0.8)",
        paddingTop: "20px", 
    };
    return (
           <div>
             <div className="relative bg-cover bg-no-repeat bg-center" style={backgroundImageStyle}>
             <div style={overlayStyle} className="flex justify-between"> 
             <div className="mt-[-10px]">
   <Link to='/'><button id="" type="submit" className="bg-[#FF444A] text-white text-center text-xl font-bold ml-[20px] my-3 w-[190px] rounded-lg p-3 flex"> <AiOutlineArrowLeft className="mr-4 text-xl mt-[7px]"></AiOutlineArrowLeft> Go Back</button> </Link> 
  </div>
  <div className="mt-[-10px]">
  <button className="btn bg-[#FF444A] text-white text-center text-xl font-bold ml-[20px] my-3 w-[2`10px] rounded-lg p-6  mr-[20px]" onClick={()=>document.getElementById('my_modal_5').showModal()}> Price: <span className="text-green-500">${service.price}</span></button>
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
    <button id="" type="submit" className=""></button>
  </div>
 
</div>


        </div>

        {/* text */}
        <div>
        
        <div className="text-center">
        <div className="mt-[40px]">
            <h1 className="font-bold text-5xl underline"> {service.title}</h1>
            
        </div>
        </div>

            <div className="mt-[40px]" >
                     <p className="text-2xl font-semibold text-gray-600">{service.description1}</p>
            </div>
            <div className="flex justify-center mt-[20px]">
                <img className="w-[420px] h-[300px]" src={service.image2} alt="" />
            </div>
            <div className="mt-[40px]" >
                     <p className="text-2xl font-semibold text-gray-600">{service.description2}</p>
            </div>
            <div className="flex justify-center mt-[20px]">
                <img className="w-[420px] h-[300px]" src={service.image3} alt="" />
            </div>
            <div className="mt-[40px]" >
                     <p className="text-2xl font-semibold text-gray-600">{service.description3}</p>
            </div>
            <div className="flex justify-center mt-[20px] ">
                <img className="w-[420px] h-[300px]" src={service.image4} alt="" />
            </div>
            <div className="mt-[40px] mb-[40px]" >
                     <p className="text-2xl font-semibold text-gray-600">{service.conclusion}</p>
            </div>

        </div>
      
 
        </div>
    );
};

export default ServicePage;