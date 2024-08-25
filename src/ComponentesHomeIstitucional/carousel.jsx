import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden  relative">
      <div
        className={`flex  transition ease-out  h-15 duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img   src={s} />;
        })}
      </div>

      

      <div className="absolute bottom-6  flex shrink justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full  w-[1.6%] h-[1.5vw] border-1  cursor-pointer  ${
                i === current ? " bg-white" : "bg-gray-300"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}