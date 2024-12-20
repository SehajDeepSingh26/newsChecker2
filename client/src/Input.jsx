import {
    animate,
    useMotionTemplate,
    useMotionValue,
    motion,
  } from "framer-motion";
  import React, { useEffect, useRef } from "react";
  import { FiArrowRight } from "react-icons/fi";
  
  const InputFor = ({ onSearch }) => {
    const inputRef = useRef(null);
    const turn = useMotionValue(0);
  
    useEffect(() => {
      animate(turn, 1, {
        ease: "linear",
        duration: 5,
        repeat: Infinity,
      });
    }, []);
  
    const backgroundImage = useMotionTemplate`conic-gradient(from ${turn}turn, #a78bfa00 75%, #a78bfa 100%)`;
  
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputRef.current) {
            onSearch(inputRef.current.value);
          }
        }}
        onClick={() => {
          inputRef.current.focus();
        }}
        className="bg-black relative flex w-full max-w-lg items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/5 py-1.5 pl-6 pr-1.5"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter a URL"
          className="w-full bg-transparent text-sm text-white placeholder-white/80 focus:outline-0"
        />
  
        <button
          onClick={(e) => e.stopPropagation()}
          type="submit"
          className="group flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-br from-gray-50 to-gray-400 px-4 py-3 text-sm font-medium text-gray-900 transition-transform active:scale-[0.985]"
        >
          <span>Search</span>
          <FiArrowRight className="-mr-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100 group-active:-rotate-45" />
        </button>
  
        <div className="pointer-events-none absolute inset-0 z-10 rounded-full">
          <motion.div
            style={{
              backgroundImage,
            }}
            className="mask-with-browser-support absolute -inset-[1px] rounded-full border border-transparent bg-origin-border"
          />
        </div>
      </form>
    );
  };
  
  export default InputFor;
  