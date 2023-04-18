import useAppService from '../../../services/AppService';
import { useState, useEffect } from 'react';
import useSection from '../../hooks/useSection/useSection';

const AboutSection = () => {
    const [state, setState] = useState({}),
          [content, setContent] = useState([]),
          [id, setId] = useState(''),
          [title, setTitle] = useState('');

    const { getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getContentSection('About')
            .then(onDataLoaded)
    }

    const onDataLoaded = (value) => {
        console.log(value);
        setState(value);
        const { sectionTitle, id, content } = value;

        setTitle(sectionTitle);
        setId(id);
        setContent(content);
    }

    const aboutSection = useSection(title, content, id);

    return (
        <div className='about-section' key={id}>
            { aboutSection }
        </div>
    )
}

export default AboutSection;