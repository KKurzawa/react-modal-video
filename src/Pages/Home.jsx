import './Home.css'
// import Bookshelf from '../Components/BookShelf/Bookshelf'
import Header from '../Components/Header/Header'
import Biography from '../Components/Biography/Biography'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import Video from '../Components/Video/Video'

const Home = () => {
    return (
        <main>
            <Header />
            <article className='body-container'>
                <Biography />
                <Contact />
                <Video />
                {/* <Bookshelf /> */}
            </article>
            <Footer />
        </main>
    )
}

export default Home