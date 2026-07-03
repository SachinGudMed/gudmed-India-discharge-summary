import { useState } from "react";

const FlipCard = ({ frontImage, backImage = null }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full max-w-3xl px-4 sm:px-0">
      <div
        className="relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105"
        onClick={toggleFlip}
        style={{
          height: "clamp(300px, 80vw, 600px)",
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
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-t from-black/60 to-transparent">
              <span className="text-white font-semibold text-lg">Click to Flip</span>
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
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-t from-black/60 to-transparent">
                <span className="text-white font-semibold text-lg">Click to Flip</span>
                <span className="text-white/70 text-sm mt-2">←</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="text-center text-white/60 text-sm mt-4">
        Interactive 3D Flip Card
      </p>
    </div>
  );
};

export default FlipCard;
