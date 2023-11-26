import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import img from '../../../assets/banner3.jpg'
import img2 from '../../../assets/banner1.jpg'
import img3 from '../../../assets/banner2.jpg'



const Banner = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={500}
            >
                <div data-src={img} />
                <div data-src={img2} />
                <div data-src={img3} />
            </AutoplaySlider>
        </>
    );
};

export default Banner;