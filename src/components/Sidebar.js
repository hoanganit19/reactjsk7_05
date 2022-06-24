import { Link } from "react-router-dom";

function Sidebar(){
    return (
        <>
            <ul>
                <li>
                    <Link to='/' className='nav-link'>Trang chủ</Link>
                </li>
                <li>
                    <Link to='/about' className='nav-link'>Giới thiệu</Link>
                </li>
                <li>
                    <Link to='/products' className='nav-link'>Sản phẩm</Link>
                </li>
                <li>
                    <Link to='/news' className='nav-link'>Tin tức</Link>
                </li>
                <li>
                    <Link to='/contact' className='nav-link'>Liên hệ</Link>
                </li>
            </ul>
        </>
    );
}

export default Sidebar;