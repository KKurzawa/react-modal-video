import './Footer.css'

const Footer = () => {
    const today = new Date();
    return (
        <footer className='footer-main flex flex-col items-center gap-1 py-3'>
            <button onClick={() => setTimeout(() => {
                const topButton = document.getElementById('Top');
                topButton.scrollIntoView({ behavior: 'smooth' })
            }, 500)} className='top-btn text-xl'>To The Top</button>
            <a className='email-btn text-xl' href='mailto:kurzawa1@yahoo.com'>Email Me</a>
            <a className='phone-btn text-xl' href='tel:248-568-2806'>Call Me</a>
            <button onClick={() => setTimeout(() => window.open('https://www.kriskurzawadev.com/', '_blank'), 500)} className='dev-link'>Site Designed and Built by Kris Kurzawa</button>
            <p className='copyright'>Copyright &copy; {today.getFullYear()} Tamara Finlay - All Rights Reserved</p>
        </footer>
    )
}

export default Footer