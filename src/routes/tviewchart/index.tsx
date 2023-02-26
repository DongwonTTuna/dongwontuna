import { component$ } from '@builder.io/qwik';
import { useTask$ } from '@builder.io/qwik';
export default component$(() => {
  useTask$(()=>{
        window.location.replace("https://tviewchart.dongwontuna.net");
    })
  return (<></>)
});