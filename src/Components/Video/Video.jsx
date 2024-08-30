import './Video.css'
import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from 'lucide-react'
import videoInfo from '../../Utils/VideoInfo'


const Video = () => {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === videoInfo.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return videoInfo.length - 1
            return index - 1
        })
    }

    return (
        <div id='Animations' className='grid grid-cols-3 mt-10 mb-20 ml-10'>
            <header className='animations-title relative w-fit my-5 text-3xl col-start-2 p-5'>Animations</header>
            <main
                className='video-main relative col-span-2 col-start-2 px-[4.5rem] rounded-2xl'
                style={{
                    maxWidth: '1200px',
                    width: '80%',
                    aspectRatio: '10/6',
                }}>

                <article
                    className='outer-video-container rounded-2xl'
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                    }}>
                    <section
                        className='inner-video-container rounded-2xl'
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            overflow: 'hidden',
                            position: 'relative'
                        }}>
                        {videoInfo.map((item) => (
                            <>
                                <iframe
                                    className='img-slider-img rounded-2xl'
                                    style={{ translate: `${-100 * imageIndex}%` }}
                                    key={item.key}
                                    src={item.url}
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                    title={item.title}
                                >
                                </iframe>
                                <script src="https://player.vimeo.com/api/player.js"></script>
                            </>
                        ))}
                    </section>
                    <button
                        className='img-slider-btn ml-1'
                        onClick={showPrevImage}
                        style={{ left: '-4.25rem' }}>
                        <ArrowBigLeft />
                    </button>
                    <button
                        className='img-slider-btn mr-1'
                        onClick={showNextImage}
                        style={{ right: '-4.25rem' }}>
                        <ArrowBigRight />
                    </button>
                    <article
                        className='img-slider-dot-btn-container my-2'
                        style={{
                            position: 'absolute',
                            left: '50%',
                            translate: '-50%',
                            display: 'flex',
                            gap: '.75rem'
                        }}>
                        {videoInfo.map((_, index) => (
                            <button
                                onClick={() => setImageIndex(index)}
                                key={index}
                                className='img-slider-dot-btn'
                            >{index === imageIndex ? <CircleDot /> : <Circle />}</button>
                        ))}
                    </article>
                </article>
            </main>
        </div>
    )
}

export default Video

