import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const First = component$(() => {
  return (
    <div class="first screen">
      <div class="textandButton">
        To be a <span class="text-white bg-[#FFC5C5]">World Class</span>
        <br />
        Frontend Engineer
        <div class="w-fit mt-32">
          <Link href="/works/frontend">
            <div class="button bg-[#F97474]">Check My Frontend Works</div>
          </Link>
          <div class="displays">
            <div class="item">
              <img src="/assets/images/icons/nextjs.png" alt="nextJs" />
            </div>
            <div class="item">
              <img src="/assets/images/icons/react-icon.png" alt="React" />
            </div>
            <div class="item">
              <img src="/assets/images/icons/qwik.png" alt="qwik" />
            </div>
            <div class="item">
              <img src="/assets/images/icons/svelte_icon.png" alt="svelte" />
            </div>
          </div>
        </div>
      </div>
      <div class="firstBackground">
        <div class="firstImgs Imgs">
          <img src="/assets/images/slideshows/bioden.png" alt="bioden" />
        </div>
        <div class="secondImgs Imgs">
          <img src="/assets/images/slideshows/tviewchart.png" alt="tradingview" />
        </div>
        <div class="thirdImgs Imgs">
          <img src="/assets/images/slideshows/randomseat.png" alt="randomseat" />
        </div>
      </div>
    </div>
  );
});
