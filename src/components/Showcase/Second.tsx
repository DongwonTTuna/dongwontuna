import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
export const Second = component$(() => {
  return (
    <div class="second">
      <div class="textandButton">
        <div class="text">
          Experienced in <span class="text-white bg-[#C4FF9F]">Web 3.0</span>
          <br />
          Development since 2017.
        </div>

        <div class="w-fit mt-32">
          <Link href="/works/frontend">
            <div class="button bg-[#B1FF74] border-[1px] border-[#CBCBCB]">Check My WEB 3.0 Works</div>
          </Link>
          <div class="displays">
            <div class="item">
              <img src="/assets/images/icons/solidity.png" alt="solidity" />
            </div>
            <div class="item">
              <img src="/assets/images/icons/metamask.png" alt="metamask" />
            </div>
            <div class="item">
              <img src="/assets/images/icons/remix.png" alt="remixIde" />
            </div>
            <div class="item">
              <img src="/assets/images/icons/truffleSuite.png" alt="truffle" />
            </div>
          </div>
        </div>
      </div>
      <div class="secondscreen">
        <div class="secondBackground">
          <div class="icon Imgs">
            <img src="/assets/images/cryptos/icon.png" alt="icon" />
          </div>
          <div class="btc Imgs">
            <img src="/assets/images/cryptos/btc.png" alt="btc" />
          </div>
          <div class="eth Imgs">
            <img src="/assets/images/cryptos/eth.png" alt="eth" />
          </div>
          <div class="ae Imgs">
            <img src="/assets/images/cryptos/ae.png" alt="ae" />
          </div>
          <div class="stellar Imgs">
            <img src="/assets/images/cryptos/stellar.png" alt="stellar" />
          </div>
          <div class="tron Imgs">
            <img src="/assets/images/cryptos/tron.png" alt="tron" />
          </div>
          <div class="engine Imgs">
            <img src="/assets/images/cryptos/engin.png" alt="engin" />
          </div>
          <div class="openBook Imgs">
            <img src="/assets/images/slideshows/obshadow.png" alt="Book" />
          </div>
        </div>
      </div>
    </div>
  );
});
