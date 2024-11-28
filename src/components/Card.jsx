import React from 'react';

const Card = ({post,recentPostDetails}) => {
    const {PostTitle, imgPath, description, name , category ,time , _id} = post || {}
    return (
        <div onClick={()=> recentPostDetails(_id)} className='flex justify-between items-center flex-col md:flex-row gap-8 border-2 rounded-xl p-3'>
            <div className="">
                <img src={imgPath} alt="" className="md:min-w-[350px] md:max-h-[200px] h-full object-cover rounded-xl" />
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

export default Card;