import React from "react";

const Home = () => {
  return (
    <div>
      <div
        style={{
          width: "100vw",
          textAlign: "center",
        }}
      >
        <img
          src={require("../../../assets/svgs/main.svg")}
          alt="Home"
          style={{ width: "40%", height: "40%", margin: "2rem 0" }}
        />
        <h1>DonAid</h1>
        <p>Giving to those who are in the most need.</p>
      </div>
    </div>
  );
};

export default Home;
