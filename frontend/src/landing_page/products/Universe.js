import React from "react";
import "./Universe.css";

const universeItems = [
    {
        img: "media/zerodhaFundhouse.png",
        text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
    },
    {
        img: "media/sensibullLogo.svg",
        text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
    },
    {
        img: "media/tijori.svg",
        text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
    },
    {
        img: "media/streakLogo.png",
        text: "Systematic trading platform that allows you to create and backtest strategies without coding."
    },
    {
        img: "media/smallcaseLogo.png",
        text: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
    },
    {
        img: "media/dittoLogo.png",
        text: "Personalized advice on life and health insurance. No spam and no mis-selling."
    }
];

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center" style={{ color: "#424242", paddingTop: "80px" }}>
                <h3>The Zerodha Universe</h3>
                <p>
                    Extend your trading and investment experience even further with our partner platforms
                </p>

                {universeItems.map((item, index) => (
                    <div className="col-4 p-3 mt-3" key={index}>
                        <div className="logo-box">
                            <img src={item.img} alt="partner logo" />
                        </div>
                        <p className="text-small mt-3" style={{ color: '#9B9B9B' }}>{item.text}</p>
                    </div>
                ))}
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "16%", margin: "0 auto", backgroundColor: "#387ED1" }}>Sign up for free</button>
            </div>

        </div>
    );
}

export default Universe;
