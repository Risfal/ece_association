import React from "react";
import "../Styles/Landing.css";


function Landing() {
  return (
    <div className = 'wrapper'style={{ width: "90%", margin: "70px auto 0 auto" }}>
      
      <div className="heading">
        ELECTRONICS AND COMMUNICATION DEPARTMENT BILLBOARD
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p className= 'desc' style={{ color: "white", margin: "auto auto" }}>
          Welcome to the EC Billboard, the beacon of inspiration and collaboration brought to you by the EC Association.
          Here, you'll discover a treasure trove of resources curated to enrich your learning experience. 
          Stay informed with the latest updates and seize countless opportunities to excel in your studies.
          This platform serves as a source of unity and empowerment, fostering a strong sense of community and belonging within the 
          ECE department.
        </p>
        {/* <img src={'./image.png'}  className="myImage"></img> */}
      </div>
    </div>
  );
}
export default Landing;
