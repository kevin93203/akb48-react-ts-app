import Logo from './Logo'
import "./Header.css"

export default function Header(){
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