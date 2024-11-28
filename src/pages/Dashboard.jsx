import { Link } from "react-router";


const Dashboard = () => {
    return (
        <div className="p-20">
          <Link to={`/news`}><button className="btn btn-primary">Add News</button></Link> 
            
        </div>
    );
};

export default Dashboard;