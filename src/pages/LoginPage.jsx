import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="mb-20 lg:p-12">
      <h1 className="text-4xl font-bold my-4 text-center">Login Now</h1>
      <div className="max-w-[500px] mx-auto bg-blue-200 rounded-xl p-12">
        <form className="">
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
      </div>
    </div>
  );
};

export default LoginPage;
