import { useState } from "react";

function App() {
  const [miles, setMiles] = useState("");
  const [kilometers, setKilometers] = useState("");

  const handleMilesChange = (e) => {
    const value = e.target.value;
    setMiles(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setKilometers((num * 1.60934).toFixed(4));
    } else {
      setKilometers("");
    }
  };

  const handleKilometersChange = (e) => {
    const value = e.target.value;
    setKilometers(value);
    const num = parseFloat(value);
    if (!isNaN(num)) {
      setMiles((num / 1.60934).toFixed(4));
    } else {
      setMiles("");
    }
  };

  return (
    <div
      className="glass p-10 w-full max-w-xl transition-all duration-300 hover:shadow-3xl"
      style={{ maxWidth: 600 }}
    >
      <div className="flex flex-col items-center mb-10">
        <img
          src="/vite.svg"
          alt="Logo"
          className="w-16 h-16 mb-4 drop-shadow-lg"
        />
        <h1 className="text-4xl font-extrabold mb-2 text-center text-indigo-700 tracking-tight">
          Metric Converter
        </h1>
        <span className="text-sm text-indigo-400 font-medium tracking-wide mb-1">
          Miles &lt;-&gt; Kilometers
        </span>
      </div>
      <div className="mb-8">
        <label
          className="block text-gray-700 mb-3 font-semibold text-lg"
          htmlFor="miles"
        >
          Miles
        </label>
        <input
          id="miles"
          type="number"
          value={miles}
          onChange={handleMilesChange}
          className="w-full px-6 py-4 border border-indigo-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300 transition-all duration-200 bg-white/80 placeholder-gray-400 shadow-sm text-lg mb-2"
          placeholder="Enter miles"
          min="0"
        />
      </div>
      <div className="mb-8">
        <label
          className="block text-gray-700 mb-3 font-semibold text-lg"
          htmlFor="kilometers"
        >
          Kilometers
        </label>
        <input
          id="kilometers"
          type="number"
          value={kilometers}
          onChange={handleKilometersChange}
          className="w-full px-6 py-4 border border-indigo-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-300 transition-all duration-200 bg-white/80 placeholder-gray-400 shadow-sm text-lg mb-2"
          placeholder="Enter kilometers"
          min="0"
        />
      </div>
      <p className="text-center text-gray-500 text-base mt-8 italic">
        1 mile = 1.60934 kilometers
      </p>
    </div>
  );
}

export default App;
