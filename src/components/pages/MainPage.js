import AboutSection from "../Sections/AboutSection/AboutSection";
import ShipParallax from "../Parallaxes/ShipParallax/ShipParallax";
import ServiceSection from "../Sections/ServicesSection/ServicesSection";
import FactoryParallax from "../Parallaxes/FactoryParallax/FactoryParallax";
import LogDistSection from "../Sections/LogDistSection/LogDistSection";
import CranesParallax from "../Parallaxes/CranesParallax/CranesParallax";
import ProductsSection from "../Sections/ProductsSection/ProductsSection";
import PipesParallax from "../Parallaxes/PipesParallax/PipesParallax";
import OfficesSection from "../Sections/OfficesSection/OfficesSection";
import GoToTopButton from "../goToTopButton/goToTopButton";

const MainPage = () => {
    return (
        <>
            <AboutSection />
            <ShipParallax />
            <ServiceSection />
            <FactoryParallax />
            <LogDistSection />
            <CranesParallax />
            <ProductsSection />
            <PipesParallax />
            <OfficesSection />
            <GoToTopButton />
        </>
    )
}

export default MainPage;