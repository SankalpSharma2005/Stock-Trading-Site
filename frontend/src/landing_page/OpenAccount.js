import React from 'react';
import { redirectToDashboard } from './redirectToDashboard';

function OpenAccount() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5' style={{ color: "#424242" }}>Open a Zerodha account</h1>
                <p style={{ color: "#424242" }}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "16%", margin: "0 auto", backgroundColor: "#387ED1" }} onClick={redirectToDashboard}>Sign up for free</button>
            </div>
        </div>
    );
}

export default OpenAccount;