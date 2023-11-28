import Hero from "./components/Hero"
import Features from "./components/Features"
import Team from "./components/Team"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <nav className="flex justify-between items-center px-6 py-5">
        <div>
          <img src="/icons/logo.png" alt="" className="w-44" />
        </div>
        <div className="space-y-1.5">
          <div className="w-7 h-0.5 bg-gray-600"></div>
          <div className="w-7 h-0.5 bg-gray-600"></div>
          <div className="w-7 h-0.5 bg-gray-600"></div>
        </div>
      </nav>
      <main>
        <Hero />
        <Features />
        <Team/>
        <Contact/>
      </main>
      <footer>
        <p className="text-center border-t py-5">Copyright 2023 All Rights Reserved By: CafeAlyzer</p>
      </footer>
    </>
  )
}

export default App
