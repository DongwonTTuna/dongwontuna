import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
const Header = component$(() => {
  return (
    <>
      <header class="header">
        <Link href="/">
          <div class="logodiv">
            <img src="/assets/images/TunaCompress.png" alt="TunaLogo" />
          </div>
        </Link>
        <div class="menu">
          <Link href="/works/frontend">
            <div class="item">Works</div>
          </Link>
          <Link href="/skills/staticLang">
            <div class="item">Skills</div>
          </Link>
          <Link href="/dreams">
            <div class="item">Dreams</div>
          </Link>
        </div>
        <div class="personalLinks">
          <Link target="_blank" href="https://www.instagram.com/higasihara_/">
            <div class="item">
              <img
                src="/assets/images/icons/instagram.png"
                alt="InstagramLink"
              />
            </div>
            </Link>
            <Link target="_blank" href="https://github.com/DongwonTTuna">
            <div class="item">
              <img src="/assets/images/icons/github.png" alt="GithubLink" />
            </div>
          </Link>
          <Link target="_blank" href="https://t.me/DongwonTTuna">
            <div class="item">
              <img src="/assets/images/icons/telegram.png" alt="TelegramLink" />
            </div>
          </Link>
        </div>
      </header>
    </>
  );
});

export default Header;
