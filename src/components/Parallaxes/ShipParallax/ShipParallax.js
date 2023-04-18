import useAppService from '../../../services/AppService';
import { useState, useEffect } from 'react';
import useParallax from '../../hooks/useParallax/useParallax';

const ShipParallax = () => {
    const [state, setState] = useState({});

    const { getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {

        getContentSection('Ship Parallax')
            .then(onLoaded)
    }

    const onLoaded = (value) => {
        setState(value);
    }

    const { alt, link } = state;
    const shipParallax = useParallax(link, alt);

    return (
        <>
            { shipParallax }
        </>
    )
}

export default ShipParallax;