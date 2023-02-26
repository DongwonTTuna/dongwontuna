import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SlideShow } from "~/components/Showcase/SlideShow";

export default component$(() => {

  return (
    <div>
      <SlideShow/>
    </div>
  );
});

export const head: DocumentHead = {
  title: "DongwonTTuna's Land",
  meta: [
    {
      content: "@DongwonTTuna Main Land",
    },
  ],
};
