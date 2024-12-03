import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!roleId) {
      alert("Please select a role.");
      return;
    }

    try {
      await dispatch(register({ username, email, password, roleId })).unwrap();

      // Redirect based on roleId
      if (roleId === "hospital") {
        navigate("/hospital-registration");
      } else if (roleId === "donor") {
        navigate("/donor-registration");
      }
    } catch (error) {
      alert(error); // Display error from Redux
    }
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create an Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Radio Buttons for Role Selection */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-600">Select Role</label>
              <div className="flex space-x-4">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="hospital"
                    checked={roleId === "hospital"}
                    onChange={() => setRoleId("hospital")}
                    className="mr-2"
                  />
                  Hospital
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="donor"
                    checked={roleId === "donor"}
                    onChange={() => setRoleId("donor")}
                    className="mr-2"
                  />
                  Donor
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-red-600 text-white py-2 rounded-md text-sm font-medium hover:bg-red-700 transition duration-150"
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {/* Redirect to login */}
            <div className="mt-4 text-center text-sm">
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Log In
                </button>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;
