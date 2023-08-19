import { Inter } from "next/font/google";
import { useSelector } from "react-redux";
import Home from "./home";

const inter = Inter({ subsets: ["latin"] });

export default function Main() {
  const { isLoggedIn } = useSelector((state) => state.user);
  if (isLoggedIn) {
    return <Home />;
  } else {
    return <Home />;
  }
}
