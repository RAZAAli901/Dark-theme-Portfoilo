"use client";

import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate stars only on the client side to prevent hydration mismatches
    const generatedStars = Array.from({ length: 120 }).map(() => ({
      width: `${Math.random() * 2 + 0.5}px`,
      height: `${Math.random() * 2 + 0.5}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${2 + Math.random() * 4}s`,
      animationDelay: `${Math.random() * 4}s`,
    }));
    setStars(generatedStars);
  }, []);

  if (stars.length === 0) return <div className="stars-container" id="stars" />;

  return (
    <div className="stars-container" id="stars">
      {stars.map((style, i) => (
        <div key={i} className="star" style={style} />
      ))}
    </div>
  );
}
