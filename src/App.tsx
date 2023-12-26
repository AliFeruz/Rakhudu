import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ContactMe from "./pages/ContactMe";


function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.AboutMe);
  const [isTopofPage, setIsTopofPage] = useState<boolean>(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopofPage(true);
        setSelectedPage(SelectedPage.AboutMe);
      }
      if (window.scrollY !== 0) setIsTopofPage(false)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <main className="app bg-zinc-600">
      <NavBar 
      isTopofpage={isTopofPage}
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Gallery setSelectedPage={setSelectedPage}/>
      <ContactMe setSelectedPage={setSelectedPage}/>
    </main>
  )
}

export default App
