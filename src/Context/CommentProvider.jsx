import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const commentContext = createContext()


const CommentProvider = ({children}) => {
    const [allComment, setAllComment]= useState([])

    const commentDelete =(id)=>{
       fetch(`http://localhost:4000/comment/${id}`,{
        method: "DELETE",
       })
       .then(res=> res.json())
       .then(()=> {
        const remaing = allComment.filter(item=> item._id !== id)
        setAllComment(remaing)
        
       })
    }

    const commentInfo = {
        allComment,
        setAllComment,
        commentDelete
    }

    return (
        <commentContext.Provider value={commentInfo}>
            {children}
        </commentContext.Provider>
    );
};

CommentProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default CommentProvider;