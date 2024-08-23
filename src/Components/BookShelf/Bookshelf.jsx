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
            <main className='flex flex-col items-center w-full mt-40'>
                <article className='flex justify-center items-baseline h-fit'>
                    {Videos.map((item) => (
                        <section key={item.key}>
                            <ModalVideo
                                channel={item.channel}
                                isOpen={this.state.isOpen}
                                videoId={item.videoId}
                                onClose={() => this.setState({ isOpen: false })}
                            />
                            <button onClick={this.openModal} id={item.id} className='flex justify-center items-center book w-10 h-[20rem] border-2 rounded-md border-black'>{item.title}</button>
                        </section>
                    ))}
                </article>
                <article className='border-b-2 w-96 h-fit border-black'></article>
            </main>
        );
    }
}

export default bookshelf;