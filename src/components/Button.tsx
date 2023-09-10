import { useState } from "react";

export function Button() {
  const [times, setTimes] = useState(0);
  const handleClick = () => {
    setTimes(times + 1);
  };
  setTimes;
  return (
    <button
      onClick={handleClick}
      className="border-8 border-solid border-stone-600 px-8 py-2 text-[10vh] leading-tight transition hover:bg-stone-200 hover:shadow-[2rem_2rem_0_0_rgba(0,0,0,1)] active:border-stone-800 active:bg-stone-400 active:shadow-[1rem_1rem_0_0_rgba(0,0,0,1)]"
    >
      You Click {times} Times
    </button>
  );
}
