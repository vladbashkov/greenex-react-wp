import data from "../server/data.json";

const useAppService = () => {
    const _apiBase = data;
    const _apiData = 'https://greenexenergy.com/wp-json/wp/v2/pages';

    const getResource = async route => {
        let res = await fetch(_apiData);

        if(!res.ok) {
            throw new Error(`Could not fetch ${_apiData}, status: ${res.status}`);
        }

        let data = await res.json();
        return _transformData(data, route);
    }

    const getContentSection = async (route = '') => {
        let res = await fetch(_apiData);

        if(!res.ok) {
            throw new Error(`Could not fetch ${_apiData}, status: ${res.status}`);
        }

        let data = await res.json();
        return _transformContentSection(data, route);
    }

    const _transformData = (data, route) => {
        return data[0].acf[route];
    }

    const _transformContentSection = (data, route) => {
        
        let contentSection = data[0].acf.content_section;
        
        let res = contentSection.reduce((res, item) => {
            let contentType = item.content_type;

            if(item.content_type == 'parallax' && item[contentType].section_title == route) {

                res.push(
                    {
                        "link": item[contentType].image,
                        "alt": item[contentType].alt
                    }
                )

                return res;
            }

            if(item[contentType].section_title == route) {

                res.push(
                    {
                        "sectionTitle": item[contentType].section_title,
                        "id": item[contentType].id,
                        "content": _transforSection(item[contentType].section)
                    }
                )

                return res;
            }

            return res;
        }, []);

        return res[0];
    }

    const _transforSection = (section) => {
        let content = [];

        let res = section.map(el => {
            let contentType = el.content_type;

            return content.push(
                {
                    [contentType]: el[contentType]
                }
            );
        })

        return content;
    }

    const getData = (key = _apiBase) => {
        const res = _apiBase[key];
        return res;
    }

    return { getData, getResource, getContentSection };
}

export default useAppService;