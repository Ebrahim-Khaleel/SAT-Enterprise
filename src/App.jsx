import Lander from "./layout/Lander";
import Navbar from "./components/Navbar";
import WhatWeOffer from "./layout/WhatWeOffer";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";
import Clients from "./layout/Clients";
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-gray-900">
      <Navbar />
      <Lander />
      <WhatWeOffer />
      <About />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
