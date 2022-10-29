import React from "react";
import "./home.css";
import food1 from "../food1.gif";

export default function Home() {
  return (
    <div className="container">
      <div className="home">
        <div className="navbar">
          <div className="logo">
            <img src={food1} alt="" />
          </div>
          <div className="content">
            <ul>
              <li>Home</li>
              <li>Our Mission</li>
              <li>Donate food</li>
              <li>Collect Food</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>


      </div>

       <div className="data">
           <div className="left">
               <h6>Help hunger vanish...!</h6>
               <h1>Be a hero and bring down world hunger to zero.</h1>
               <p>Why Foodbanks are key to tackling hunger:
Bridging the Gap – FoodBanks meet the needs of the hungry by efficiently redistributing the food already available in the country.</p>
           </div>
          
       </div>

    </div>
  );
}
