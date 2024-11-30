import { MdDelete, MdEdit } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import CommentSection from "../components/CommentSection";
import { useContext } from "react";
import { AuthContex } from "../Context/AuthProvider";

const PostDetails = () => {
  const post = useLoaderData();
  const { PostTitle, imgPath, description, name, category, time, _id } =
    post || {};
  const navigate = useNavigate();
  const { user } = useContext(AuthContex);

  const deleteHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://news-buletin-server.vercel.app/post/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              navigate("/");
            }
          });
      }
    });
  };

  return (
    <div className="p-4 lg:p-12 mb-16">
      <div className="md:max-w-[900px] mx-auto relative">
        {/* post details */}
        <div className="">
          <img
            src={imgPath}
            alt=""
            className="w-full rounded-xl object-cover "
          />
          <div className="">
            <p className="font-bold my-4 flex justify-between">
              <span className="">{name}</span>
              <span className="">{time}</span>
            </p>
            <h3 className="text-2xl font-bold my-4">{PostTitle}</h3>
            <p className="text-gray-600 font-medium mb-4">{description}</p>
            <h3 className="text-xl font-bold"># {category}</h3>
          </div>
          {user?.email === "admin@gmail.com" && (
            <div className="absolute top-2 right-2 bg-blue-300 py-6 px-2 rounded-xl flex flex-col gap-4">
              <Link to={`/news/${_id}`}>
                <button className="p-3 bg-indigo-600 text-white rounded-xl text-xl">
                  <MdEdit />
                </button>
              </Link>
              <button
                onClick={deleteHandler}
                className="p-3 bg-red-700 text-white rounded-xl text-xl"
              >
                <MdDelete />
              </button>
            </div>
          )}
        </div>
        {/* comment details */}
        <div className="divider"></div>
        <div className="mt-20 ">
          <h1 className="text-center text-3xl font-bold mb-8">Comments</h1>
          <CommentSection></CommentSection>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
