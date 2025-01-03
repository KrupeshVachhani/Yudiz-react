import React, { useEffect, useState } from "react";

const TimeClock = () => {
  const [sec, setSec] = useState(new Date().getSeconds());
  const [min, setMin] = useState(new Date().getMinutes());
  const [hour, setHour] = useState(new Date().getHours());
  const [meridiem, setMeridiem] = useState(hour >= 12 ? "PM" : "AM");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setSec(now.getSeconds());
      setMin(now.getMinutes());
      setHour(now.getHours());
      setMeridiem(now.getHours() >= 12 ? "PM" : "AM");
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  // Convert 24-hour format to 12-hour format
  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };

  return (
    <div className="min-h-screen   from-pink-300 via-purple-300 to-indigo-400 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 animate-fade-in">
          # Time Clock
        </h2>

        {/* Clock Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transform transition-transform duration-300">
          {/* Digital Clock Display */}
          <div className="flex justify-center items-center space-x-4">
            {/* Hours */}
            <div className="bg-gray-100 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px] text-center">
              <div className="text-3xl md:text-5xl font-bold text-gray-800">
                {formatHour(hour).toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-gray-500 mt-2">Hours</div>
            </div>

            <div className="text-3xl md:text-5xl font-bold text-gray-400">
              :
            </div>

            {/* Minutes */}
            <div className="bg-gray-100 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px] text-center">
              <div className="text-3xl md:text-5xl font-bold text-gray-800">
                {min.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-gray-500 mt-2">Minutes</div>
            </div>

            <div className="text-3xl md:text-5xl font-bold text-gray-400">
              :
            </div>

            {/* Seconds */}
            <div className="bg-gray-100 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px] text-center">
              <div className="text-3xl md:text-5xl font-bold text-gray-800">
                {sec.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-gray-500 mt-2">Seconds</div>
            </div>

            {/* AM/PM Indicator */}
            <div className="bg-blue-500 text-white rounded-lg p-4 md:p-6 min-w-[60px] md:min-w-[80px] text-center">
              <div className="text-xl md:text-3xl font-bold">{meridiem}</div>
              <div className="text-sm mt-2">Period</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TimeClock;
