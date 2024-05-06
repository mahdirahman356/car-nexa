// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import slider1 from "../assets/Image/car-slider-1.avif"
import slider2 from "../assets/Image/car-slider-2.avif"
import slider3 from "../assets/Image/car-slider-3.jpg"
import slider4 from "../assets/Image/car-slider-4.jpg"

// import required modules

const Header = () => {
    return (
        <div>
            <Swiper
            spaceBetween={30}
            effect={'fade'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${slider1})` }}>
                        <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                        <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                            <div className="md:w-[50%]">
                                <h1 className="mb-5 text-4xl md:text-5xl text-center md:text-start font-bold">Where Every Mile Begins Find Your Perfect Ride</h1>
                                <p className="mb-5  text-center md:text-start">Discover your dream car with CarNexa. Explore our curated collection of quality vehicles, personalized to match your style and needs. From luxury sedans to adventurous SUVs, CarNexa brings you closer to the car you have always wanted. Start your journey today.</p>
                                <div className='flex justify-center md:justify-start items-center'>
                                    <button className="btn bg-[#322C2B] border-none text-white mr-3">Get Started</button>
                                    <button className="btn btn-outline text-white">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${slider2})` }}>
                        <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                        <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                            <div className="md:w-[50%]">
                                <h1 className="mb-5 text-4xl md:text-5xl text-center md:text-start font-bold">Where Every Mile Begins Find Your Perfect Ride</h1>
                                <p className="mb-5  text-center md:text-start">Discover your dream car with CarNexa. Explore our curated collection of quality vehicles, personalized to match your style and needs. From luxury sedans to adventurous SUVs, CarNexa brings you closer to the car you have always wanted. Start your journey today.</p>
                                <div className='flex justify-center md:justify-start items-center'>
                                    <button className="btn bg-[#322C2B] border-none text-white mr-3">Get Started</button>
                                    <button className="btn btn-outline text-white">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${slider3})` }}>
                        <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                        <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                            <div className="md:w-[50%]">
                                <h1 className="mb-5 text-4xl md:text-5xl text-center md:text-start font-bold">Where Every Mile Begins Find Your Perfect Ride</h1>
                                <p className="mb-5  text-center md:text-start">Discover your dream car with CarNexa. Explore our curated collection of quality vehicles, personalized to match your style and needs. From luxury sedans to adventurous SUVs, CarNexa brings you closer to the car you have always wanted. Start your journey today.</p>
                                <div className='flex justify-center md:justify-start items-center'>
                                    <button className="btn bg-[#322C2B] border-none text-white mr-3">Get Started</button>
                                    <button className="btn btn-outline text-white">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${slider4})` }}>
                        <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,0) py-60 md:py-80"></div>
                        <div className=" w-[95%] md:w-[85%] mx-auto text-neutral-content">
                            <div className="md:w-[50%]">
                                <h1 className="mb-5 text-4xl md:text-5xl text-center md:text-start font-bold">Where Every Mile Begins Find Your Perfect Ride</h1>
                                <p className="mb-5  text-center md:text-start">Discover your dream car with CarNexa. Explore our curated collection of quality vehicles, personalized to match your style and needs. From luxury sedans to adventurous SUVs, CarNexa brings you closer to the car you have always wanted. Start your journey today.</p>
                                <div className='flex justify-center md:justify-start items-center'>
                                    <button className="btn bg-[#322C2B] border-none text-white mr-3">Get Started</button>
                                    <button className="btn btn-outline text-white">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;