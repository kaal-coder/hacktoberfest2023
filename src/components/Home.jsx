import React from 'react';
import vg from '../assets/2.webp';
import "../styles/Home.scss";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Tech Dev</h1>
          <p>Now you can see all details about technology</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt='Graphics'/>

        <div>
          <p>
          We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>

      </div>

      <div className='home3' id="about">
        <div>
          <h1>What are we?</h1>
          <p>
          Tech Dev, a prominent technology company in the IT services and consulting industry, has consistently stood at the forefront of innovation. With its global presence and commitment to delivering cutting-edge solutions, Tech Dev has become a key player in driving digital transformation for businesses across various sectors. Through its diverse range of services, from software development and cloud solutions to AI-driven analytics and consulting, Tech Dev empowers organizations to navigate the complexities of the modern technological landscape. With a strong emphasis on quality, expertise, and customer-centricity, Tech Dev continues to shape the digital future while helping businesses optimize their operations and achieve their strategic goals.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay: "0.3s",}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{animationDelay: "0.5s",}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{animationDelay: "0.7s",}}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{animationDelay: "1s",}}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home