import { useState } from "react";

const FlipCard = ({ frontImage, backImage = null }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full max-w-3xl px-0">
      <div
        className="relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl transition-transform hover:scale-105 active:scale-95"
        onClick={toggleFlip}
        style={{
          height: "clamp(280px, 90vw, 600px)",
          maxHeight: "600px",
          perspective: "1000px",
        }}
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <div
            className="absolute w-full h-full"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={frontImage}
              alt="Discharge Summary"
              className="w-full h-full object-cover sm:object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-t from-black/60 to-transparent">
              <span className="text-white font-semibold text-base sm:text-lg px-4 text-center">View Sample → Flip</span>
              <span className="text-white/70 text-sm mt-2">→</span>
            </div>
          </div>

          {/* Back */}
          {backImage && (
            <div
              className="absolute w-full h-full"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <img
                src={backImage}
                alt="Discharge Summary Back"
                className="w-full h-full object-cover sm:object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-t from-black/60 to-transparent">
                <span className="text-white font-semibold text-base sm:text-lg px-4 text-center">Click to Flip</span>
                <span className="text-white/70 text-sm mt-2">←</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
