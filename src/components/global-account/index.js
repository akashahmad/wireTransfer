import React,{useState} from 'react'

export default () => {

    const [selectOption, setSelectOption] = useState(false);

    return (
        <div className="container-fluid global-account-component">
            <div className="main-div-of-three-portions">
                {/* left side */}
                <div className="left-side">
                    {/* name and address heading */}
                    <div className="headings">
                        <h5>Waleed Alharbi (CampusMart)</h5>
                        <h6>Account Number : 6597452644</h6>
                    </div>
                    {/* cards  */}
                    <div className="cards">
                        <div className="card-and-plus-icon-div bg-blue">
                            <div className="card-1 ">
                                <img src={require("../../images/flag-01.png")} alt="sidenav-link" />
                                <span>5</span>
                                <p>Country Accounts</p>
                            </div>
                            <div className="plus-icon">
                                <img src={require("../../images/plus-01.png")} alt="sidenav-link" />
                            </div>
                        </div>
                        {/* 2nd card */}
                        <div className="card-and-plus-icon-div bg-aqua">
                            <div className="card-1 ">
                                <img src={require("../../images/flag-01.png")} alt="sidenav-link" />
                                <span>5</span>
                                <p>Country Accounts</p>
                            </div>
                            <div className="plus-icon">
                                <img src={require("../../images/plus-01.png")} alt="sidenav-link" />
                            </div>
                        </div>
                        {/* 3rd card */}
                        <div className="card-and-plus-icon-div bg-orange">
                            <div className="card-1 ">
                                <img src={require("../../images/flag-01.png")} alt="sidenav-link" />
                                <span>5</span>
                                <p>Country Accounts</p>
                            </div>
                            <div className="plus-icon">
                                <img src={require("../../images/plus-01.png")} alt="sidenav-link" />
                            </div>
                        </div>
                        {/* 4th card */}
                        <div className="card-and-plus-icon-div bg-pink">
                            <div className="card-1 ">
                                <img src={require("../../images/flag-01.png")} alt="sidenav-link" />
                                <span>5</span>
                                <p>Country Accounts</p>
                            </div>
                            <div className="plus-icon">
                                <img src={require("../../images/plus-01.png")} alt="sidenav-link" />
                            </div>
                        </div>
                    </div>
                    {/* heading below cards */}
                    <div className="heading-below-cards">
                        <h5>Main Account</h5>
                    </div>
                    {/* account info  */}
                    <div className="account-info">
                        <span className="img-instead-of-saudia">S</span>
                        <div className="data">
                            <h5>Saudi Country Account</h5>
                            <h6>Powered By Al rajhi Account</h6>
                            <h6>Address :</h6>
                            <p>4231 Almatar rood, Almatar Medina, Medina-42341-6934 </p>
                        </div>
                        <div className="img-and-fund-text">
                            <div className="img-span">
                                <img src={require("../../images/cardWhite-01.png")} alt="sidenav-link" />
                                <span>Fund</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right portion */}
                <div className="right-section">
                    <div>
                        {/* first portion */}
                        <div className="padding">
                            {/* left-side-select-option */}
                            <div className="select-option-main-div">
                                <div className="first-portion bg-blue">
                                    <div className="right-section-select-option">
                                        <img src={require("../../images/flag-01.png")} alt="sidenav-link" />
                                        <h6>Country Accounts</h6>
                                    </div>
                                    <div className="drop-down-arrow">
                                        <img src={selectOption ===false ? require("../../images/downloadWhite-01.png"): require("../../images/upward.png")} alt="sidenav-link"
                                            onClick={() => {
                                                if (selectOption === false) {
                                                    setSelectOption(true);
                                                }
                                                else {
                                                    setSelectOption(false);
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                {selectOption ?
                                    <div className="options-inside-select">
                                        <ul>
                                            <li>One</li>
                                            <li>One</li>
                                            <li>One</li>
                                        </ul>
                                    </div>
                                    : ""}
                            </div>
                        </div>
                        {/* below select options */}
                        <div className="below-select-option">
                            <div className="left-side-notification">
                                <div className="data-collection">
                                    <div className="inside-div-of-notification">
                                        <div className="span-heading-para">
                                            <span>S</span>
                                            <div>
                                                <h6>Saudi Country Account</h6>
                                                <p>Main Account</p>
                                            </div>
                                        </div>
                                        <div className="info-img">
                                            <img src={require("../../images/info-01.png")} alt="sidenav-link" />
                                        </div>
                                    </div>
                                    {/* balance area */}
                                    <div className="main-div-of-balance">
                                        <div className="balance-area">
                                            <h6>Balance</h6>
                                            <h2>1655.000</h2>
                                            <h4>SAR</h4>
                                        </div>
                                        <div className="div-for-numbers">
                                            <div className="numbers">
                                                <h6 className="bg-aqua">4</h6>
                                            </div>
                                            <div className="numbers">
                                                <h6 className="bg-orange">4</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 2nd one */}
                                <div className="data-collection">
                                    <div className="inside-div-of-notification">
                                        <div className="span-heading-para">
                                            <span>S</span>
                                            <div>
                                                <h6>Saudi Country Account</h6>
                                                <p>Main Account</p>
                                            </div>
                                        </div>
                                        <div className="info-img">
                                            <img src={require("../../images/info-01.png")} alt="sidenav-link" />
                                        </div>
                                    </div>
                                    {/* balance area */}
                                    <div className="main-div-of-balance">
                                        <div className="balance-area">
                                            <h6>Balance</h6>
                                            <h2>1655.000</h2>
                                            <h4>SAR</h4>
                                        </div>
                                        <div className="div-for-numbers">
                                            <div className="numbers">
                                                <h6 className="bg-aqua">4</h6>
                                            </div>
                                            <div className="numbers">
                                                <h6 className="bg-orange">4</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2nd part inside right portion */}
                    <div className="second-part-right-portion">
                        <div className="main-div-right-select-option">
                            {/* left-side-select-option */}
                            <div className="first-portion bg-aqua">
                                <div className="right-section-select-option">
                                    <img src={require("../../images/flag-01.png")} alt="sidenav-link" />
                                    <h6>Country Accounts</h6>
                                </div>
                                <div className="drop-down-arrow">
                                    <img src={require("../../images/downloadWhite-01.png")} alt="sidenav-link" />
                                </div>
                            </div>
                        </div>
                        {/* below-select-option-right-side */}
                        <div className="right-side-below-select-option">
                            <div className="assigned-data-info">
                                {/* assigned heading */}
                                <div className="assigned-heading-img">
                                    <h6>Assigned to</h6>
                                    <img src={require("../../images/info-01.png")} alt="sidenav-link" />
                                </div>
                                <div className="below-assigned-heading-img">
                                    <div>
                                        <h2>Office 38</h2>
                                        <div className="links-flex">
                                            <div className="left-side-copy-link">
                                                <img src={require("../../images/iban-01.png")} alt="sidenav-link" />
                                                <p>IBAN# --56566</p>
                                            </div>
                                            <div className="left-side-copy-link">
                                                <img src={require("../../images/iban-01.png")} alt="sidenav-link" />
                                                <p>IBAN# --56566</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="balance-and-amount">
                                        <h6>Balance</h6>
                                        <div className="para-heading-of-bal">
                                            <h2>155.000</h2>
                                            <p>SAR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 2nd one  */}
                            <div className="assigned-data-info">
                                {/* assigned heading */}
                                <div className="assigned-heading-img">
                                    <h6>Assigned to</h6>
                                    <img src={require("../../images/info-01.png")} alt="sidenav-link" />
                                </div>
                                <div className="below-assigned-heading-img">
                                    <div>
                                        <h2>Office 38</h2>
                                        <div className="links-flex">
                                            <div className="left-side-copy-link">
                                                <img src={require("../../images/iban-01.png")} alt="sidenav-link" />
                                                <p>IBAN# --56566</p>
                                            </div>
                                            <div className="left-side-copy-link">
                                                <img src={require("../../images/iban-01.png")} alt="sidenav-link" />
                                                <p>IBAN# --56566</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="balance-and-amount">
                                        <h6>Balance</h6>
                                        <div className="para-heading-of-bal">
                                            <h2>155.000</h2>
                                            <p>SAR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="assigned-data-info">
                                {/* assigned heading */}
                                <div className="assigned-heading-img">
                                    <h6>Assigned to</h6>
                                    <img src={require("../../images/info-01.png")} alt="sidenav-link" />
                                </div>
                                <div className="below-assigned-heading-img">
                                    <div>
                                        <h2>Office 38</h2>
                                        <div className="links-flex">
                                            <div className="left-side-copy-link">
                                                <img src={require("../../images/iban-01.png")} alt="sidenav-link" />
                                                <p>IBAN# --56566</p>
                                            </div>
                                            <div className="left-side-copy-link">
                                                <img src={require("../../images/iban-01.png")} alt="sidenav-link" />
                                                <p>IBAN# --56566</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="balance-and-amount">
                                        <h6>Balance</h6>
                                        <div className="para-heading-of-bal">
                                            <h2>155.000</h2>
                                            <p>SAR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="assigned-data-info">
                                {/* assigned heading */}
                                <div className="assigned-heading-img">
                                    <h6>Assigned to</h6>
                                    <img src={require("../../images/info-01.png")} alt="sidenav-link" />
                                </div>
                                <div className="below-assigned-heading-img">
                                    <div>
                                        <h2>Office 38</h2>
                                        <div className="links-flex">
                                            <div className="left-side-copy-link">
                                                <img src={require("../../images/iban-01.png")} alt="sidenav-link" />
                                                <p>IBAN# --56566</p>
                                            </div>
                                            <div className="left-side-copy-link">
                                                <img src={require("../../images/iban-01.png")} alt="sidenav-link" />
                                                <p>IBAN# --56566</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="balance-and-amount">
                                        <h6>Balance</h6>
                                        <div className="para-heading-of-bal">
                                            <h2>155.000</h2>
                                            <p>SAR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="assigned-data-info">
                                {/* assigned heading */}
                                <div className="assigned-heading-img">
                                    <h6>Assigned to</h6>
                                    <img src={require("../../images/info-01.png")} alt="sidenav-link" />
                                </div>
                                <div className="below-assigned-heading-img">
                                    <div>
                                        <h2>Office 38</h2>
                                        <div className="links-flex">
                                            <div className="left-side-copy-link">
                                                <img src={require("../../images/iban-01.png")} alt="sidenav-link" />
                                                <p>IBAN# --56566</p>
                                            </div>
                                            <div className="left-side-copy-link">
                                                <img src={require("../../images/iban-01.png")} alt="sidenav-link" />
                                                <p>IBAN# --56566</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="balance-and-amount">
                                        <h6>Balance</h6>
                                        <div className="para-heading-of-bal">
                                            <h2>155.000</h2>
                                            <p>SAR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}