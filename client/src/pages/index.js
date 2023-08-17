import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar/index";
import { useSelector } from "react-redux";
import Home from "./home";
import Login from "./login";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  const { isLoggedIn } = useSelector((state) => state.user);
  if (isLoggedIn) {
    return ( 
      <>
      <NavBar />
      <Home />
      </>
    );
  } else {
    return (
      <>
      <NavBar />
      <Login />
      </>
    )
  }

}


