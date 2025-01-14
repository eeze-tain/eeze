import { useState, useEffect, ReactNode, Children } from "react";
import "./CustomSlider.css";

const INTERVAL = 10000; // 10 seconds
interface CustomSliderProps {
    children?: ReactNode;
}
const CustomSlider = ({children} : CustomSliderProps) => {
    const items = Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, [items.length]);

  const getPosition = (index: number) => {
    if (index === currentIndex) return "current";
    if ((index + 1) % items.length === currentIndex) return "next";
    if ((index - 1 + items.length) % items.length === currentIndex)
      return "prev";
    return "hidden";
  };
  return (
    <div className="custom-slider">
      {items.map((child, index) => (
        <div
          key={index}
          className={`custom-slider-item ${getPosition(index)}`}
        >
            {child}
        </div>
      ))}
    </div>
  );
};

export default CustomSlider;
