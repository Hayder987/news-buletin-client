import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { CirclesWithBar } from "react-loader-spinner";

const AdminAllComment = () => {
  const [allComments, setAllComment] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://news-buletin-server.vercel.app/comments")
      .then((res) => res.json())
      .then((data) => {
        setAllComment(data);
        setLoading(false);
      });
  }, []);

  console.log(allComments);

  return (
    <div className="">
      {loading ? <div className="">
        <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
      </div> : (
        <div className="grid grid-cols-2 gap-4">
          {allComments.map((comment) => (
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminAllComment;
