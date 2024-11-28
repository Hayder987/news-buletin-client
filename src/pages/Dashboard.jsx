import { Link } from "react-router";


const Dashboard = () => {
    return (
        <div className="p-20">
          <Link to={`/news/add`}><button className="btn btn-primary">Add News</button></Link> 
          <Link to={`/news/edit`}><button className="btn btn-primary">Edit news</button></Link>   
        </div>
    );
};

export default Dashboard;