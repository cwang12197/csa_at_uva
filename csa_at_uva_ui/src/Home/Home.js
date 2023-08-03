import './Home.css';
import React, { useState, useEffect } from "react";

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
                                  perspective(2300px) translateZ(${ zValue * speedZ}px)`;
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
                <img src="main background.png" data-speedx= "0.08" data-speedy= "0.1" data-speedz= "0" className="parallax bg-img" alt = "bg" />
                <div className="parallax text" data-speedx= "0.094" data-speedy= "0.105" data-speedz= ".13">
                    <h2>Welcome to</h2>
                    <h1>CSA at UVA</h1>
                </div>
                <img src="mountains_back.png" data-speedx= "0.1" data-speedy= "0.15" data-speedz= "0.18" className="parallax mtn" alt = "mtn" />
                <img src="house_left.png" data-speedx= "0.1" data-speedy= "0.11" data-speedz= "0.22" className="parallax house" alt = "house" />
            </main>
            <div className = "introduction">
                <p>The Chinese Student Association (CSA), as one of the largest Asian-American cultural organizations on grounds, seeks to promote awareness and appreciation for traditional and modern Chinese culture within the University and greater Charlottesville community. CSA hosts an array of cultural and social events designed to reach out to and bring together both native and ethnic Chinese, as well as the non-Chinese populations of UVA, in order to share and celebrate Chinese culture.</p>
            </div>
            </div>
    );
}

export default Home;
