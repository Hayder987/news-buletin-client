import { useParams } from "react-router";
import AddPost from "../components/AddPost";
import EditPost from "../components/EditPost";


const PostHandle = () => {
    const {id} = useParams()
    
    return (
        <div>
           {id==='add' && <AddPost></AddPost>} 
           {id==='edit' && <EditPost></EditPost>} 
        </div>
    );
};

export default PostHandle;