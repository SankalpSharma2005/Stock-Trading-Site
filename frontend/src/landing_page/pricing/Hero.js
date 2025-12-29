import React from "react";

function Hero() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 text-center">
                <h2 style={{ color: '#424242' }}>Charges</h2>
                <h3 className="mt-3 fs-5" style={{ color: '#9B9B9B' }}>
                    List of all charges and taxes
                </h3>
            </div>
            <div className="row p-5 mt-5 text-center">
                <div className="col-4 p-4">
                    <img src="media/pricingEquity.svg" />
                    <h1 className="fs-3" style={{ color: '#424242' }}>Free equity delivery</h1>
                    <p style={{ color: '#9B9B9B' }}>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹
                        0 brokerage.
                    </p>
                </div>
                <div className="col-4 p-4">
                    <img src="media/intradayTrades.svg" />
                    <h1 className="fs-3" style={{ color: '#424242' }}>Intraday and F&O trades</h1>
                    <p style={{ color: '#9B9B9B' }}>
                        Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
                        intraday trades across equity, currency, and commodity trades.
                    </p>
                </div>
                <div className="col-4 p-4">
                    <img src="media/pricingEquity.svg" />
                    <h1 className="fs-3" style={{ color: '#424242' }}>Free direct MF</h1>
                    <p style={{ color: '#9B9B9B' }}>
                        All direct mutual fund investments are absolutely free — ₹ 0
                        commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;