import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import RecentPost from "../components/RecentPost";
import AllPost from "../components/AllPost";
import { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Home = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://news-buletin-server.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="md:px-12">
      <Banner></Banner>

      {loading ? (
        <div className="">
          <CirclesWithBar
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
          />
        </div>
      ) : (
        <div className="">
          <RecentPost allData={allData.slice(-3)}></RecentPost>
          <AllPost allData={allData}></AllPost>
        </div>
      )}
    </div>
  );
};

export default Home;
