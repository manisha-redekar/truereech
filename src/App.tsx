import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Services from "./pages/Services.tsx";
import Work from "./pages/Work.tsx";
import About from "./pages/About.tsx";
import Blog from "./pages/Blog.tsx";
import AeoGeoBlog from "./pages/AeoGeoBlog.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/*" element={<Services />} />
        <Route path="/work/*" element={<Work />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/blog/reddit-marketing-services/*" element={<Blog />} />
        <Route path="/blog/top-aeo-geo-services/*" element={<AeoGeoBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
