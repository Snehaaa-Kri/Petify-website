import React, { useState } from 'react';

function NewsLetter() {
  const [email, setEmail] = useState(''); // State to capture the email input
  const [message, setMessage] = useState(''); // State to display a success/error message

  // Function to handle subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    
    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

   
    console.log('Subscribing email:', email);

    setMessage('Thank you for subscribing to Petify! You will now receive our updates.');
    setEmail(''); 
  };

  return (
    <div
      style={{ background: 'linear-gradient(180deg, #f7d1e5 0%, #f3e8a122 60%)' }} 
      className="w-[85%] h-[45vh] flex flex-col items-center justify-center m-auto p-[0px 140px] mb-[150px] gap-[30px]"
    >
      <h1 className="text-[#5a3e2f] text-[48px] font-semibold">Get Pet Care Tips & Exclusive Offers!</h1> 
      <p className="text-[#5a3e2f] text-[18px]">Join our community of pet lovers and stay updated with the latest offers.</p>
      
      {/* Newsletter subscription form */}
      <form onSubmit={handleSubscribe} className="flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border border-[#e3e3e3]">
        <input
          className="w-[500px] ml-[30px] border-none outline-none text-[#616161] font-'poppins' text-[16px] placeholder:text-[#b1b1b1]"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state with input
          placeholder="Enter your email for Petify updates!"
        />
        <button 
          type="submit"
          className="w-[210px] h-[70px] rounded-[80px] bg-[#ff6b6b] text-white text-[16px] cursor-pointer hover:bg-[#e05a5a] transition-colors"
        >
          Subscribe Now
        </button>
      </form>

      {/* Display success/error message */}
      {message && <p className="text-[#5a3e2f] mt-4 text-[16px]">{message}</p>}
    </div>
  );
}

export default NewsLetter;
