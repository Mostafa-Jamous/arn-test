import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/controller";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReviewItem from "../components/ReviewItem";

function Reviews() {
  return (
    <div className="w-[85%] mx-auto max-md:mt-16">
      <div className="text-center text-[#333] mb-14 ">
        <h1 className="font-bold text-3xl mb-3  ">Reviews that made our day</h1>
        <p className="font-semibold ">
          We love seeing your beautiful Mixtiles walls!
        </p>
      </div>
      <div className="z-0 pb-24">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3.5}
          breakpoints={{
            1020: {
              slidesPerView: 4.2,
            },
            560: {
              slidesPerView: 3.1,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <ReviewItem
              image="https://res.cloudinary.com/mixtiles/image/upload/assets/homepage/2023/testimonials/altDesign/testimonial_01.webp"
              description="You`ve all heard me talk about these mixtiles but they really are the best"
              name="@raising.a.girl.gang"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewItem
              image="https://res.cloudinary.com/mixtiles/image/upload/assets/homepage/2023/testimonials/altDesign/testimonial_01.webp"
              description="You`ve all heard me talk about these mixtiles but they really are the best"
              name="@raising.a.girl.gang"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewItem
              image="https://res.cloudinary.com/mixtiles/image/upload/assets/homepage/2023/testimonials/altDesign/testimonial_01.webp"
              description="You`ve all heard me talk about these mixtiles but they really are the best"
              name="@raising.a.girl.gang"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewItem
              image="https://res.cloudinary.com/mixtiles/image/upload/assets/homepage/2023/testimonials/altDesign/testimonial_01.webp"
              description="You`ve all heard me talk about these mixtiles but they really are the best"
              name="@raising.a.girl.gang"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewItem
              image="https://res.cloudinary.com/mixtiles/image/upload/assets/homepage/2023/testimonials/altDesign/testimonial_01.webp"
              description="You`ve all heard me talk about these mixtiles but they really are the best"
              name="@raising.a.girl.gang"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewItem
              image="https://res.cloudinary.com/mixtiles/image/upload/assets/homepage/2023/testimonials/altDesign/testimonial_01.webp"
              description="You`ve all heard me talk about these mixtiles but they really are the best"
              name="@raising.a.girl.gang"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewItem
              image="https://res.cloudinary.com/mixtiles/image/upload/assets/homepage/2023/testimonials/altDesign/testimonial_01.webp"
              description="You`ve all heard me talk about these mixtiles but they really are the best"
              name="@raising.a.girl.gang"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewItem
              image="https://res.cloudinary.com/mixtiles/image/upload/assets/homepage/2023/testimonials/altDesign/testimonial_01.webp"
              description="You`ve all heard me talk about these mixtiles but they really are the best"
              name="@raising.a.girl.gang"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Reviews;
