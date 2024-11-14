// src/pages/Offices.js
import React from 'react';

function Offices() {
    return (
        <div className="page-container px-8 py-12 bg-[#f9f9f9]">
            <h1 className="text-4xl font-bold text-center mb-6 text-[#333]">Our Offices</h1>
            <p className="text-lg text-center mb-8 text-[#555]">
                Welcome to the Offices page! Here, you can learn about our locations and future expansion plans.
            </p>

            <section>
                <h2 className="text-3xl font-semibold mb-4 text-[#444]">Current Status</h2>
                <p className="text-lg leading-relaxed text-[#666] mb-4">
                    At the moment, we do not have any physical offices. However, we are working hard to establish a presence
                    in key locations to better serve our customers.
                </p>
                
                <p className="text-lg leading-relaxed text-[#666]">
                    We understand the importance of being accessible to our clients and partners, and we are excited about
                    the opportunities ahead.
                </p>
            </section>

            <section className="mt-10">
                <h2 className="text-3xl font-semibold mb-4 text-[#444]">Future Plans</h2>
                <p className="text-lg leading-relaxed text-[#666]">
                    Our goal is to open several offices across the country to enhance our outreach and customer service.
                    Stay tuned for updates on our progress as we continue to grow and expand our operations.
                </p>
            </section>
        </div>
    );
}

export default Offices;
