import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import RecentPost from "../components/RecentPost";
import AllPost from "../components/AllPost";


const Home = () => {
    const allData  = useLoaderData()
     
    return (
        <div>
           <Banner></Banner>
           <RecentPost allData={allData.slice(-3)}></RecentPost>
           <AllPost allData={allData}></AllPost>
        </div>
    );
};

export default Home;