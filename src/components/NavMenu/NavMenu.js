import useAppService from '../../services/AppService';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import './NavMenu.scss';

import Burger from '../../resources/img/burger-btn.svg';

const NavMenu = () => {
    const [list, setList] = useState(),
          [logo, setLogo] = useState({}),
          [menu, setMenu] = useState(false),
          [isShrunk, setShrunk] = useState(false);

    const { getResource } = useAppService();

    useEffect(() => {
        onRequest();

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, [])

    const handler = () => {
        setShrunk((isShrunk) => {
          if (
            !isShrunk &&
            (document.body.scrollTop > 60 ||
              document.documentElement.scrollTop > 60)
          ) {
            return true;
          }
  
          if (
            isShrunk &&
            document.body.scrollTop < 4 &&
            document.documentElement.scrollTop < 4
          ) {
            return false;
          }
  
          return isShrunk;
        });
    };

    const onMenuLoaded = (data) => {
        const { logo, nav_list } = data;

        setList(nav_list);
        setLogo(logo);
    };

    const onRequest = () => {
        getResource('nav_menu')
            .then(onMenuLoaded)
    }

    const onToggleMenu = () => {
        setMenu(!menu);
    }

    const renderList = (arr) => {
        const { logo_alt, logo_img } = logo;
        const navShow = menu ? 'nav-show' : null;
        let menuShrunk = isShrunk ? 'menuShrunk' : '';
 
        const items = arr.map((item, i) => {
            const {li_text, li_link} = item;

            return (
                <li
                    className='nav-li'
                    key={i}
                    onClick={ onToggleMenu }
                >
                    <Link 
                        to={ li_link }
                        smooth={ true }
                        offset={ -50 }
                        duration={ 500 }
                        onClick={ onToggleMenu }
                    >
                        { li_text.toUpperCase() }
                    </Link>

                </li>
            )
        })

        return (
            <div 
                className={`nav-menu_container ${menuShrunk}`}
                id="navMenu"
            >
                <Link
                    to="heroSection"
                    smooth={ true }
                    offset={ 0 }
                    duration={ 500 }
                >
                    <img
                        src={logo_img} 
                        alt={logo_alt} 
                        className="nav-logo"
                    />
                </Link>
                <nav className='nav-menu'>
                    <ul
                        className='nav-list'
                    >
                        {items}
                    </ul>
                    <div 
                        className="burger-container"
                        onClick={onToggleMenu}
                    >
                        <img 
                            src={Burger} 
                            alt="Menu button icon" 
                            className='burger-btn'
                        />
                        <ul
                            className={`nav-list_burger ${navShow}`}
                        >
                            {items}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

    const content = list ? renderList(list) : null;

    return (
        <div className='container'>
            { content }
        </div>
    )
}

export default NavMenu;