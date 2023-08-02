import './Home.css';

function Home() {

    const parallax_el = document.querySelectorAll(".parallax");
    let xVal = 0, yVal = 0;


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
