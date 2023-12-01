import { useState, useRef } from "react"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Contact from "./components/Contact"
import { Transition } from "@headlessui/react"
import Team from "./components/Team"

function App() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const teamRef = useRef(null)
  const contactRef = useRef(null)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = (ref) => {
    console.log('clicked');
    const offset = ref.current.offsetTop - window.innerHeight / 4;

    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <nav className="flex flex-col gap-5 px-6 md:px-28 lg:px-28 py-3 sticky top-0 bg-white w-full shadow-md z-30">
        <div className="flex justify-between w-full ">
          <div>
            <img src="/icons/logo.png" alt="" className="w-44" />
          </div>
          {/* Begin::Menu Mobile */}
          <div className="flex justify-between md:hidden lg:hidden">
            {isMenuOpen ? (
              <Transition
                show={isMenuOpen}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="rotate-90 opacity-0"
                enterTo="rotate-0 opacity-100"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="rotate-0 opacity-100"
                leaveTo="rotate-90 opacity-0"
              >
                <button className="items-center justify-center p-1" onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}>
                  <img src="/icons/cross.png" alt="cross" className="w-9" />
                </button>
              </Transition>
            ) : (
              <button className="flex items-center justify-center p-2" onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}>
                <div className="space-y-1.5">
                  <div className="w-7 h-0.5 bg-gray-600"></div>
                  <div className="w-7 h-0.5 bg-gray-600"></div>
                  <div className="w-7 h-0.5 bg-gray-600"></div>
                </div>
              </button>
            )}
          </div>
          {/* End::Menu Mobile */}
          <div className="hidden md:flex lg:flex items-center gap-14 ">
            <a onClick={() => handleLinkClick(heroRef)} href="#hero">Home</a>
            <a onClick={() => handleLinkClick(featuresRef)} href="#features">Features</a>
            <a onClick={() => handleLinkClick(teamRef)} href="#team">Team</a>
            <a onClick={() => handleLinkClick(contactRef)} href="#contact">Contact</a>
          </div>
        </div>
        <Transition
          show={isMenuOpen}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="transition flex flex-col gap-5 w-fit">
            <a onClick={() => handleLinkClick(heroRef)} href="#hero">Home</a>
            <a onClick={() => handleLinkClick(featuresRef)} href="#features">Features</a>
            <a onClick={() => handleLinkClick(teamRef)} href="#team">Team</a>
            <a onClick={() => handleLinkClick(contactRef)} href="#contact">Contact</a>
          </div>
        </Transition>
      </nav>
      <main className="md:px-28 lg:px-28">
        <Hero ref={heroRef}/>
        <Features ref={featuresRef}/>
        <Team ref={teamRef}/>
        <Contact ref={contactRef}/>
      </main>
      <footer>
        <p className="text-center border-t py-5">Copyright 2023 All Rights Reserved By: CafeAlyzer</p>
      </footer>
    </>
  )
}

export default App
