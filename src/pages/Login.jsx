import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md backdrop-blur-md bg-gray-900/60 border border-gray-700 rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Log in to continue your journey.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full input input-bordered bg-gray-800 border-gray-700 text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary px-2"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full input input-bordered bg-gray-800 border-gray-700 text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary px-2"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-gray-400 text-sm">
              <input type="checkbox" className="checkbox checkbox-sm" />
              Remember me
            </label>

            <Link to="#" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn bg-green-300 text-black w-full mt-4 text-lg font-semibold shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-gray-400">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
