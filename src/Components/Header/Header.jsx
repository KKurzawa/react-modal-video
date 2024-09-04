import './Header.css'
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <main className='flex flex-col'>
            <header id='Top' className='header-main flex justify-between items-center py-5'>
                <section className='flex-col m-5'>
                    <h1 className='text-5xl lg:text-6xl'>Tamara Finlay</h1>
                </section>
                <Navbar />
            </header>
            <article className='subtitle-container flex justify-center w-full'>
                <h2 className='subtitle justify-items-center p-2 text-2xl lg:text-3xl my-2 lg:my-4'>Stop Motion Animator</h2>
            </article>
        </main>
    )
}

export default Header