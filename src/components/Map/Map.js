import DottedMap from 'dotted-map/without-countries';
import { useState, useEffect } from 'react';
import useAppService from '../../services/AppService';

import mapJsonString from './Coordinates';
import './Map.scss';

const Map = () => {
    const [state, setState] = useState({}),
          [alt, setAlt] = useState(''),
          [id, setId] = useState(''),
          [pins, setPins] = useState([]),
          [style, setStyle] = useState({});

    const map = new DottedMap({ map: JSON.parse(mapJsonString) });

    const { getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getContentSection('offices')
            .then(el => onDataLoaded(el.content[0].map))
    }

    const onDataLoaded = (value) => {
        setState(value);
        const { alt, id, pins, style } = value;

        setAlt(alt);
        setId(id);
        setPins(pins);
        setStyle(style);
    }

    const onAddPins = (pins, style) => {

        pins.forEach(pin => {
            map.addPin({
                lat: +pin.lat,
                lng: +pin.lng,
                svgOptions: { color: `#${pin.color}`, radius: +pin.radius },
            })
        })

        const svgMap = map.getSVG({
            radius: style.radius,
            color: `#${style.color}`,
            shape: `${style.shape}`,
            backgroundColor: `${style.background}`,
        });

        return (
            <>
                <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`} alt="World Map" />
            </>
        )

    }

    const onMap = onAddPins(pins, style);
    
    return (
        <>
          { onMap }
        </>
    );
}

export default Map;