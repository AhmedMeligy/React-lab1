import React, { Component, Fragment } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      currentIndex: 0,
      isPlaying: false,
      intervalId: null
    };
  }
  nextSlide = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % this.state.images.length
    }));
  };

  prevSlide = () => {
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex - 1 + this.state.images.length) % this.state.images.length
    }));
  };

  playSlideshow = () => {
    const intervalId = setInterval(this.nextSlide, 2000);
    this.setState({ isPlaying: true, intervalId });
  };

  stopSlideshow = () => {
    clearInterval(this.state.intervalId);
    this.setState({ isPlaying: false });
  };

  render() {
    const { images, currentIndex, isPlaying } = this.state;

    return (
      <Fragment>
        <h1>Slider</h1>
        <div>
          <img src={images[currentIndex]} alt="slide" style={{ width:'600px', height:'300px'}} /><br/>
          <button onClick={this.prevSlide}>Previous</button>
          <button onClick={this.nextSlide}>Next</button>
          {isPlaying ? (
            <button onClick={this.stopSlideshow}>Stop</button>
          ) : (
            <button onClick={this.playSlideshow}>Play</button>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Slider;
