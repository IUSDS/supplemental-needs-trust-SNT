import { Route, Routes, useLocation,} from "react-router-dom";
import Footer from "./components/footer";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { SEO } from "./seo/SEO";
import { SITE_URL } from "./seo/siteMeta";

function App() {
  const { pathname } = useLocation();
  const canonical = `${SITE_URL}${pathname}`;

  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      offset: 24,
      once: true,
      mirror: false,
      // Key perf win in React: stop observing DOM mutations
     disableMutationObserver: true,
      // Reduce how often AOS recomputes positions
      throttleDelay: 120,
      debounceDelay: 80,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <SEO
       canonical={canonical}
       includeTitle={false}
       includeDescription={false}
     />
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;