import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row p-5'>
                <h1 className='text-center fs-3' style={{ color: "#424242" }}>People</h1>
            </div>
            <div className='row p-5'>
                <div className='col-1'></div>
                <div className='col-5 p-5 text-center'>
                    <img src='media/formal cu.jpeg' alt='project author' style={{ borderRadius: '100%', width: "60%" }} />
                    <h4 style={{ color: "#424242" }} className='mt-3'>Sankalp Sharma</h4>
                    <h6 style={{ color: "#666666" }}>Full-Stack Developer</h6>
                </div>
                <div className='col-6 p-5' style={{ color: "#424242" }}>
                    <p>Sankalp is a computer science student at Vellore Institute of Technology, Vellore Campus. He is a full-stack developer, fostering innovation through hands-on projects.</p>

                    <p>He is the Management Head of IoThinC club and also served as the Point of Contact(POC) at the university's technical fest - graVITas 2025. He has managed events with a total footfall of 500+. He combines technical expertise with leadership, catalyzing innovation through large-scale technical workshops</p>

                    <p>Playing, watching, or living sports is his zen.</p>

                    <p>Connect on <a href='https://www.linkedin.com/in/sankalp-sharma-9283b0312/' target='_blank' style={{ textDecoration: "none" }}>LinkedIn</a>|<a href='https://github.com/SankalpSharma2005' target='_blank' style={{ textDecoration: "none" }}>GitHub</a></p>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    );
}

export default Team;