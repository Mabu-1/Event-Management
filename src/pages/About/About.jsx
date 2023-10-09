
import { MdOutlineHomeWork } from 'react-icons/md';
import { BsBuildings } from 'react-icons/bs';
import { FaRegHandshake ,FaRegLaughBeam} from 'react-icons/fa';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { GiPartyFlags,GiPartyHat } from 'react-icons/gi';
import { useLoaderData } from 'react-router-dom';
import MemberCard from './MemberCard';

const About = () => {
    const members =useLoaderData();
    return (
        <div>
            <div>


                <div>
                    <h1 className="text-6xl text-center font-bold"><span className="text-[#FFB807]">Hello! </span>We Craft Extraordinary Events</h1>
                </div>
                <div className=" mt-9">
                    <p className="text-2xl text-center">Welcome to our world of creativity and precision. We specialize in crafting extraordinary events tailored to your unique vision. Let's make your celebration unforgettable together.</p>
                </div>


                <div className=' flex md:flex-row lg:flex-row sm:flex-col gap-[55px] mt-[50px]'>
                    <div className=''>
                        <div className='flex justify-center'>
                            <MdOutlineHomeWork className='text-6xl'></MdOutlineHomeWork>
                        </div>

                        <p className='text-lg font-bold mt-[20px]'>Unlock the Ideal Venue at No Cost</p>
                        <div className='flex justify-center'>

                            <div className=" mt-[20px] w-12 h-12 bg-[#ff078b] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                <p>1</p>
                            </div>
                        </div>


                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <FaRegHandshake className='text-6xl'></FaRegHandshake>
                        </div>

                        <p className='text-lg font-bold mt-[20px]'>Seamless Vendor Connections Await</p>
                        <div className='flex justify-center'>

                            <div className=" mt-[20px] w-12 h-12 bg-[#ff078b] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                <p>2</p>
                            </div>

                        </div>


                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <VscWorkspaceTrusted className='text-6xl'></VscWorkspaceTrusted>
                        </div>

                        <p className='text-lg font-bold mt-[20px]'>Rely on Us for Stress-Free Events</p>
                        <div className='flex justify-center'>

                            <div className=" mt-[20px] w-12 h-12 bg-[#ff078b] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                <p>3</p>
                            </div>
                        </div>


                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <GiPartyFlags className='text-6xl'></GiPartyFlags>
                        </div>

                        <p className='text-lg font-bold mt-[20px]'>Celebrate with Ease, Surrounded by Friends</p>
                        <div className='flex justify-center'>

                            <div className=" mt-[20px] w-12 h-12 bg-[#ff078b] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                <p>4</p>
                            </div>
                        </div>


                    </div>


                </div>

            </div>

            {/* Why chose us */}
            <div className='flex md:flex-row lg:flex-row sm:flex-col mt-[90px] bg-slate-200 h-full'>

                <div className='flex-1'>
                    <h1 className="text-5xl font-bold ml-[23px] mb-[40px]">Why Choose<span className="text-[#FFB807] ml-[10px]">HappyBirthDays</span></h1>
                    {/*  event content here */}

                    <div className=''>

                       <div className='mt-[20px] flex gap-[20px] mb-[40px]'>
                       <div>
              <GiPartyHat className='text-7xl  ml-[10px]'></GiPartyHat>
                   </div>
                    <div className='ml-[20px]'>
                     <h1 className='text-2xl font-bold '>The Events Specialists</h1>
                     <p className=' text-lg mt-[10px] font-semibold'>With a passion for precision and an eye for detail, we are your trusted partners in orchestrating flawless and unforgettable occasions. Our team of dedicated experts brings a wealth of experience and creativity to every event, ensuring it reflects your unique vision and style. From intimate gatherings to grand celebrations, we specialize in making your moments truly extraordinary.</p>
                   </div>
                        </div> 
                  

                       <div className='mt-[20px] flex gap-[20px] mb-[40px]'>
                       <div>
              <BsBuildings className='text-7xl  ml-[10px]'></BsBuildings>
                   </div>
                    <div className='ml-[20px]'>
                     <h1 className='text-2xl font-bold'>Dedicated Venues & Arrangements</h1>
                     <p className=' text-lg mt-[10px] font-semibold'> We are your dedicated partners in creating the perfect backdrop for your special moments. From hand-picked venues that match your style to meticulous event preparations, we're committed to making your occasions stand out. Our attention to detail ensures every element comes together seamlessly, so you can focus on enjoying the celebration.</p>
                   </div>
                        </div> 
                  

                       <div className='mt-[20px] flex gap-[20px] mb-[40px]'>
                       <div>
              <FaRegLaughBeam className='text-7xl ml-[10px]'></FaRegLaughBeam>
                   </div>
                    <div className='ml-[20px]'>
                     <h1 className='text-2xl font-bold'>Party Enthusiasts</h1>
                     <p className=' text-lg mt-[10px] font-semibold'> Celebrate with confidence and joy with Party Enthusiasts. Our mission is to help you create memorable moments with your friends. We provide guidance, resources, and ideas to ensure your party is a fantastic experience, leaving you free to savor the festivities with your loved ones</p>
                   </div>
                        </div> 
                  

                    </div>
                 

                </div>

                <div className='flex-1 bg-cover bg-center' style={{ backgroundImage: 'url("https://i.ibb.co/9HqFDcV/happy-birthday-celebrations.jpg")' }}>
                    {/* This div will use the image as a background */}
                </div>

            </div>


              {/* memebrs   */}

            <div className="mt-[60px] " >
           <h1 className="text-center text-4xl font-bold mb-4 "> <span className="text-[#ff078b] ml-2">HappyBirthDays </span> Team Memebrs</h1>
           <p className='text-center text-xl font-semibold mb-[40px]'>We make your events smart & impactful by personalised event management services</p>
           <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          
                {        
                     
                                
                              
                            members.map(member =>
                                      
                               <MemberCard key={member.id} members={member}></MemberCard>)
                              
                        
                          
                        
                    }
                    
            </div>
            </div>


        </div>
    );
};

export default About;