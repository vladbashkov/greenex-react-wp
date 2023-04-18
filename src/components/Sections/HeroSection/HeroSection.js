import useAppService from '../../../services/AppService';
import { useState, useEffect } from 'react';
import useHeroParallax from '../../hooks/useHeroParallax/useHeroParallax';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';
import './HeroSection.scss';

const HeroSection = () => {
    const [state, setState] = useState({});

    const { getResource } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getResource('hero_section')
            .then(onLoaded)
    }

    const onLoaded = (value) => {
        setState(value);
    }

    const { hero_title, hero_subtitle_full, hero_subtitle_short, contact_button_text, contact_button_link, bg_images } = state;

    let swiperSlides = bg_images && bg_images.map(item => {
        const { link, alt } = item;

        let subtitle = alt == 'City View' ? hero_subtitle_short : hero_subtitle_full;

        return Slides(hero_title, subtitle, link, alt)
    })

    function Slides(title, subttle, img, alt) {
        const id = Math.floor(Math.random() * (1983852 - 1204954) + 1853450);

        return (
            <SwiperSlide key={id}>
                { useHeroParallax(title, subttle, img, alt) }
            </SwiperSlide>
        )
    }

    return (
        <div className='hero-section' id='heroSection'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 5000
                }}
            >
                { swiperSlides }
                <a 
                    className="hero-button_container"
                    href={ `mailto:${contact_button_link}` }
                >
                    <p 
                        
                        className="hero-button"
                    >
                        { contact_button_text }
                    </p>
                </a>
            </Swiper>
        </div>
    )
}

export default HeroSection;