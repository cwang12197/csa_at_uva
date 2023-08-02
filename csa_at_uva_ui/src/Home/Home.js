import './Home.css';

function Home() {

    const parallax_el = document.querySelectorAll(".parallax");
    let xVal = 0, yVal = 0;

    window.addEventListener("mousemove", (e) => {
        xVal = e.clientX - window.innerWidth/2; //detect how far mouse is moving from center of screen instead of top left corner
        yVal = e.clientY - window.innerHeight/2; 

        //change translate value of layers 
        parallax_el.forEach((el) => {
            let speedX = el.getAttribute('data-speedx');
            let speedY = el.getAttribute('data-speedy');

            let zValue = e.clientX - parseFloat(getComputedStyle(el).left);

            el.style.transform = `translateX(calc(-50% + ${-xVal * speedX}px))
            translateY(calc(-50% + ${-yVal*speedY}px)) 
            perspective(2300px) translateZ(${zValue}px)`;
        }) //negative moves in opp direction of mouse


    })
    return (
        <div className="Home">
            <main>
                <div className="vignette" />
                <img src="main background.png" data-speedx= "0.23" data-speedy= "0.25" className="parallax bg-img" />
                <div className="parallax text" data-speedx= "0.15" data-speedy= "0.16">
                    <h2>Welcome to</h2>
                    <h1>CSA at UVA</h1>
                </div>
                <img src="mountains_back.png" data-speedx= "0.12" data-speedy= "0.13" className="parallax mtn" />
                <img src="house_left.png" data-speedx= "0.17" data-speedy= "0.1" className="parallax house" />

            </main>
        </div>
    );
}

export default Home;
