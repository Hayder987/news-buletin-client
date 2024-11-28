import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import RecentPost from "../components/RecentPost";


const Home = () => {
    const allData  = useLoaderData()
     
    return (
        <div>
           <Banner></Banner>
           <RecentPost allData={allData.slice(-3)}></RecentPost>
           
        </div>
    );
};

export default Home;