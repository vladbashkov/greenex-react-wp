import { Parallax } from "react-parallax";

const useHeroParallax = (title, subtitle, img, alt = 'image') => {

    return (
        <Parallax 
            bgImage={img} 
            bgImageAlt={alt}
            className='hero-parallax'
        >
            <h1 className="hero-title">
                { title }
            </h1>
            <h3 className="hero-subtitle">
                { subtitle }
            </h3>
        </Parallax>
    )
}

export default useHeroParallax;