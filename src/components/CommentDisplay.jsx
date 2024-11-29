import { useContext, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiChatDeleteLine } from "react-icons/ri";
import { commentContext } from "../Context/CommentProvider";

const CommentDisplay = () => {
  const { allComment, commentDelete } = useContext(commentContext);
  const nameRef = useRef();
  const [commentId, setCommentId] = useState('')

  const editCommentHandler =()=>{
    const message = nameRef.current.value;
    const comment = {message}

    document.getElementById("my_modal_5").close()
    fetch(`http://localhost:4000/comment/${commentId}`,{
      method:"PUT",
      headers:{'content-type': 'application/json'},
      body: JSON.stringify(comment)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data)
    })
    
  }

  return (
    <div className="mt-12 flex flex-col gap-4 ">
      {allComment.map((comment) => (
        <div
          key={comment._id}
          className="border p-4 rounded-xl flex justify-between"
        >
          <div className="">
            <h3 className="text-2xl font-bold mb-2 flex gap-4 items-center ">
              <span className="text-blue-400">
                <FaUserCircle />
              </span>
              {comment.name}
            </h3>
            <p className="text-xl text-gray-500 font-semibold mb-2">
              {comment.message}
            </p>
            <p className="text-gray-500">{comment.time}</p>
          </div>
          <div className="flex gap-3 flex-col ">
            <button
              title="Edit"
              onClick={() => {document.getElementById("my_modal_5").showModal(), setCommentId(comment._id)}}
              className="p-2 text-blue-600  rounded-xl text-xl"
            >
              <MdEdit />
            </button>
            <button
              title="Delete"
              onClick={() => commentDelete(comment._id)}
              className="p-2 text-red-600 rounded-xl text-xl"
            >
              <RiChatDeleteLine />
            </button>
          </div>
        </div>
      ))}

      {/* modal */}
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
        <input type="text" ref={nameRef} name="comment" id="" className="border p-4 w-full outline-none" />
          <div className="modal-action">
            <form method="dialog" className="w-full">     
              <button onClick={editCommentHandler} className="btn btn-primary w-full my-4">Update</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CommentDisplay;
