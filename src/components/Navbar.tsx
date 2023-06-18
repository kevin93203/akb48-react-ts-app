import Logo from './Logo'
import "./Navbar.css"

export default function Navbar(){
    return (
        <nav className='navbar'>
            <Logo/>
            <div className="hamburger clkBtn">
                <a className="menu-trigger clkBtn">
                    <div></div>
                    <div></div>
                    <div></div>
                </a>
            </div>
        </nav>
    )
}