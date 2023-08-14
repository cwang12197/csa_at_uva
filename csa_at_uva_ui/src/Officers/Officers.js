import "./Officers.css";

function Officers() {
    return (
        <div className="officer-container">
        <h1 className="title">Our Officers</h1>
            <p className="title">Here are the officers that organize all the CSA events!</p>
        <div className="exec-container">
            <div className="exec-officer">
                    <img src="https://storage.googleapis.com/csa-at-uva-files/officers/safak.png" alt = "president" />
                    <div className="exec-info">
                            <p className="role">President</p>
                            <p className="name">Safa Khan</p>
                        </div>
                    </div>
                        <div className="exec-officer">
                    <img src="https://storage.googleapis.com/csa-at-uva-files/officers/emmamei.PNG" alt = "vice president"/>
                    <div className="exec-info">
                            <p className="role">Vice Present</p>
                            <p className="name">Safa Khan</p>
                        </div>
                    </div>
                        <div className="exec-officer">
                    <img src="https://storage.googleapis.com/csa-at-uva-files/officers/justinz.png" alt = "treasurer"/>
                    <div className="exec-info">
                            <p className="role">Treasurer</p>
                            <p className="name">Safa Khan</p>
                        </div>
                    </div>
                        <div className="exec-officer">
                    <img src="https://storage.googleapis.com/csa-at-uva-files/officers/oliviaw.png" alt = "secretary"/>
                    <div className="exec-info">
                            <p className="role">Secretary</p>
                            <p className="name">Safa Khan</p>
                        </div>
                    </div>
                 </div>
        </div>
    );
}

export default Officers;