import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ContactMe from "./pages/ContactMe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.AboutMe);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage(SelectedPage.AboutMe);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <main className="flex-col h-auto">
      <Navbar
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Gallery setSelectedPage={setSelectedPage}/>
      <ContactMe setSelectedPage={setSelectedPage}/>
      <Footer/>
    </main>
  )
}

export default App
