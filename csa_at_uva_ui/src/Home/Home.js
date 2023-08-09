import './Home.css';
import React, { useState, useEffect } from "react";
import ThisWeekInCSA from '../ThisWeekInCSA/ThisWeekInCSA';
import Newsletter from '../Newsletter/Newsletter';
import Carousel
 from 'react-material-ui-carousel';
function Home() {

    const parallax_el = document.querySelectorAll(".parallax");
    const [xVal, setXVal] = useState(0);
    const [yVal, setYVal] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setXVal(e.clientX - window.innerWidth / 2);
            setYVal(e.clientY - window.innerHeight / 2);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const handleParallax = () => {
            parallax_el.forEach((el) => {
                const speedX = el.getAttribute('data-speedx');
                const speedY = el.getAttribute('data-speedy');
                const speedZ = el.getAttribute('data-speedz');

                const isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
                const zValue = xVal - parseFloat(getComputedStyle(el).left) * isInLeft * 0.1;

                let translateY = -yVal * speedY;

                el.style.transform = `translateX(calc(-50% + ${-xVal * speedX}px))
                                  translateY(calc(-50% + ${translateY}px)) 
                                  perspective(2300px) translateZ(${zValue * speedZ}px)`;
            });
        };

        window.addEventListener("mousemove", handleParallax);

        return () => {
            window.removeEventListener("mousemove", handleParallax);
        };
    }, [xVal, yVal]);

    return (
        <div className="Home">
            <main>
                <img src="main background.png" data-speedx="0.08" data-speedy="0.1" data-speedz="0" className="parallax bg-img" alt="bg" />
                <div className="parallax text" data-speedx="0.04" data-speedy="0.05" data-speedz=".03">
                    <h2>Welcome to</h2>
                    <h1>CSA at UVA</h1>
                </div>
                <img src="mountains_back.png" data-speedx="0.1" data-speedy="0.15" data-speedz="0.18" className="parallax mtn" alt="mtn" />
                <img src="house_left.png" data-speedx="0.1" data-speedy="0.11" data-speedz="0.22" className="parallax house" alt="house" />
            </main>
            <div className="introduction">
                <p>The Chinese Student Association (CSA), as one of the largest Asian-American cultural organizations on grounds, seeks to promote awareness and appreciation for traditional and modern Chinese culture within the University and greater Charlottesville community. CSA hosts an array of cultural and social events designed to reach out to and bring together both native and ethnic Chinese, as well as the non-Chinese populations of UVA, in order to share and celebrate Chinese culture.</p>
            </div>
            <Carousel />
            <div className="member-form">
                <button onClick={() => window.open("https://www.tinyurl.com/oldcsa")}>
                    Returning Members Form
                </button>
                <button onClick={() => window.open("https://www.tinyurl.com/csanewmember")}>
                    New Members Form
                </button>
            </div>
            <Newsletter />
            <ThisWeekInCSA />

            <div className='section-list'>
                <section className='family'>
                    <h2>See Our Families</h2>
                    <p>Families are an integral part of CSA.</p>
                    <a href='/families'>
                        <button>View Families</button>
                    </a>
                </section>
                <section className='officers'>
                    <h2>Talk to Our Officers</h2>

                    <p>Our officers are very cool and very nice.</p>

                    <a href='/officers'>
                        <button>View Officers</button>
                    </a>
                </section>

                <section className='gallery'>
                    <h2>View Our Past Events</h2>
                    <p>
                        See pictures and videos of our past performances and social events!
                    </p>
                    <a href='/gallery'>
                        <button>View Gallery</button>
                    </a>
                </section>
            </div>
        </div>
    );
}

export default Home;
