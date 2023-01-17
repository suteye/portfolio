import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Image from 'next/image'

import login from '../public/images/login.png'
import salePage1 from '../public/images/salePage.png'
import salePage2 from '../public/images/salePages.png'
import bill from '../public/images/bill.png'
import stock from '../public/images/stock.png'

const Slider = () => {
  return (
    <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image
                        className="object-fill w-full"
                        src={login}
                        alt="Login Page"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="object-fill w-full"
                        src={salePage1}
                        alt="Sale Page"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="object-fill w-full"
                        src={salePage2}
                        alt="Add product to cart"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="object-fill w-full"
                        src={bill}
                        alt="Transaction Page"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="object-fill w-full"
                        src={stock}
                        alt="Stock Page"
                    />
                </SwiperSlide>


            </Swiper>
  )
}

export default Slider