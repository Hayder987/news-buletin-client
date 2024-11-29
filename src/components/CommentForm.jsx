import moment from "moment";
import { useContext } from "react";
import { commentContext } from "../Context/CommentProvider";


const CommentForm = () => {
    const {allComment, setAllComment} = useContext(commentContext)
   const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    const commentHandler = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const message = form.text.value;
        const comment = {name, message, time}

        fetch('http://localhost:4000/comments',{
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(comment)
        })
        .then(res=> res.json())
        .then(result=>{
            setAllComment([...allComment, comment])
            form.reset()
            console.log(result)
        })
    }
    return (
        <div className="">
            <div className="max-w-[550px] mx-auto">
                <form onSubmit={commentHandler} className="flex flex-col gap-3">
                   <input type="text" name="name" id="" placeholder="Enter Your Name" className="p-3 border-2 w-full rounded-xl" />
                   <textarea name="text" placeholder="Your Comments" id="" cols="20" rows="4" className="border-2 w-full resize-none p-3 rounded-xl" ></textarea>
                   <input type="submit" value="Comment" className="btn btn-primary"/>
                </form>
            </div>
            
        </div>
    );
};

export default CommentForm;