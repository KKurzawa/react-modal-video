import './Bookshelf.css'
import { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export class videoModal extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({ isOpen: true });
    }
    render() {
        return (
            <main className='flex flex-col items-center w-full mt-40'>
                <article className='flex justify-center items-baseline h-fit'>
                    <div>
                        <ModalVideo
                            channel="vimeo"
                            isOpen={this.state.isOpen}
                            videoId="102435491"
                            onClose={() => this.setState({ isOpen: false })}
                        />
                        <button onClick={this.openModal} id='Something' className='flex justify-center items-center book w-10 h-[20rem] border-2 rounded-md border-black'>Something or Incomplete</button>
                    </div>
                    <div>
                        <ModalVideo
                            channel="vimeo"
                            isOpen={this.state.isOpen}
                            videoId="102435491"
                            onClose={() => this.setState({ isOpen: false })}
                        />
                        <button onClick={this.openModal} id='Missing' className='flex justify-center items-center book w-10 h-[20rem] border-2 rounded-md border-black'>Missing or Incomplete</button>
                    </div>
                    <div>
                        <ModalVideo
                            channel="vimeo"
                            isOpen={this.state.isOpen}
                            videoId="102435491"
                            onClose={() => this.setState({ isOpen: false })}
                        />
                        <button onClick={this.openModal} id='Cover' className='flex justify-center items-center book w-10 h-[21rem] border-2 rounded-md border-black'>Cover Your Eyes</button>
                    </div>
                    <div>
                        <ModalVideo
                            channel="vimeo"
                            isOpen={this.state.isOpen}
                            videoId="102435491"
                            onClose={() => this.setState({ isOpen: false })}
                        />
                        <button onClick={this.openModal} id='Yaga' className='flex justify-center items-center book w-10 h-[20rem] border-2 rounded-md border-black'>Yaga Intro</button>
                    </div>
                    <div>
                        <ModalVideo
                            channel="vimeo"
                            isOpen={this.state.isOpen}
                            videoId="102435491"
                            onClose={() => this.setState({ isOpen: false })}
                        />
                        <button onClick={this.openModal} id='Uncle' className='flex justify-center items-center book w-10 h-[20.5rem] border-2 rounded-md border-black'>Uncle Andre Excerpt</button>
                    </div>
                </article>
                <article className='border-b-2 w-96 h-fit border-black'></article>
            </main>

        );
    }
}

export default videoModal;