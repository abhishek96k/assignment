import React from "react";

function Hero () {
  return (
    <div id="hero">
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      ></div>
    </div>
  );
};

export default Hero;
