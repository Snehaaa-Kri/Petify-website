// src/pages/About.js
import React from 'react';

function About() {
    return (
        <div className="page-container px-8 py-12 bg-[#f9f9f9]">
            <h1 className="text-4xl font-bold text-center mb-6 text-[#333]">About Us</h1>
            <p className="text-lg text-center mb-8 text-[#555]">
                Learn more about our story and what drives us.
            </p>

            <section className="mb-10">
                <h2 className="text-3xl font-semibold mb-4 text-[#444]">Our Passion</h2>
                <p className="text-lg leading-relaxed text-[#666]">
                    We are passionate about pets and strive to provide high-quality products that enhance the lives of both pets and their owners.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl font-semibold mb-4 text-[#444]">Our Commitment</h2>
                <p className="text-lg leading-relaxed text-[#666]">
                    Our commitment is to ensure the well-being of animals by offering resources and products that promote their health and happiness.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-4 text-[#444]">Join Our Journey!</h2>
                <p className="text-lg leading-relaxed text-[#666]">
                    Thank you for taking the time to learn about us. We invite you to explore our offerings and become part of our community dedicated to pet welfare.
                </p>
            </section>
        </div>
    );
}

export default About;
