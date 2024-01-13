import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "../shared/types";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from "../utils/Link";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    
  return (
    <nav>
        <div className="flex-between border-b-2 border-emerald-400
        fixed top-0 z-30 w-full drop-shadow bg-gradient-to-l from-emerald-500 to-emerald-800 py-6">
            <div className="flex-between mx-auto w-5/6">
                <h1 className="text-5xl bg-gradient-to-b from-amber-500 to-yellow-800 bg-clip-text text-transparent p-2 font-bold tracking-wide text-shadow-md transition duration-300 ease-in-out hover:text-zinc-500">Rakhudu</h1>
                { isAboveMediumScreens ?(<div className="flex-between w-3/5 gap-9">
                       <Link page= "About Me"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>
                       <Link page="Gallery"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>
                       <Link page="Contact Me"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>
                </div>)
                : (
                <button className="rounded-full bg-emerald-300 p-2 border-2 border-emerald-400"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-[30px]] w-[30px] text-emerald-900"/>
                </button>)}
                
            </div>
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 
                 h-full w-[300px] bg-gradient-to-b from-green-500 via-green-700 to-indigo-900 drop-shadow-xl">
            <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-8 w-8 text-emerald-950"/>
                </button>
            </div>
            <div className="ml-[10%] flex flex-col justify-center items-center gap-10 text-2xl">
                <button onClick={() => setIsMenuToggled(false)}>
                <Link page= "About Me"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                </button>
                <button onClick={() => setIsMenuToggled(false)}>
                <Link page="Gallery"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                </button>
                <button onClick={() => setIsMenuToggled(false)}>
                <Link page="Contact Me"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                </button>
            </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar