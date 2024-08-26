import './Header.css'
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <header className='header-main flex justify-between'>
            <section className='flex-col m-10'>
                <h1 className='text-6xl'>Tamara Finlay</h1>
                <h2 className='text-3xl'>Stop Motion Animation</h2>
            </section>
            <Navbar />
        </header>
    )
}

export default Header