import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContex } from "../Context/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const {loginUser, googleLogIn} = useContext(AuthContex)
  const navigate = useNavigate()
  const {state} = useLocation()
  console.log(state)

  const loginHandler = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
    .then(result=>{
      
      const lastLogIn = result.user.metadata.lastSignInTime;
      const user = {email, lastLogIn}
      console.log(result.user)
      fetch('https://news-buletin-server.vercel.app/user',{
        method: 'PATCH',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(user)
      })
      .then(res=> res.json())
      .then(data=> {
        form.reset()
        console.log(data)
      })
     if(state){
      navigate(state)
     }
     else{
      navigate('/')
     }
    })
    .catch(err=> {
      console.log(err.message)
    })
  }

  
const googleLoginHandler = ()=>{
  googleLogIn()
  .then(result=>{
    const currentUser = result.user
    const user = {
      name: currentUser.displayName,
      imgPath: currentUser.photoURL, 
      email: currentUser.email , 
      createAt: currentUser.metadata.creationTime,
      lastLogIn:currentUser.metadata.lastSignInTime,
      signMethod : result.providerId || "",

    }

    fetch('https://news-buletin-server.vercel.app/user',{
      method: "PUT",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data)
    })
      
    console.log(result.user)
    if(state){
      navigate(state)
     }
     else{
      navigate('/')
     }
  })
  .catch(err=>{
    console.log(err.message);
  })
}

  return (
    <div className="mb-20 lg:p-12">
      <h1 className="text-4xl font-bold my-4 text-center">Login Now</h1>
      <div className="max-w-[500px] mx-auto bg-blue-200 rounded-xl p-12">
        <form onSubmit={loginHandler} className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Login"
              className="bg-blue-600 py-3 px-6 text-white rounded-xl"
            />
          </div>
          <div className="form-control mt-6">
            <p className="text-center">
              Don't have Account?{" "}
              <Link to="/register">
                <span className="text-blue-700 underline">Register Now</span>
              </Link>
            </p>
          </div>
          
        </form>
        <div className="form-control mt-6">
            <button onClick={googleLoginHandler} className="flex justify-center items-center gap-6 border-2 border-blue-700 p-3 rounded-full">
              <span className="text-2xl "><FcGoogle /></span>
              <span className="text-xl font-bold">Login With Google</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
