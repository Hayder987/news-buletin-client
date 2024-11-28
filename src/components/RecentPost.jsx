import { useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router";

const RecentPost = ({ allData }) => {
  const [data, setData] = useState(allData[allData.length-1])
  const navigate = useNavigate()

  const recentPostDetails = (id)=>{
    const eachPost = allData.find(item=> item._id === id)
    setData(eachPost)
  }

  const {PostTitle, imgPath, description, name , category ,time , _id} = data || {}

  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold mb-12">Recent Post</h1>
      <div className="flex flex-col md:flex-row gap-10 mb-20">
        {/* post details card */}
        <div onClick={()=> navigate(`/posts/${_id}`)} className="md:w-1/2">
          <img src={imgPath} alt="" className="w-full rounded-xl object-cover " />
          <div className="">
          <p className="font-bold my-4 flex justify-between">
            <span className="">{name}</span>
            <span className="">{time}</span>
          </p>
            <h3 className="text-2xl font-bold my-4">{PostTitle}</h3>
            <p className="text-gray-600 font-medium mb-4">{description}</p>
            <h3 className="text-xl font-bold"># {category}</h3>
          </div>
        </div>
        {/*recent post card */}
        <div className="md:w-1/2 flex flex-col-reverse gap-6">
          {allData.map((post) => (
            <Card 
            key={post._id}
            post={post}
            recentPostDetails={recentPostDetails}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
