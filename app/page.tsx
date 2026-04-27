export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-80 bg-white shadow-lg rounded-xl p-6">
        
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
          Login
        </button>

        <p className="text-xs text-center text-gray-500 mt-3">
          Simple React + Tailwind UI 🚀
        </p>

      </div>
    </div>
  );
}