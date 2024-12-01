import { useLoaderData, useNavigate } from "react-router";
import banner from "../images/banner2.jpeg";
import moment from "moment";
import { toast } from "react-toastify";

const EditPost = () => {
   const post = useLoaderData()
   const date = moment().format('MMMM Do YYYY, h:mm:ss a');
   const navigate = useNavigate()

   const { PostTitle, imgPath, description, name, category, _id } =
   post || {};

   const postEditHandler =(e)=>{
    e.preventDefault()
    const form = e.target;
    const PostTitle = form.PostTitle.value;
    const imgPath = form.imgPath.value;
    const description = form.description.value;
    const name = form.name.value;
    const category = form.category.value;  
    const blog = {PostTitle, imgPath, description, name , category }
    blog.time = date;

   fetch(`https://news-buletin-server.vercel.app/post/${_id}`,{
    method: "PUT",
    headers: {"content-type" : "application/json"},
    body: JSON.stringify(blog)
   })
   .then(res=> res.json())
   .then(()=>{
    toast.success("post edit Successfully")
    form.reset()
    navigate('/')
   })

   }

    return (
        <div
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="p-6 md:p-16 min-h-[70vh] mb-20 rounded-xl"
    >
        <h1 className="text-3xl font-bold text-center my-6 text-gray-300">Edit Post Here</h1>
      <div className="md:max-w-[1000px] bg-opacity-30 mx-auto  p-4 md:p-12 bg-slate-200 rounded-xl">
        <form onSubmit={postEditHandler} className="flex flex-col gap-6">
          {/* title and image */}
          <div className=" md:flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-200">Title</span>
              </label>
              <input
                type="text"
                placeholder="title"
                name="PostTitle"
                defaultValue={PostTitle}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-200">PhotoUrl</span>
              </label>
              <input
                type="text"
                placeholder="imgPath"
                name="imgPath"
                defaultValue={imgPath}
                className="input input-bordered"
                required
              />
            </div>
          </div>
           {/* description */}
           <div className="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-200">Description</span>
              </label>
              <input
                type="text"
                placeholder="description"
                name="description"
                defaultValue={description}
                className="input input-bordered"
                required
              />
            </div>
            
          </div>
          {/* Author and Tag */}
          <div className=" md:flex gap-6 mb-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-200">Author Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                defaultValue={name}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-200">Category</span>
              </label>
              <input
                type="text"
                placeholder="Category"
                name="category"
                defaultValue={category}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex justify-center items-center py-6">
            <input type="submit" value="Edit Post" className="btn btn-primary w-full"/>
          </div>
        </form>
      </div>
    </div>
    );
};

export default EditPost;