import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProductCarosul from './ProductCarosul';
import 'swiper/css';
import 'swiper/css/pagination';
import "./style.css"
import { useEffect, useState } from 'react';
const ProductSwiper = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch("carosul.json")
        .then(res => res.json())
        .then(data  => setProducts(data))
    },[])

    console.log(products.length);
  return (
    <div >
      <div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,

            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
            
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
         {
            products.map(product => <SwiperSlide key={product.id}><ProductCarosul  product={product} /></SwiperSlide>)
         }
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSwiper;
