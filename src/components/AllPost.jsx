import AllPostCard from "./AllPostCard";

const AllPost = ({ allData }) => {
  return (
    <div className="mt-16">
        <h1 className="text-center text-4xl font-bold mb-12">All Post</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {allData.map((post) => (
          <AllPostCard key={post._id} post={post}></AllPostCard>
        ))}
      </div>
    </div>
  );
};

export default AllPost;
