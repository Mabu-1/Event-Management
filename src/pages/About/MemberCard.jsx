import { BiLogoFacebookCircle } from 'react-icons/bi'
import { AiFillTwitterCircle,AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const MemberCard = ({ members }) => {
    const { name, title, image, description } = members;

    return (
        <div className="card mb-16 flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <figure>
                    <img
                        className="w-[480px] h-[260px]"
                        src={image}
                        alt="Shoes"
                    />
                </figure>
            </div>
            <div className="md:w-1/2 card-body mt-[30px] ">
                <h2 className="card-title font-bold text-3xl">{title}</h2>
                <p className="text-gray-500 text-lg font-semibold">{description}</p>

                <div className='flex gap-[20px] mt-[30px]'>
                <Link to='/' > <BiLogoFacebookCircle className='text-3xl hover:text-blue-500'></BiLogoFacebookCircle></Link>
<Link to='/' > <AiFillTwitterCircle className='text-3xl hover:text-blue-500'></AiFillTwitterCircle></Link>
<Link to='/' > <AiFillInstagram className='text-3xl hover:text-blue-500'></AiFillInstagram></Link>
   
                </div>
            </div>

            
        </div>
    );
};

export default MemberCard;
