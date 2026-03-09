// import { useState, useRef } from "react";

// import amity from "../../assets/Images/amity.jpg";
// import Jaipuria from "../../assets/Images/Jaipuria.jpg";
// import podar from "../../assets/Images/podar.jpg"
// import Rcbs from "../../assets/Images/Rcbs.jpg";
// import Nirmala from "../../assets/Images/Nirmala.jpg";
// import Graphice from "../../assets/Images/Graphice.jpg";
// import Auro from "../../assets/Images/Auro.jpg";
// import Parul from "../../assets/Images/Parul.jpg";
// import ITBS from "../../assets/Images/ITBS.jpg";
// import Jhanjeri from "../../assets/Images/Jhanjeri.jpg";
// import Ceumh from "../../assets/Images/Ceumh.jpg";
// import Conite from "../../assets/Images/Conite.jpg";
// import JRNRVU from "../../assets/Images/JRNRVU.jpg";
// import suptech from "../../assets/Images/suptech.jpg";
// import design from "../../assets/Images/design.jpg";
// import TARUND from "../../assets/Images/TARUND.jpg";
// import digital from "../../assets/Images/digital.jpg";
// import "./Partners.css"
// const Partners = () => {

//     const logos = [
//         amity, Jaipuria, podar, Rcbs, Nirmala,
//         Graphice, Auro, Parul, ITBS, Jhanjeri,
//         Ceumh, Conite, JRNRVU, suptech,
//         design, TARUND, digital
//     ];

//     const [index, setIndex] = useState(0);
    

//     const intervalRef = useRef(null);

//     /* responsive logos */

//     const visible =
//         window.innerWidth < 768 ? 2 :
//             window.innerWidth < 1024 ? 3 : 5;

//     /* move next */

//     const moveNext = () => {
//         setIndex((prev) => (prev + 1) % logos.length);
//     };

//     /* move prev */

//     const movePrev = () => {
//         setIndex((prev) => (prev - 1 + logos.length) % logos.length);
//     };

//     /* hover start */

//     const startNext = () => {
//         intervalRef.current = setInterval(moveNext, 400);
//     };

//     const startPrev = () => {
//         intervalRef.current = setInterval(movePrev, 400);
//     };

//     /* stop */

//     const stopSlide = () => {
//         clearInterval(intervalRef.current);
//     };

//     return (

//         <section className="partners-section">

//             <p className="partner-label">PARTNER INSTITUTIONS</p>

//             <h2 className="partner-title">
//                 We are proudly partnered with the following institutions
//             </h2>

//             <div className="partner-slider">

//                 <button
//                     className="arrow"
//                     onMouseEnter={startPrev}
//                     onMouseLeave={stopSlide}
//                 >
//                     ❮
//                 </button>

//                 <div className="logo-row">

//                     {Array.from({ length: visible }).map((_, i) => {

//                         const logo = logos[(index + i) % logos.length];

//                         return (
//                             <div className="circle" key={i}>
//                                 <img src={logo} alt="partner" />
//                             </div>
//                         );

//                     })}

//                 </div>

//                 <button
//                     className="arrow"
//                     onMouseEnter={startNext}
//                     onMouseLeave={stopSlide}
//                 >
//                     ❯
//                 </button>

//                 <hr/>

//             </div>

            
//         </section>

//     );

// };

// export default Partners;



// Partners.jsx — GUARANTEED WORKING
import { useState, useRef, useEffect } from "react";
import "./Partners.css";

// ── Import images — adjust paths if needed ──
import amity    from "../../assets/Images/amity.jpg";
import Jaipuria from "../../assets/Images/Jaipuria.jpg";
import podar    from "../../assets/Images/podar.jpg";
import Rcbs     from "../../assets/Images/Rcbs.jpg";
import Nirmala  from "../../assets/Images/Nirmala.jpg";
import Graphice from "../../assets/Images/Graphice.jpg";
import Auro     from "../../assets/Images/Auro.jpg";
import Parul    from "../../assets/Images/Parul.jpg";
import ITBS     from "../../assets/Images/ITBS.jpg";
import Jhanjeri from "../../assets/Images/Jhanjeri.jpg";
import Ceumh    from "../../assets/Images/Ceumh.jpg";
import Conite   from "../../assets/Images/Conite.jpg";
import JRNRVU   from "../../assets/Images/JRNRVU.jpg";
import suptech  from "../../assets/Images/suptech.jpg";
import design   from "../../assets/Images/design.jpg";
import TARUND   from "../../assets/Images/TARUND.jpg";
import digital  from "../../assets/Images/digital.jpg";

const LOGOS = [
  { src: amity,    name: "Amity" },
  { src: Jaipuria, name: "Jaipuria" },
  { src: podar,    name: "Podar" },
  { src: Rcbs,     name: "RCBS" },
  { src: Nirmala,  name: "Nirmala" },
  { src: Graphice, name: "Graphice" },
  { src: Auro,     name: "Auro" },
  { src: Parul,    name: "Parul" },
  { src: ITBS,     name: "ITBS" },
  { src: Jhanjeri, name: "Jhanjeri" },
  { src: Ceumh,    name: "Ceumh" },
  { src: Conite,   name: "Conite" },
  { src: JRNRVU,   name: "JRNRVU" },
  { src: suptech,  name: "Suptech" },
  { src: design,   name: "Design" },
  { src: TARUND,   name: "TARUND" },
  { src: digital,  name: "Digital" },
];

const getVisible = () => {
  const w = window.innerWidth;
  if (w < 480)  return 2;
  if (w < 768)  return 2;
  if (w < 1024) return 3;
  return 5;
};

export default function Partners() {
  const [index,   setIndex]   = useState(0);
  const [visible, setVisible] = useState(getVisible);
  const timerRef = useRef(null);

  // auto-slide every 2.5s
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex(p => (p + 1) % LOGOS.length);
    }, 2500);
    return () => clearInterval(timerRef.current);
  }, []);

  // resize listener
  useEffect(() => {
    const onResize = () => setVisible(getVisible());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const prev = () => {
    clearInterval(timerRef.current);
    setIndex(p => (p - 1 + LOGOS.length) % LOGOS.length);
  };

  const next = () => {
    clearInterval(timerRef.current);
    setIndex(p => (p + 1) % LOGOS.length);
  };

  const shown = Array.from({ length: visible }, (_, i) =>
    LOGOS[(index + i) % LOGOS.length]
  );

  return (
    <section className="partners-section">

      <p className="partner-label">PARTNER INSTITUTIONS</p>

      <h2 className="partner-title">
        We are proudly partnered with the following institutions
      </h2>

      <div className="partner-slider">

        <button className="arrow left-arrow" onClick={prev} aria-label="Previous">
          &#10094;
        </button>

        <div className="logo-row">
          {shown.map((logo, i) => (
            <div className="circle" key={`${index}-${i}`}>
              <img src={logo.src} alt={logo.name} />
            </div>
          ))}
        </div>

        <button className="arrow right-arrow" onClick={next} aria-label="Next">
          &#10095;
        </button>

      </div>

      {/* Dots */}
      {/* <div className="partner-dots">
        {LOGOS.map((_, i) => (
          <span
            key={i}
            className={`dot${i === index ? " active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div> */}

    </section>
  );
}