import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container mt-5' style={{ color: "#424242" }}>
            <div className='row'>
                <div className='col-7'>
                    <img src={imageURL} />
                </div>
                <div className='col-4 p-5 mt-5'>
                    <h2>{productName}</h2>
                    <p style={{ maxWidth: "380px", lineHeight: "1.6" }}>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{ marginLeft: "90px", textDecoration: "none" }}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}>
                            <img src='media/googlePlayBadge.svg' />
                        </a>
                        <a href={appStore}>
                            <img src='media/appstoreBadge.svg' style={{ marginLeft: "50px" }} />
                        </a>
                    </div>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    );
}

export default LeftSection;