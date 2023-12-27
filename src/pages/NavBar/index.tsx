import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import Link from "./Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  isTopofpage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const NavBar = ({isTopofpage, selectedPage, setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarbg = isTopofpage ? "" : "bg-zinc-500 drop-shadow";
  return (
    <nav>
        <div className={`${navbarbg} flex-between
        fixed top-0 z-30 w-full bg-zinc-800 py-8`}>
            <div className="flex-between mx-auto h-20 w-5/6">
                <div className="flex-between w-full gap-16">
                <h1 className="text-4xl text-primary-500">S.Marggraff</h1>
                { isAboveMediumScreens ?(<div className="flex-between w-full">
                    <div className="flex-between text-3xl gap-8">
                       <Link page= "About Me"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>
                       <Link page="Gallery"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>
                       <Link page="Contact Me"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>
                    </div>
                </div>)
                : (
                <button className="rounded-full bg-zinc-400 p-2"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-6 text-white"/>
                </button>)}
                </div>
            </div>
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40
                 h-full w-[300px] bg-zinc-300 drop-shadow-xl">
            <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400"/>
                </button>
            </div>
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                       <Link page= "About Me"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>
                       <Link page="Gallery"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>
                       <Link page="Contact Me"
                             selectedPage={selectedPage}
                             setSelectedPage={setSelectedPage}/>
                    </div>
            </div>
        )}
    </nav>
  )
}

export default NavBar