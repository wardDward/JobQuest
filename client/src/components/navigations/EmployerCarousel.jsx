import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
    "Slide 8",
    "Slide 9",
    "Slide 10",
  ];
  const totalItems = slides.length;
  const itemsPerSlide = 3;
  const maxIndex = Math.ceil(totalItems / itemsPerSlide) - 1;

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <>
      <div className="relative w-full overflow-hidden my-5">
        <button
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-[9999999] ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          ❮
        </button>
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-[32.7%] mx-1 flex-shrink-0">
              <div className="bg-blue-500 text-white p-20 text-center rounded-lg">
                {slide}
              </div>
            </div>
          ))}
        </div>
        <button
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 ${currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""
            }`}
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
        >
          ❯
        </button>
      </div>

      {/* Rest of the component code... */}
    </>
  );
}