import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar/index";
import NavBarHome from "@/components/Navbarhome/index";
import { useSelector } from "react-redux";
import Home from "./home";
import Login from "./login";

const inter = Inter({ subsets: ["latin"] });

export default function Layout() {
  const { isLoggedIn } = useSelector((state) => state.user);
  if (isLoggedIn) {
    return (
      <>
        <NavBar />
        <Home />;
      </>
    );
  } else {
    return (
      <>
        <NavBarHome />
        <Home />
      </>
    );
  }

  // if (isLoggedIn) {
  //   return (
  //     <Home />
  //   );
  // } else {
  //   return (
  //     <Login />
  //   );
  // }

}


