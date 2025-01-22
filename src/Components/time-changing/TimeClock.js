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

    return () => clearInterval(timer);
  }, []);

  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 min-h-screen  overflow-hidden flex items-center justify-center">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-lg">
        <div className="text-center p-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Time Clock
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-6">
          {/* Time Display Container */}
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-20 md:w-24 lg:w-32">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {formatHour(hour).toString().padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs md:text-sm text-gray-300 mt-2">Hours</span>
            </div>

            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-20 md:w-24 lg:w-32">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {min.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs md:text-sm text-gray-300 mt-2">Minutes</span>
            </div>

            <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-20 md:w-24 lg:w-32">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {sec.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs md:text-sm text-gray-300 mt-2">Seconds</span>
            </div>
          </div>

          {/* AM/PM Indicator */}
          <div className="flex flex-col items-center mt-4 md:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-20 md:w-24">
              <span className="text-2xl md:text-3xl font-bold text-white">
                {meridiem}
              </span>
            </div>
            <span className="text-xs md:text-sm text-gray-300 mt-2">Period</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeClock;
