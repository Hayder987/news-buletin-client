import { useEffect, useState } from "react";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { TiDelete } from "react-icons/ti";
import { CirclesWithBar } from "react-loader-spinner";
import Swal from "sweetalert2";

const AllUser = () => {

  const [allUser, setAllUser] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetch('https://news-buletin-server.vercel.app/users')
    .then(res=> res.json())
    .then(data=> {
        setAllUser(data)
        setLoading(false)
    })
  },[])



  const deleteHandler =(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://news-buletin-server.vercel.app/user/${id}`,{
                method: "DELETE"
            })
            .then(res=> res.json())
            .then(result=>{
                if(result.deletedCount>0){
                    const remainig = allUser.filter(item=> item._id !== id)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    setAllUser(remainig);
                }
            })
        }
      });
  }

  return (
    <div
    
    >
      
      {
        loading ? <div className="">
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
        </div>:
        <div
        >
          
        <table 
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1500"
        className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>SignUp Time</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allUser.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user?.imgPath}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                     
                    </div>
                  </div>
                </td>
                <td>
                 {user?.email}<br></br>
                 <p className="">
                    {user?.signMethod === 'google.com'? <span className="text-xl"><FcGoogle /></span>:
                    <span className="text-xl text-blue-500"><BsEnvelopeAtFill /></span>
                    }
                </p>
                </td>
                <td>{user?.createAt}</td>
                <td>{user?.lastLogIn}</td>
                
                <th>
                  <button onClick={()=>deleteHandler(user?._id)} className="btn btn-ghost text-3xl text-red-600"><TiDelete /></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      }
    </div>
  );
};

export default AllUser;
