import logo from '../assets/logo.svg';

function Header() {
    return (
       <header>
        <span className="logo">
            <img src={logo} alt="Logo Taskname" />
        </span>
       </header>
    )
}

export default Header;