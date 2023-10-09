import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillMail,AiFillTwitterCircle,AiFillInstagram } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';
import { BiLogoFacebookCircle } from 'react-icons/bi';

const Footer = () => {
    return (
      <div>
        <div>

      
<footer className="footer p-10 bg-base-200 text-base-content">
  
<aside  >
  <div className="flex">
  <div className="mt-[10px]">
<FaMapMarkerAlt className="text-3xl mt-[40px]"></FaMapMarkerAlt>
  </div>
  <div>
  <h1 className="text-4xl font-bold  ">Get In Touch</h1>

  <p className="mt-[20px] ml-[20px]">123 Celebration Street<br/>Eventville, Partyland 12345<br/>United Celebrations</p>
  <hr  />

  </div>
 
  </div>
  <div className="flex mt-[10px]">
  <div className="mt-[20px]">
<AiFillMail className="text-3xl "></AiFillMail>
  </div>
  <div>


  <p className="mt-[25px] ml-[20px]">  <Link to='/Home' className="hover:text-blue-500  hover:underline ">happybirhdays123@gmail.com</Link></p>
  <hr  />

  </div>
 

  </div>
  <div className="flex mt-[30px]">
  <div className="mt-[20px]">
<IoMdCall className="text-3xl "></IoMdCall>
  </div>
  <div>


  <p className="mt-[25px] ml-[20px]"> Phone: +12 (3) 4567 899<br/>
Support: +12 (3) 4567 445</p>
  <hr  />

  </div>
 
  </div>

</aside> 
<nav>
  <header className="footer-title text-2xl">Services</header> 
  <Link to='/Home' className="hover:text-blue-500 text-xl hover:underline ">Birthday Magic Makers</Link>
<Link to='/event' className="hover:text-blue-500 text-xl hover:underline">Cake & Candle Creators</Link>
<Link to='/about' className="hover:text-blue-500 text-xl hover:underline">Celebration Craftsmen</Link>
  <Link to='/Home' className="hover:text-blue-500 text-xl hover:underline ">The Party Planners</Link>
<Link to='/event' className="hover:text-blue-500 text-xl hover:underline">Event Enchanters</Link>
<Link to='/about' className="hover:text-blue-500 text-xl hover:underline">Memorable Moments</Link>
</nav> 
<nav>
  <header className="footer-title text-2xl">Company</header> 
<Link to='/' className="hover:text-blue-500 text-xl hover:underline ">Home</Link>
<Link to='/event' className="hover:text-blue-500 text-xl hover:underline">Events</Link>
<Link to='/about' className="hover:text-blue-500 text-xl hover:underline">About</Link>

</nav> 
<nav>
<header className="footer-title text-2xl">Social Links</header> 
<div className='flex gap-[20px] mt-[10px]'>
<Link to='/' > <BiLogoFacebookCircle className='text-3xl hover:text-blue-500'></BiLogoFacebookCircle></Link>
<Link to='/' > <AiFillTwitterCircle className='text-3xl hover:text-blue-500'></AiFillTwitterCircle></Link>
<Link to='/' > <AiFillInstagram className='text-3xl hover:text-blue-500'></AiFillInstagram></Link>
               
                
                </div>
</nav>


</footer>
</div>
<div className="text-center text-gray-600 bg-base-200">
                &copy; {new Date().getFullYear()} HappyBirthDays. All Rights Reserved.
            </div>
      </div>
     
    );
};

export default Footer;