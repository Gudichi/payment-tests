"use client";

import { useEffect, useState } from "react";

const formatTime = (time: number | undefined) => {
  if (time === undefined || time === null) return "00";
  return time.toString().padStart(2, "0");
};

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 5,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.days === 0 && prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev; // Stop at 00:00:00:00
        }

        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }

        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <div className="inline-block border-2 border-wine/30 text-espresso px-6 py-3 rounded-lg bg-ivory/50">
        <div className="text-2xl font-bold font-mono text-wine">
          {formatTime(timeLeft.days)}:{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </div>
        <div className="text-xs text-espresso/70 mt-2 uppercase tracking-wide">
          Dan : Sat : Min : Sek
        </div>
      </div>
    </div>
  );
};
