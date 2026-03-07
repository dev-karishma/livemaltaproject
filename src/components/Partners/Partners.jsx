import { useState, useRef } from "react";

import amity from "../../assets/Images/amity.jpg";
import Jaipuria from "../../assets/Images/Jaipuria.jpg";
import podar from "../../assets/Images/podar.jpg"
import Rcbs from "../../assets/Images/Rcbs.jpg";
import Nirmala from "../../assets/Images/Nirmala.jpg";
import Graphice from "../../assets/Images/Graphice.jpg";
import Auro from "../../assets/Images/Auro.jpg";
import Parul from "../../assets/Images/Parul.jpg";
import ITBS from "../../assets/Images/ITBS.jpg";
import Jhanjeri from "../../assets/Images/Jhanjeri.jpg";
import Ceumh from "../../assets/Images/Ceumh.jpg";
import Conite from "../../assets/Images/Conite.jpg";
import JRNRVU from "../../assets/Images/JRNRVU.jpg";
import suptech from "../../assets/Images/suptech.jpg";
import design from "../../assets/Images/design.jpg";
import TARUND from "../../assets/Images/TARUND.jpg";
import digital from "../../assets/Images/digital.jpg";
import "./Partners.css"
const Partners = () => {

    const logos = [
        amity, Jaipuria, podar, Rcbs, Nirmala,
        Graphice, Auro, Parul, ITBS, Jhanjeri,
        Ceumh, Conite, JRNRVU, suptech,
        design, TARUND, digital
    ];

    const [index, setIndex] = useState(0);

    const intervalRef = useRef(null);

    /* responsive logos */

    const visible =
        window.innerWidth < 768 ? 2 :
            window.innerWidth < 1024 ? 3 : 5;

    /* move next */

    const moveNext = () => {
        setIndex((prev) => (prev + 1) % logos.length);
    };

    /* move prev */

    const movePrev = () => {
        setIndex((prev) => (prev - 1 + logos.length) % logos.length);
    };

    /* hover start */

    const startNext = () => {
        intervalRef.current = setInterval(moveNext, 400);
    };

    const startPrev = () => {
        intervalRef.current = setInterval(movePrev, 400);
    };

    /* stop */

    const stopSlide = () => {
        clearInterval(intervalRef.current);
    };

    return (

        <section className="partners-section">

            <p className="partner-label">PARTNER INSTITUTIONS</p>

            <h2 className="partner-title">
                We are proudly partnered with the following institutions
            </h2>

            <div className="partner-slider">

                <button
                    className="arrow"
                    onMouseEnter={startPrev}
                    onMouseLeave={stopSlide}
                >
                    ❮
                </button>

                <div className="logo-row">

                    {Array.from({ length: visible }).map((_, i) => {

                        const logo = logos[(index + i) % logos.length];

                        return (
                            <div className="circle" key={i}>
                                <img src={logo} alt="partner" />
                            </div>
                        );

                    })}

                </div>

                <button
                    className="arrow"
                    onMouseEnter={startNext}
                    onMouseLeave={stopSlide}
                >
                    ❯
                </button>

                <hr/>

            </div>

            
        </section>

    );

};

export default Partners;