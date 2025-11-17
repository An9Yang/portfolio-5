import { Link } from 'react-router-dom';

function Component_1({ onMenuToggle, isMenuOpen }) {
  return (
    <div
      className="nav__head"
      data-frz-id="2akuwwlrfst"
      data-component-id="Component_1"
    >
      <Link
        to="/"
        className="nav__brand w-inline-block w--current"
        data-frz-id="2pi1pyi66y6"
      >
        <img
          alt="Meraki"
          loading="lazy"
          src="https://cdn.prod.website-files.com/68adf375e35ad16c2f64d0bf/68b0cca67ccef24d34d15214_Meraki.svg"
          className="nav__brand-img"
          data-frz-id="spvzfc2dr5"
        />
      </Link>
      <button
        className={`menu-button ${isMenuOpen ? 'menu-button--active' : ''}`}
        data-frz-id="tovi7qf0lum"
        onClick={onMenuToggle}
      >
        <div
          menu="dot-stay"
          className="menu__button-dot"
          data-frz-id="lpfsr732bd9"
        ></div>
        <div
          menu="dot-leave"
          className="menu__button-dot-leave"
          data-frz-id="icw3lq2qdz"
        ></div>
        <div
          menu="dot-stay"
          className="menu__button-dot"
          data-frz-id="51extpwx4nb"
        ></div>
        <div
          menu="dot-leave"
          className="menu__button-dot-leave"
          data-frz-id="zwr7bx42a"
        ></div>
        <div
          menu="dot-stay"
          className="menu__button-dot"
          data-frz-id="hnfb57vl4gt"
        ></div>
        <div
          menu="dot-leave"
          className="menu__button-dot-leave"
          data-frz-id="vrto1ct0i1"
        ></div>
        <div
          menu="dot-stay"
          className="menu__button-dot"
          data-frz-id="r2cji5xpika"
        ></div>
        <div
          menu="dot-leave"
          className="menu__button-dot-leave"
          data-frz-id="hsud7omr22a"
        ></div>
        <div
          menu="dot-stay"
          className="menu__button-dot"
          data-frz-id="hxbwula4vom"
        ></div>
      </button>
    </div>
  );
}

export default Component_1;
