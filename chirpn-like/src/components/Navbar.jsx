import { Link } from 'react-router-dom'
import { Button } from './styles/Button.styled';

export default function NavBar() {

    const respToggle = () => {
        const toggle = document.querySelector('.toggle-btn');
        const toggleIcon = document.querySelector('.toggle-btn i');
        const dropdown = document.querySelector('.dropdown');
        dropdown.classList.toggle('open')
        const isOpen = dropdown.classList.contains('open')

        toggleIcon.classList = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
    }

    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <a href='#'>Amir Portfolio</a>
                </div>
                <ul className='nav-links'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/contacts'}>Contact</Link></li>
                </ul>
                <div className="toggle-btn" onClick={respToggle}>
                    <i class="bi bi-list"></i>
                    {/* <i class="bi bi-x-lg"></i> */}
                </div>
            </div>
            <div className="dropdown">
                <li><Link to={'/'}>Home</Link></li>
                <Button>
                    <li><Link to={'/contacts'}>Contact</Link></li>
                </Button>
            </div>
        </header>
    )
}