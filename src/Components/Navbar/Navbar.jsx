import './Navbar.css'
import NavLinks from '../../Utils/NavLinks'

const Navbar = () => {
    return (
        <nav className='navbar flex gap-16 m-10'>
            {NavLinks.map((item) => (
                <button
                    className='nav-link w-fit h-fit text-3xl'
                    onClick={() => setTimeout(() => {
                        const element = document.querySelector(item.id);
                        element?.scrollIntoView({ behavior: 'smooth' })
                    }, 500)}
                    key={item.key}>{item.title}</button>
            ))}
        </nav>

    )
}

export default Navbar