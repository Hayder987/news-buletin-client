
import { useNavigate } from "react-router";


const AllPostCard = ({post}) => {
    const {PostTitle, imgPath, description, name , category ,time , _id} = post || {}

    const navigate = useNavigate()

    

    return (
        <div onClick={()=>navigate(`/posts/${_id}`)} 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className='flex justify-center items-center flex-col gap-8  p-3'>
            <div className="">
                <img src={imgPath} alt="" className="w-full h-[250px] " />
            </div>
            <div className="">
                <p className="font-bold mb-1">{name}</p>
                <p className="font-semibold text-gray-600 mb-3">{time}</p>
                <h3 className="text-xl font-bold mb-2">{PostTitle}</h3>
                <p className="text-gray-800 mb-3">{description.slice(0, 50)} ...</p>
                <p className=""># {category}</p>
            </div>
        </div>
    );
};

export default AllPostCard;