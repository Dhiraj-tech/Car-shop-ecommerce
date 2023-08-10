import React from "react";
import Card from "@/components/Card/index";

function Home() {
  return (
    <div className="main">
      <div>
        <h1 className="pro-head">LATEST PRODUCTS:</h1>
        <Card />
      </div>

      <div className="divider">
        <hr />
      </div>

      <div>
        <h1 className="pro-head">FEATURED PRODUCTS:</h1>
      </div>

      <div className="divider">
        <hr />
      </div>

      <div>
        <h1 className="pro-head">TOP SELLING PRODUCTS:</h1>
      </div>
      
      
    </div>
  );
}

export default Home
