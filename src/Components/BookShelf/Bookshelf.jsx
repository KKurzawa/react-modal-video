import './Bookshelf.css'
import { Component } from "react";
import ModalVideo from "react-modal-video";
import Videos from '../../Utils/VideoData';
import "react-modal-video/scss/modal-video.scss";

export class bookshelf extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        setTimeout(() => {
            this.setState({ isOpen: true });
        }, 500)
    }
    render() {
        return (
            <main id='Animations' className='animations flex flex-col items-center w-full py-5'>
                <h2 className='mb-5 text-3xl'>Animations</h2>
                <section className='bookshelf-container flex flex-col items-center w-[50%] rounded-lg'>
                    <article className='flex justify-center items-baseline h-fit mt-10'>
                        {Videos.map((item) => (
                            <section key={item.key}>
                                <ModalVideo
                                    channel={item.channel}
                                    isOpen={this.state.isOpen}
                                    videoId={item.videoId}
                                    onClose={() => this.setState({ isOpen: false })}
                                />
                                <button onClick={this.openModal} id={item.id} className='book-btn flex justify-center items-center book w-10 h-[20rem] rounded-lg'>{item.title}</button>
                            </section>
                        ))}
                    </article>
                    <article className='table w-full h-fit mb-10'></article>
                </section>
            </main>
        );
    }
}

export default bookshelf;