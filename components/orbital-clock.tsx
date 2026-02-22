"use client";

import type React from "react";
import { useState, useEffect, useRef, useMemo } from "react";

export function OrbitalClock() {
  const [time, setTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const clockRef = useRef<HTMLDivElement>(null);

  /* ===============================
     Smooth time update (RAF)
  =============================== */
  useEffect(() => {
    let frameId: number;

    const update = () => {
      setTime(new Date());
      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, []);

  /* ===============================
     Mouse tilt
  =============================== */
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !clockRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    clockRef.current.style.transform = `rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
  };

  const resetTilt = () => {
    if (clockRef.current) {
      clockRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  /* ===============================
     Time calculations
  =============================== */
  const seconds = time.getSeconds() + time.getMilliseconds() / 1000;
  const minutes = time.getMinutes() + seconds / 60;
  const hours = (time.getHours() % 12) + minutes / 60;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6;
  const hourDeg = hours * 30;

  const markers = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const angle = i * 30;
      const rad = (angle - 90) * (Math.PI / 180);
      const x = 50 + 38 * Math.cos(rad);
      const y = 50 + 38 * Math.sin(rad);
      return { i, x, y };
    });
  }, []);

  const formatDate = () => {
    return time.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetTilt();
      }}
      onMouseMove={handleMouseMove}
      style={{ perspective: "800px" }}
    >
      {/* Clock container */}
      <div
        ref={clockRef}
        className="relative w-24 h-24 transition-transform duration-300 ease-out"
      >
        {/* Outer glow (subtle, portfolio style) */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-500"
          style={{
            background: isHovered
              ? "radial-gradient(circle, rgba(203,213,225,0.15) 0%, transparent 70%)"
              : "transparent",
            transform: isHovered ? "scale(1.2)" : "scale(1)",
          }}
        />

        {/* Face */}
        <div
          className="absolute inset-2 rounded-full border backdrop-blur-md"
          style={{
            background:
              "linear-gradient(145deg, rgba(15,23,42,0.45), rgba(10,15,20,0.45))",
            borderColor: "rgba(148,163,184,0.15)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.04), 0 20px 40px rgba(0,0,0,0.6)",
          }}
        >
          {/* Inner ring */}
          <div
            className="absolute inset-3 rounded-full border transition-all duration-500"
            style={{
              borderColor: isHovered
                ? "rgba(203,213,225,0.25)"
                : "rgba(148,163,184,0.08)",
            }}
          />

          {/* Markers */}
          {markers.map(({ i, x, y }) => {
            const isActive = Math.floor(hours) === i;

            return (
              <div
                key={i}
                className="absolute rounded-full transition-all duration-300"
                style={{
                  width: "3px",
                  height: "3px",
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                  background: isActive
                    ? "#E5E7EB"
                    : i % 3 === 0
                      ? "rgba(203,213,225,0.5)"
                      : "rgba(148,163,184,0.25)",
                }}
              />
            );
          })}

          {/* Hour hand */}
          <div
            className="absolute left-1/2 bottom-1/2 origin-bottom rounded-full"
            style={{
              width: "3px",
              height: "28%",
              transform: `translateX(-50%) rotate(${hourDeg}deg)`,
              background: "#E5E7EB",
            }}
          />

          {/* Minute hand */}
          <div
            className="absolute left-1/2 bottom-1/2 origin-bottom rounded-full"
            style={{
              width: "1.5px",
              height: "36%",
              transform: `translateX(-50%) rotate(${minuteDeg}deg)`,
              background: "rgba(203,213,225,0.7)",
            }}
          />

          {/* Second hand (soft glow, not blue) */}
          <div
            className="absolute left-1/2 bottom-1/2 origin-bottom rounded-full"
            style={{
              width: "1px",
              height: "40%",
              transform: `translateX(-50%) rotate(${secondDeg}deg)`,
              background: "#CBD5E1",
              boxShadow: "0 0 6px rgba(203,213,225,0.4)",
            }}
          />

          {/* Center dot */}
          <div
            className="absolute left-1/2 top-1/2 w-[5px] h-[5px] rounded-full transition-all duration-300"
            style={{
              transform: "translate(-50%, -50%)",
              background: isHovered ? "#E5E7EB" : "rgba(203,213,225,0.6)",
            }}
          />
        </div>
      </div>

      {/* Date reveal */}
      <div
        className="absolute right-[90px] font-mono text-[11px] tracking-[0.3em] uppercase transition-all duration-500"
        style={{
          transform: `translateX(-50%) translateY(${isHovered ? 0 : -10}px)`,
          opacity: isHovered ? 1 : 0,
          color: "#94A3B8",
        }}
      >
        {formatDate()}
      </div>
    </div>
  );
}
