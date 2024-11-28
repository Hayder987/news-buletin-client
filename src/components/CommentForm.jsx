

const CommentForm = () => {
    const commentHandler = e =>{
        e.preventDefault()
    }
    return (
        <div>
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