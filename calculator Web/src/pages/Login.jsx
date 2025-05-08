// import React, { useState } from "react";

// const Login = ({ onLogin, onSignupClick }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (email && password) {
//       onLogin();
//     }
//   };

//   return (
//     <div className="max-w-sm mx-auto mt-10">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl mb-4">Login</h2>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
//           Login
//         </button>

        
//         <p className="mt-4 text-sm text-center">
//           Don't have an account?{" "}
//           <button
//             type="button"
//             onClick={onSignupClick}
//             className="text-blue-500 hover:underline"
//           >
//             Signup here
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";

const Login = ({ onLogin, onSignupClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-blue-300 animate-fade-in">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md transition-transform transform hover:scale-[1.02]"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onSignupClick}
            className="text-blue-600 hover:underline"
          >
            Signup here
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
