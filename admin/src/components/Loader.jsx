import React from "react";

export default function Loader({ color }) {
  return (
    <button disabled className="flex gap-1 items-center">
      <div
        className={`inline-block  text-${color}-600 h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      ></div>
    </button>
  );
}
