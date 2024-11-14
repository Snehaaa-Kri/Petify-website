// src/pages/Company.js
import React from 'react';

function Company() {
    return (
        <div className="page-container px-8 py-12 bg-[#f9f9f9]">
            <h1 className="text-4xl font-bold text-center mb-6 text-[#333]">Company</h1>
            <p className="text-lg text-center mb-8 text-[#555]">
                Welcome to the Company page! Here, we share our mission, vision, and values.
            </p>

            <section className="mb-10">
                <h2 className="text-3xl font-semibold mb-4 text-[#444]">Our Mission</h2>
                <p className="text-lg leading-relaxed text-[#666]">
                    Our mission is to enhance the lives of pets and their owners by providing quality products and resources
                    that promote pet health and well-being.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl font-semibold mb-4 text-[#444]">Our Vision</h2>
                <p className="text-lg leading-relaxed text-[#666]">
                    We envision a world where every pet is loved and cared for, and where pet owners have access to the best
                    resources for their furry friends.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl font-semibold mb-4 text-[#444]">Our Values</h2>
                <ul className="list-disc pl-6 text-lg text-[#666]">
                    <li className="mb-2">🌟 Compassion: We care deeply about the well-being of all animals.</li>
                    <li className="mb-2">🌟 Integrity: We conduct our business with honesty and transparency.</li>
                    <li className="mb-2">🌟 Quality: We strive to offer only the best products and services.</li>
                    <li className="mb-2">🌟 Community: We believe in giving back and supporting pet communities.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-4 text-[#444]">Join Us!</h2>
                <p className="text-lg leading-relaxed text-[#666]">
                    Thank you for visiting our Company page. We invite you to explore our products, engage with our community,
                    and be part of our mission to support pet lovers everywhere!
                </p>
            </section>
        </div>
    );
}

export default Company;
