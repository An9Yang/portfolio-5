import Component_2_1_1_1 from './Component_2_1_1_1';
import Component_2_1_1_2 from './Component_2_1_1_2';

function Component_2_1_1({ isOpen }) {
  return (
    <div
      className={`menu__items ${isOpen ? 'menu__items--visible' : ''}`}
      data-frz-id="3r5lifrzlfu"
      data-component-id="Component_2_1_1"
    >
      <Component_2_1_1_1 />
      <Component_2_1_1_2 />
      <div
        id="w-node-_38520a2c-841f-1948-0da8-9200c459d176-c459d139"
        className="menu__contact"
        data-frz-id="br6letvi6b4"
      >
        <a
          href="mailto:info@meraki.com"
          className="menu__contact-link w-inline-block"
          data-frz-id="j25o9vb0nib"
        >
          <div className="text-regular" data-frz-id="go66expxj5">
            Info@meraki.com
          </div>
        </a>
        <a
          href="#"
          className="menu__contact-link w-inline-block"
          data-frz-id="8z8amx6dcyq"
        >
          <div className="text-regular" data-frz-id="8aei9vpsow">
            +44 210 345 6789
          </div>
        </a>
      </div>
    </div>
  );
}

export default Component_2_1_1;
