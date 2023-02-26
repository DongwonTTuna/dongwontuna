import Swiper, { Autoplay, Pagination } from "swiper";  
import { component$, useBrowserVisibleTask$ } from "@builder.io/qwik";
import { First } from "@components/Showcase/First";
import { Second } from "@components/Showcase/Second";
import { Third } from "./Third";

export const SlideShow = component$(() => {
  useBrowserVisibleTask$(() => {
    Swiper.use([Autoplay, Pagination]);
    new Swiper(".swiper", {
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  });
  return (
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <First />
        </div>
        <div class="swiper-slide">
          <Second />
        </div>
        <div class="swiper-slide">
          <Third />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  );
});
