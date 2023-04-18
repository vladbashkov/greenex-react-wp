import useAppService from '../../../services/AppService';
import { useState, useEffect } from 'react';
import useSection from '../../hooks/useSection/useSection';

import './OfficesSection.scss';

const OfficesSection = () => {
    const [state, setState] = useState({}),
          [title, setTitle] = useState(''),
          [id, setId] = useState(''),
          [content, setContent] = useState([]);

    const { getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getContentSection('offices')
            .then(onLoaded)
    }

    const onLoaded = (value) => {
        setState(value);
        const { sectionTitle, id, content } = value;

        setTitle(sectionTitle);
        setId(id);
        setContent(content);
    }

    const officesSection = useSection(title, content, id);

    return (
        <div className='section-columns'>
            { officesSection }
        </div>
    )
}

export default OfficesSection;