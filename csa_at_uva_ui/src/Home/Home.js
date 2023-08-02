import './Home.css';

function Home() {
    return (
        <div className="Home">
            <main>
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
