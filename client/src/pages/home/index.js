import React from "react";
import Card from "@/components/Card/index";
import Link from "next/link";

function Home() {
  return (
    <>
      <section className="homepage" id="home">
        <div className="content">
          <div className="text">
            <h1>ONE STOP SOLUTION</h1>
            <p>FOR ALL YOUR CAR NEEDS</p>
          </div>
          <Link href="#">Browse Products</Link>
        </div>
      </section>

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
    </>
  );
}

export default Home;
