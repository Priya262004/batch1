// import { useState } from "react";

// export default function HelloApp() {
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");

//   const handleClick = () => {
//     setMessage(`Hello, ${name}!`);
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 p-6">
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="p-2 border rounded-md"
//       />
//       <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded-md">
//         OK
//       </button>
//       {message && <p className="text-xl font-semibold">{message}</p>}
//     </div>
//   );
// }
