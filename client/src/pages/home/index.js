import React from "react";
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
          <Link href="/product">Browse Products</Link>
        </div>
      </section>


    </>
  );
}

export default Home;
