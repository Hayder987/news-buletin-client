import banner from "../images/banner2.jpeg";

const EditPost = () => {
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
        <form className="flex flex-col gap-6">
          {/* title and image */}
          <div className=" md:flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-gray-200">Title</span>
              </label>
              <input
                type="text"
                placeholder="title"
                name="title"
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
            <input type="submit" value="Edit Post" className="btn btn-primary w-full"/>
          </div>
        </form>
      </div>
    </div>
    );
};

export default EditPost;