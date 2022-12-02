import React, { useEffect, useRef } from "react";
import "./SpinWheel.css";

function SpinWheel({ setActivePage, setActiveCoupon, setActiveLabel }) {
  const sectors = [
    { color: "#E50101", label: "30% SITEWIDE OFF", coupon: "XAXPDF20" },
    { color: "#EFEFD1", label: "BUY 1 GET 1 FREE", coupon: "MV2REGY4" },
    { color: "#E50101", label: "FREE COFFEE MUG", coupon: "#1R3(V)3" },
    { color: "#EFEFD1", label: "FLAT 20% OFF", coupon: "LF84HGK4" },
    { color: "#E50101", label: "FREE 50G TEA", coupon: "A39BK5SO" },
    { color: "#EFEFD1", label: "FREE HOT CHOCOLATET", coupon: "TI5NC93J" },
  ];

  // Generate random float in range min-max:
  const rand = (m, M) => Math.random() * (M - m) + m;

  const tot = sectors.length;
  const wheel = useRef(null);
  const spin = useRef(null);
  const spinButton = useRef(null);
  useEffect(() => {
    const ctx = wheel.current.getContext("2d");
    const elSpin = spin.current;
    const elSpinButton = spinButton.current;
    const { stopAndCleanup } = spinWheel(ctx, elSpin, elSpinButton);
    return stopAndCleanup;
  }, []);

  function spinWheel(ctx, elSpin, elSpinButton) {
    // const dia = ctx.canvas.width;
    const rad = Math.min(ctx.canvas.width, ctx.canvas.height) / 2 - (10 / 2);
    const PI = Math.PI;
    const TAU = 2 * PI;
    const arc = TAU / sectors.length;
    const friction = 0.991; // 0.995=soft, 0.99=mid, 0.98=hard
    const angVelMin = 0.002; // Below that number will be treated as a stop
    let angVelMax = 0; // Random ang.vel. to acceletare to
    let angVel = 0; // Current angular velocity
    let ang = 0; // Angle rotation in radians
    let isSpinning = false;
    let isAccelerating = false;

    //* Get index of current sector */
    const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;

    //* Draw sectors and prizes texts to canvas */
    const drawSector = (sector, i) => {
      const ang = arc * i;
      ctx.save();
      // COLOR
      ctx.lineWidth = 10;
      ctx.strokeStyle = "#ECBA3F";
      ctx.beginPath();
      ctx.fillStyle = sector.color;
      // ctx.moveTo(rad, rad);
      ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
      ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, rad, ang, ang + arc);
      ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
      ctx.fill();
      ctx.stroke();
      // TEXT
     
      ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
      ctx.rotate(ang + arc / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#000";
      ctx.font = "bold 15px sans-serif";
      ctx.fillText(sector.label, rad - 10, 10);
      //
      ctx.restore();
    };

    //* CSS rotate CANVAS Element */
    const rotate = () => {
      const sector = sectors[getIndex()];
      ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
      elSpin.style.background = sector.color;
    };

    function finishedSpinning() {
      // Called when the wheel stops spinning
      const sector = sectors[getIndex()];
      setTimeout(() => {
        setActiveCoupon(sector.coupon);
        setActiveLabel(sector.label);
        setActivePage("Coupon");
      }, 2000);
    }

    const frame = () => {
      if (!isSpinning) return;

      if (angVel >= angVelMax) isAccelerating = false;

      // Accelerate
      if (isAccelerating) {
        angVel ||= angVelMin; // Initial velocity kick
        angVel *= 1.06; // Accelerate
      }

      // Decelerate
      else {
        isAccelerating = false;
        angVel *= friction; // Decelerate by friction

        // SPIN END:
        if (angVel < angVelMin) {
          isSpinning = false;
          angVel = 0;
          finishedSpinning();
        }
      }

      ang += angVel; // Update angle
      ang %= TAU; // Normalize angle
      rotate(); // CSS rotate!
    };

    const engine = () => {
      frame();
      requestAnimationFrame(engine);
    };

    const startSpin = () => {
      if (isSpinning) return;
      isSpinning = true;
      isAccelerating = true;
      angVelMax = rand(0.25, 0.4);
    };

    elSpin.addEventListener("click", startSpin);
    elSpinButton.addEventListener("click", startSpin);

    const stopAndCleanup = () => {
      isSpinning = false;
      isAccelerating = false;
      elSpin.removeEventListener("click", startSpin);
      elSpinButton.removeEventListener("click", startSpin);
    };

    // INIT!
    sectors.forEach(drawSector);
    rotate(); // Initial rotation
    engine(); // Start engine!
    return { startSpin, stopAndCleanup };
  }

  return (
    <div className="mx-auto">
      <div className="flex flex-col h-screen justify-center items-center ">
        <div id="wheelOfFortune" className="mx-auto">
          <canvas
            id="wheel"
            className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]"
            width="500"
            height="500"
            ref={wheel}
          ></canvas>
          <div id="spin" ref={spin}></div>
        </div>
        <div>
          <button
            className="font-poppins sm:py-8 sm:px-24 sm:mt-12 sm:text-4xl inline-block rounded-full mt-6 text-3xl font-bold bg-[#146531] text-white px-12 py-4 uppercase"
            ref={spinButton}
          >
            Spin
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpinWheel;
