import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
    return (
        <div className="container mt-5" style={{ color: "#424242" }}>
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h2>{productName}</h2>
                    <p style={{ maxWidth: "380px", lineHeight: "1.6" }}>{productDesription}</p>
                    <div>
                        <a href={learnMore} style={{ textDecoration: "none" }}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="col-4">
                    <img src={imageURL} />
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
}

export default RightSection;