import { useEffect, useState } from "react";
import AllPost from "../components/AllPost";
import { CirclesWithBar } from "react-loader-spinner";

const AdminAllPost = () => {
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      fetch('https://news-buletin-server.vercel.app/posts')
      .then(res=> res.json())
      .then(data=> {
        setAllData(data)
        setLoading(false)
      })
    },[])
    return (
        <div>
          {
            loading?<CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />:
            <AllPost allData={allData}></AllPost>
          }  
        </div>
    );
};

export default AdminAllPost;