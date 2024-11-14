import React from 'react'

function Contact() {
    return (
        <div className="page-container px-8 py-12 bg-[#f9f9f9]">
            <h1 className="text-4xl font-bold text-center mb-6 text-[#333]">Contact Us</h1>
            <p className="text-lg text-center mb-8 text-[#555]">
                We'd love to hear from you! Reach out with any questions, comments, or feedback.
            </p>
            <div className="flex justify-between px-[100px] my-20">
                <div className="">
                    <section className="mb-10">
                        <h2 className="text-3xl font-semibold mb-4 text-[#444]">Get in Touch</h2>
                        <p className="text-lg leading-relaxed text-[#666] mb-4">
                            You can contact us through the following methods:
                        </p>
                        <ul className="list-disc pl-6 text-lg text-[#666]">
                            <li className="mb-2">📧 Email: support@petify.com</li>
                            <li className="mb-2">📞 Phone: +1 (234) 567-890</li>
                            <li className="mb-2">📍 Address: 123 Pet Lane, Animal City, PA 12345</li>
                        </ul>
                    </section>
            
                    <section>
                        <h2 className="text-3xl font-semibold mb-4 text-[#444]">Follow Us</h2>
                        <p className="text-lg leading-relaxed text-[#666] mb-4">
                            Stay connected with us on social media:
                        </p>
                        <ul className="flex list-none gap-[20px] text-[#666] text-lg">
                            <li className="cursor-pointer">🌐 <a href="https://www.instagram.com/petify" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li className="cursor-pointer">🌐 <a href="https://www.facebook.com/petify" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li className="cursor-pointer">🌐 <a href="https://www.twitter.com/petify" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        </ul>
                    </section>
                </div>

                <section className='w-[450px]'>
                <h2 className="text-3xl font-semibold mb-4 text-[#444]">Send Us a Message</h2>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 border border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 border border-gray-300 rounded-md"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        className="p-3 border border-gray-300 rounded-md"
                        rows="4"
                        required
                    />
                    <button
                        type="submit"
                        className="self-center px-6 py-2 bg-[#ff6b6b] text-white font-semibold rounded-md hover:bg-[#ff4d4d]"
                    >
                        Send Message
                    </button>
                </form>
                </section>


            </div>

        </div>
    );
}

export default Contact