import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div className="row primary">
          <div className="column about">
            <h3 className="footer-head3">CARSHOP</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              voluptatem corporis error non,
            </p>
          </div>

          <div className="column links">
            <h3 className="footer-head3">Some Links</h3>

            <ul className="footer-ul">
              <li>
                <Link href="#">F.A.Q</Link>
              </li>
              <li>
                <Link href="#">Cookies Policy</Link>
              </li>
              <li>
                <Link href="#">Terms Of Service</Link>
              </li>
              <li>
                <Link href="#">Support</Link>
              </li>
            </ul>
          </div>

          <div className="column links">
            <h3 className="footer-head3">Some Links</h3>
            <ul className="footer-ul">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="column subscribe">
            <h3 className="footer-head3">Newsletter</h3>
            <div>
              <input type="email" placeholder="Your email id here" />
              <button className="footer-button">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
