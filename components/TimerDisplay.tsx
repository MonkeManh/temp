"use client";
import { useEffect, useState } from "react";

function formatTime(seconds: number): string {
  if (seconds < 60) return `:${seconds.toString().padStart(2, "0")}`;
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

export default function TimerDisplay() {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const storedTime = localStorage.getItem("CASE_TIME");
    if (storedTime) {
      setTimer(parseInt(storedTime, 10));
    }
  }, []);

  useEffect(() => {
    const handleTimerReset = () => {
      setTimer(0);
    };

    window.addEventListener("timer-reset", handleTimerReset);

    return () => {
      window.removeEventListener("timer-reset", handleTimerReset);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        const next = prev + 1;
        localStorage.setItem("CASE_TIME", next.toString());
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p className="font-semibold text-lg">{formatTime(timer)}</p>;
}
