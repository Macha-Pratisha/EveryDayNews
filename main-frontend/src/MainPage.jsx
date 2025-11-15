export default function MainPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50 p-10">

      <h1 className="text-5xl font-extrabold text-gray-800 mb-16 text-center drop-shadow-md">
        Welcome to the Portal
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">

        {/* Manager Portal */}
        <div className="bg-white rounded-3xl shadow-lg border-2 border-indigo-400 hover:shadow-2xl transform hover:-translate-y-2 transition-all p-8 flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-indigo-400 text-white text-3xl font-bold mb-6">
            M
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Manager Portal</h2>
          <p className="text-gray-500 text-center mb-4">Go to Manager Login / Signup</p>
          <a href="https://manager.yourdomain.com" target="_blank" className="px-6 py-2 rounded-full bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-colors">
            Enter
          </a>
        </div>

        {/* Customer Portal */}
        <div className="bg-white rounded-3xl shadow-lg border-2 border-green-400 hover:shadow-2xl transform hover:-translate-y-2 transition-all p-8 flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-400 text-white text-3xl font-bold mb-6">C</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Customer Portal</h2>
          <p className="text-gray-500 text-center mb-4">Go to Customer Login / Signup</p>
          <a href="https://customer.yourdomain.com" target="_blank" className="px-6 py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors">
            Enter
          </a>
        </div>

        {/* Delivery Portal */}
        <div className="bg-white rounded-3xl shadow-lg border-2 border-orange-400 hover:shadow-2xl transform hover:-translate-y-2 transition-all p-8 flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-orange-400 text-white text-3xl font-bold mb-6">D</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Delivery Portal</h2>
          <p className="text-gray-500 text-center mb-4">Go to Delivery Login / Signup</p>
          <a href="https://delivery.yourdomain.com" target="_blank" className="px-6 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors">
            Enter
          </a>
        </div>

      </div>
    </div>
  );
}
