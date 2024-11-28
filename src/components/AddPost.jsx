import banner from "../images/banner2.jpeg";

const AddPost = () => {

    const addPostHandler = e => {
       e.preventDefault()
       const form = e.target;
       const PostTitle = form.PostTitle.value;
       const imgPath = form.imgPath.value;
       const description = form.description.value;
       const name = form.name.value;
       const category = form.category.value;

       const blog = {PostTitle, imgPath, description, name , category}

       console.log(blog)
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
        <h1 className="text-3xl font-bold text-center my-6 text-gray-300">Add Your Post Here</h1>
      <div className="md:max-w-[1000px] bg-opacity-30 mx-auto  p-4 md:p-12 bg-slate-200 rounded-xl">
        <form onSubmit={addPostHandler} className="flex flex-col gap-6">
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
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex justify-center items-center py-6">
            <input type="submit" value="Add News" className="btn btn-primary w-full"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
