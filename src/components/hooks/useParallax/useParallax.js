import { Parallax } from "react-parallax";

const useParallax = (img, alt) => {
    return (
        <Parallax
            bgImage={ img }
            bgImageAlt={ alt }
            className='parallax-section'
            strength={400}
        /> 
    )
}

export default useParallax;