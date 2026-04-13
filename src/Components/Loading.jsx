import React from "react";
import ReactLoading from "react-loading";

// import '../Styles/Loading.css';
// import TypeIt from "typeit-react";

export default function Loading() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#0f0f0f",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div className="text">
      <TypeIt options={{loop:true}}>Loading...</TypeIt>
  </div> */}
        {/* <ReactLoading type="bubbles" color="#FFFFFF" height={150} width={150} /> */}
        <ReactLoading type="bars" color="#FFFFFF" height={80} width={80} />
      </div>
    </div>
  );
}
