import useAppService from '../../../services/AppService';
import { useState, useEffect } from 'react';
import useParallax from '../../hooks/useParallax/useParallax';

const PipesParallax = () => {
    const [state, setState] = useState({});

    const { getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {

        getContentSection('pipes')
            .then(onLoaded)
    }

    const onLoaded = (value) => {
        setState(value);
    }

    const { alt, link } = state;
    const pipesParallax = useParallax(link, alt);

    return (
        <>
            { pipesParallax }
        </>
    )
}

export default PipesParallax;