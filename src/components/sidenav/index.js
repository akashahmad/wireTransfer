import React from 'react'
import '../../css/index.css'

export default () => {
    return (
        <div className="container-fluid main-div-of-sidenav">
            <div className="img-and-links-main-div">
                {/* img */}
                <div className="img">
                    <img src={require("../../images/c4.jpg")} alt="user" />
                </div>
                {/*sidenav links starts from here */}
                <div className="sidenav">
                    {/* home */}
                    <div className="link-1">
                        <div className="link-inside-div">
                            <img src={require("../../images/homeWhite-01.png")} alt="sidenav-link" />
                            <span>Home</span>
                        </div>
                    </div>
                    {/* Global Account */}
                    <div className="rest-of-links">
                        <div className="inside-div">
                            <img src={require("../../images/homeWhite-01.png")} alt="sidenav-link" />
                            <span>Global Account</span>
                        </div>
                    </div>
                    {/* Transfer */}
                    <div className="rest-of-links">
                        <div className="inside-div">
                            <img src={require("../../images/homeWhite-01.png")} alt="sidenav-link" />
                            <span>Transfer</span>
                        </div>
                    </div>
                    {/* Exchange */}
                    <div className="rest-of-links">
                        <div className="inside-div">
                            <img src={require("../../images/homeWhite-01.png")} alt="sidenav-link" />
                            <span className="exchange">Exchange</span>
                        </div>
                    </div>
                    {/* Cards */}
                    <div className="rest-of-links">
                        <div className="inside-div">
                            <img src={require("../../images/homeWhite-01.png")} alt="sidenav-link" />
                            <span>Cards</span>
                        </div>
                    </div>
                    {/* Reports */}
                    <div className="rest-of-links">
                        <div className="inside-div">
                            <img src={require("../../images/homeWhite-01.png")} alt="sidenav-link" />
                            <span>Reports</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}