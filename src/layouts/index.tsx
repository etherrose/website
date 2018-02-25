import * as React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { slide as Menu } from 'react-burger-menu';
import { Search } from 'material-ui-icons';

import '../../node_modules/foundation-sites/dist/css/foundation.css'
import './index.scss';

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
    location: {
        pathname: string,
    };
    children: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
    public render() {
        return (
            <div id='outer-container'>
                <div className='grid-x'>
                    <div className='cell medium-2'>
                        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
                            <a id='home' className='menu-item' href='/'>Home</a>
                            <a id='about' className='menu-item menu-item--about' href='/about'>About</a>
                            <a id='consultants' className='menu-item menu-item--sub' href='/about'>Consultants</a>
                            <a id='projects' className='menu-item menu-item--sub' href='/about'>Projects</a>
                            <a id='testimonials' className='menu-item menu-item--sub' href='/about'>Testimonials</a>
                            <a id='contact' className='menu-item' href='/contact'>Contact</a>
                        </Menu>
                    </div>
                    <Helmet
                        title='Ether Rose'
                        meta={[
                            { name: 'description', content: 'Sample' },
                            { name: 'keywords', content: 'sample, something' },
                        ]}
                    />
                    <div className='medium-10'>
                        <main id='page-wrap'>
                            <div className='grid-x'>
                                <div className='cell medium-8'>
                                    {this.props.children()}
                                </div>
                                <div className='cell medium-4'>
                                    <div className='search-bar'>
                                        <input type='text' placeholder='search' />
                                        <button className="button search-bar--icon" type="sumbit"> <Search /></button>
                                    </div>
                                </div>
                            </div>
                        </main>

                    </div>
                </div>


            </div>
        );
    }
}

export default DefaultLayout;
