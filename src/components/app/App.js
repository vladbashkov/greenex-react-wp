import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Head from "../Head/Head";
import NavMenu from "../NavMenu/NavMenu";
import HeroSection from "../Sections/HeroSection/HeroSection";
import FooterSection from "../Sections/FooterSection/FooterSection";
import MainPage from "../pages/MainPage";
import BaseProductOils from "../pages/BaseProductOils";
import Page404 from "../pages/Page404/Page404";

const App = () => {
  return (
    <Router>
      <Head />
      <div className="App">
        <header className="App-header">
            <NavMenu />
            <HeroSection />
        </header>
        <main>
          <Routes>
            <Route path="/" element={ <MainPage/> } />
            <Route path="/base-oil-products" element={ <BaseProductOils /> } />
            <Route path="*" element={ <Page404/> } />
          </Routes>
        </main>
        <footer className="App-footer">
          <FooterSection />
        </footer>
      </div>
    </Router>
  );
}

export default App;
