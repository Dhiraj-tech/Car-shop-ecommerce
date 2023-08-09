import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar/index";
import Card from "@/components/Card/index";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  // to check redux is working or not
  const { name } = useSelector((state) => state.user);

  return (
    <>
      <div>
        <NavBar />
        <h1 className="pro-head">LATEST PRODUCTS:</h1>
        <Card />
      </div>

      {/* to check redux is working or not */}
      <div>{name}</div>;
    </>
  );
}


