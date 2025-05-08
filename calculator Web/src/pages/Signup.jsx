// import React, { useState } from 'react';

// const Signup = ({ onLoginClick }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email || !emailRegex.test(email)) {
//       setError('Please enter a valid email.');
//       return;
//     }

//     if (!password || password.length < 6) {
//       setError('Password should be at least 6 characters long.');
//       return;
//     }

//     setError('');
//     console.log('Signup successful with email:', email, 'and password:', password);
//     alert('Signup successful!');
//   };

//   return (
//     <div className="max-w-sm mx-auto mt-10">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Signup</h2>

//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           Signup
//         </button>

//         <p className="mt-4 text-sm text-center">
//           Already have an account?{' '}
//           <button
//             type="button"
//             onClick={onLoginClick}
//             className="text-green-600 hover:underline"
//           >
//             Login here
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';

const Signup = ({ onLoginClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setError('Please enter a valid email.');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password should be at least 6 characters long.');
      return;
    }

    setError('');
    console.log('Signup successful with email:', email, 'and password:', password);
    alert('Signup successful!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-blue-300 animate-fade-in">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md transition-transform transform hover:scale-[1.02]"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Signup</h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Signup
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onLoginClick}
            className="text-green-600 hover:underline"
          >
            Login here
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signup;
