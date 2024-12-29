import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <div  className="bg-stone-700">
      <Navbar />
      <div id='first-section' className="h-screen flex items-center justify-center gap-14">
        {/* <p>Wassup</p> */}
      </div>
      <Footer />
    </div>
  );
}
