import React from "react";
import { Box, Image } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState } from "react";
const sliderImg = [
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/4923.png", id: 3763 },
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/4820.png", id: 3765 },
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/4986.png", id: 3766 },
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/4985.png", id: 3767 },
  { img: "https://imageprod.fraazo.com/fraazo-prod/web_ban/2562.png", id: 3768 },
];

// use common sliders
const ImageSlider = () => {
  const [images, setImages] = useState(sliderImg);

  return (
    <Box>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Image src={item.img} height="auto" width="1000px" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageSlider;


