import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar/index";
import { useSelector } from "react-redux";
import Home from "./home";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  const { isLoggedIn } = useSelector((state) => state.user);
  if (isLoggedIn) {
    return ( 
      <>
      <NavBar />
      <Home />
      <Footer />
      </>
    );
  } else {
    return (
      <>
      <NavBar />
      <Home />
      <Footer />
      </>
    )
  }

}


