import './Home.css';

function Home() {

    const parallax_el = document.querySelectorAll(".parallax");
    let xVal = 0, yVal = 0;

    window.addEventListener("mousemove", (e) => {
        xVal = e.clientX - window.innerWidth/2; //detect how far mouse is moving from center of screen instead of top left corner
        yVal = e.clientY - window.innerHeight/2; 

        //change translate value of layers 
        parallax_el.forEach((el) => {
            el.style.transform = `translateX(calc(-50% + ${-xVal}px)) translateY(calc(-50% + ${-yVal}px))`;
        }) //negative moves in opp direction of mouse

    })
    return (
        <div className="Home">
            <main>
                <div className="vignette" />
                <img src="main background.png" className="parallax bg-img" />
                <div className="parallax text">
                    <h2>Welcome to</h2>
                    <h1>CSA at UVA</h1>
                </div>
                <img src="mountains_back.png" className="parallax mtn" />
                <img src="house_left.png" className="parallax house" />

            </main>
        </div>
    );
}

export default Home;
