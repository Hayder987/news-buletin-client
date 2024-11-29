import { useContext, useEffect} from "react";
import CommentDisplay from "./CommentDisplay";
import CommentForm from "./CommentForm";
import { commentContext } from "../Context/CommentProvider";


const CommentSection = () => {
    const {setAllComment} = useContext(commentContext)
    
    useEffect(()=>{
        fetch('http://localhost:4000/comments')
        .then(res=> res.json())
        .then(comment=> {
            setAllComment(comment)
        })
    },[setAllComment])


    return (
        <div>
            <CommentForm ></CommentForm>
            <CommentDisplay></CommentDisplay>
            
        </div>
    );
};

export default CommentSection;