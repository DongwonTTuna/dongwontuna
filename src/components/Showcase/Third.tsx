import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
export const Third = component$(() => {
  return (
    <div class="third screen">
      <div class="textandButton">
        <div class="text w-[1500px]">
          Experienced in <br />
          <span class="text-white bg-[#82C3FF]">3D Modeling</span>
          &nbsp;Development.
        </div>

        <div class="w-fit mt-32">
          <Link href="/works/frontend">
            <div class="button bg-[#53B7FF] border-[1px] border-[#CBCBCB]">
              Check My Blender Works
            </div>
          </Link>
          <div class="displays">
            <div class="itemsq">
              <img src="/assets/images/icons/photoshop.png" alt="photoshop" />
            </div>
            <div class="itemsq">
              <img src="/assets/images/icons/illustrator.png" alt="illustrator" />
            </div>
            <div class="item">
              <img src="/assets/images/icons/figma.png" alt="figma" />
            </div>
            <div class="item">
              <img src="/assets/images/icons/blender.png" alt="blender" />
            </div>
          </div>
        </div>
      </div>
      <div class="thirdBackground">
        <div class="firstImgs Imgs">
          <img src="/assets/images/slideshows/tunawallpapersaved.png" alt="tradingview" />
        </div>
        <div class="secondImgs Imgs">
          <img src="/assets/images/slideshows/excitedTunaShowcase.png" alt="bioden" />
        </div>
      </div>
    </div>
  );
});
