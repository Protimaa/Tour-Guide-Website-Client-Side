import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import img from '../../../assets/banner3.jpg'
import img2 from '../../../assets/banner1.jpg'
import img3 from '../../../assets/banner2.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const TourPlace = () => {


    return (
        <section className='mt-14'>
            <SectionTitle 
            
            heading={"Our Reacet Visited Place"}>
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={img} alt="" />
                    <h3 className='text-2xl uppercase text-center -mt-16 text-white'>Dibir Haor Sylhet </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-2xl uppercase text-center -mt-16 text-white'>Dibir Haor Sylhet </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='text-2xl uppercase text-center -mt-16 text-white'>Dibir Haor Sylhet </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img} alt="" />
                    <h3 className='text-2xl uppercase text-center -mt-16 text-white'>Dibir Haor Sylhet </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-2xl uppercase text-center -mt-16 text-white'>Dibir Haor Sylhet </h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default TourPlace;