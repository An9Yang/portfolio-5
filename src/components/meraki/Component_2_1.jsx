import Component_2_1_1 from './Component_2_1_1';

function Component_2_1({ isOpen }) {
  return (
    <div
      className="menu__overflow"
      data-frz-id="347pb2u9y4e"
      data-component-id="Component_2_1"
    >
      <div className="menu__content" data-frz-id="u643saghmh">
        <div className="menu__grow" data-frz-id="9becyprxmcf"></div>
        <div className={`menu__marquee ${isOpen ? 'menu__marquee--visible' : ''}`} data-frz-id="e5omt2vnzso">
          <div className="marquee" data-frz-id="pcrkqarks5">
            <div
              data-marquee="horizontal"
              className="marquee__track"
              data-frz-id="zn0qv2zsfc"
            >
              <div className="marquee__item" data-frz-id="4k4seelpxt5">
                <div
                  className="text-tiny for--marquee"
                  data-frz-id="iaxenbwp9q"
                >
                  A studio for design and architecture
                </div>
                <div
                  className="text-tiny for--marquee"
                  data-frz-id="ulck63wqbl"
                >
                  *
                </div>
              </div>
              <div className="marquee__item" data-frz-id="r285djey2jj">
                <div
                  className="text-tiny for--marquee"
                  data-frz-id="k46d9n5ifp"
                >
                  A studio for design and architecture
                </div>
                <div
                  className="text-tiny for--marquee"
                  data-frz-id="lkw0ro589ol"
                >
                  *
                </div>
              </div>
              <div className="marquee__item" data-frz-id="1l9qqj0ccw8">
                <div
                  className="text-tiny for--marquee"
                  data-frz-id="8dwf890qzfj"
                >
                  A studio for design and architecture
                </div>
                <div
                  className="text-tiny for--marquee"
                  data-frz-id="vmqivwwiby"
                >
                  *
                </div>
              </div>
            </div>
          </div>
        </div>
        <Component_2_1_1 isOpen={isOpen} />
      </div>
    </div>
  );
}

export default Component_2_1;
