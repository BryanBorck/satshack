import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function Layout() {

    return (
        <div className='w-[100vw] lg:h-[100vh] lg:flex lg:flex-row bg-gradient-to-r from-primary-color to-secondary-color overflow-hidden'>
            <Header/>
            <Outlet/>
        </div>
    )
}