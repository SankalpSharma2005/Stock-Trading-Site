import React from 'react';

function NotFound() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5' style={{ color: "#424242" }}>404 Not Found</h1>
                <p style={{ color: "#424242" }}>Sorry, the page you are looking for does not exist.
                    <i class="fa fa-frown-o" aria-hidden="true"></i>
                </p>
            </div>
        </div>
    );
}

export default NotFound;