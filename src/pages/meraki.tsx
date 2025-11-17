import { useEffect, useState } from 'react';
import Component_1 from '@/components/meraki/Component_1';
import Component_2 from '@/components/meraki/Component_2';
import Component_3 from '@/components/meraki/Component_3';
import Component_4 from '@/components/meraki/Component_4';
import Component_5 from '@/components/meraki/Component_5';
import Component_6 from '@/components/meraki/Component_6';
import Component_7 from '@/components/meraki/Component_7';
import Component_8 from '@/components/meraki/Component_8';
import Component_9 from '@/components/meraki/Component_9';
import Component_10 from '@/components/meraki/Component_10';

function MerakiPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Execute delayed scripts after React has rendered
    console.log('[React] DOM rendered, executing delayed scripts...');

    // Execute regular delayed scripts first
    const delayedScripts = document.querySelectorAll(
      'script[type="text/delayed"]'
    );

    delayedScripts.forEach((script) => {
      const htmlScript = script as HTMLElement;
      const newScript = document.createElement('script');

      // External script (has data-src)
      if (htmlScript.dataset.src) {
        newScript.src = htmlScript.dataset.src;

        // Copy other attributes (integrity, crossorigin, defer, etc.)
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name !== 'data-src') {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      } else {
        // Inline script
        newScript.textContent = script.textContent;

        // Copy data-* attributes
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name.startsWith('data-')) {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      }

      document.body.appendChild(newScript);
    });

    // Execute delayed module scripts (Pattern 006: Pre-bundled ES Module Scripts)
    const delayedModules = document.querySelectorAll(
      'script[type="text/delayed-module"]'
    );

    delayedModules.forEach((script) => {
      const htmlScript = script as HTMLElement;
      const newScript = document.createElement('script');
      newScript.type = 'module'; // Restore original type

      // External module script (has data-src)
      if (htmlScript.dataset.src) {
        newScript.src = htmlScript.dataset.src;

        // Copy other attributes (crossorigin, etc.)
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name !== 'data-src') {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      } else {
        // Inline module script
        newScript.textContent = script.textContent;

        // Copy data-* attributes
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name.startsWith('data-')) {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      }

      document.body.appendChild(newScript);
    });

    console.log(
      `[React] Executed ${delayedScripts.length} delayed scripts + ${delayedModules.length} delayed modules`
    );
  }, []);

  return (
    <>
      <div className="global" data-frz-id="1fxt3fsq4rph">
        <div className="global__styles w-embed" data-frz-id="gctamvvbyv"></div>
      </div>
      <div className="page-wrapper" data-frz-id="rfaxcmraenn">
        <header className="header" data-frz-id="30co36fmymi">
          <nav className="nav" data-frz-id="0j6o0dk5he5t">
            <Component_1 onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
            <Component_2 isOpen={isMenuOpen} onClose={toggleMenu} />
          </nav>
        </header>
        <main className="sections" data-frz-id="5t2kfugyg84">
          <section className="hero" data-frz-id="l0sg4kmrbu">
            <img
              alt="Meraki"
              loading="lazy"
              src="https://cdn.prod.website-files.com/68adf375e35ad16c2f64d0bf/68b0dc2bee5a6ec8a5731d31_hero-img.avif"
              className="hero__img"
              data-frz-id="94hyknhv6bu"
            />
            <div className="hero__vertical-marquee" data-frz-id="4sm5ws5c89j">
              <div className="marquee-vertical" data-frz-id="z8i24gmlgi8">
                <div
                  data-marquee="vertical"
                  className="marquee-vertical__track"
                  data-frz-id="i0f3hcxz7g"
                >
                  <div
                    className="marquee-vertical__item"
                    data-frz-id="3kv5uema6p8"
                  >
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="julm6176zt8"
                    >
                      info@meraki.com
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="pyvw6n2g9l"
                    >
                      *
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="y9csl2pb0no"
                    >
                      +44 20 6068 2668
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="65rc0zkeya"
                    >
                      *
                    </div>
                  </div>
                  <div
                    className="marquee-vertical__item"
                    data-frz-id="xptpq5lthq"
                  >
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="s3wtqrctksb"
                    >
                      info@meraki.com
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="nyupk3zr6"
                    >
                      *
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="tczh69062q"
                    >
                      +44 20 6068 2668
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="cibs2zf90kc"
                    >
                      *
                    </div>
                  </div>
                  <div
                    className="marquee-vertical__item"
                    data-frz-id="jqbg3foanzq"
                  >
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="0ra3u9wmpm0m"
                    >
                      info@meraki.com
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="p99ijk5kbrr"
                    >
                      *
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="8l4mkkedaa8"
                    >
                      +44 20 6068 2668
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="q8qy086aeu"
                    >
                      *
                    </div>
                  </div>
                  <div
                    className="marquee-vertical__item"
                    data-frz-id="1yh2isve24c"
                  >
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="3bwv07akvc5"
                    >
                      info@meraki.com
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="5cgcd1uzn8n"
                    >
                      *
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="ovca8vxj1kd"
                    >
                      +44 20 6068 2668
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="9pjd3f1bqno"
                    >
                      *
                    </div>
                  </div>
                  <div
                    className="marquee-vertical__item"
                    data-frz-id="pk2zd0khqh"
                  >
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="eupobpe79cq"
                    >
                      info@meraki.com
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="ep33pz032vo"
                    >
                      *
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="pp5buws1eb"
                    >
                      +44 20 6068 2668
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="z1iem84qmyr"
                    >
                      *
                    </div>
                  </div>
                  <div
                    className="marquee-vertical__item"
                    data-frz-id="3imzs1n6a6q"
                  >
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="vaqwuiwy9ci"
                    >
                      info@meraki.com
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="v5epexutiv"
                    >
                      *
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="pqbarerpa8"
                    >
                      +44 20 6068 2668
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="v2lzuk4cxr"
                    >
                      *
                    </div>
                  </div>
                  <div
                    className="marquee-vertical__item"
                    data-frz-id="4vhwl3rpko"
                  >
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="7ggmz713wvt"
                    >
                      info@meraki.com
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="kt0f5kz7bj"
                    >
                      *
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="5fybxiuo4aj"
                    >
                      +44 20 6068 2668
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="cn2sdubvh3p"
                    >
                      *
                    </div>
                  </div>
                  <div
                    className="marquee-vertical__item"
                    data-frz-id="2oka17xf5mr"
                  >
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="spxq1fvjo9e"
                    >
                      info@meraki.com
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="ikl0cx6i9s"
                    >
                      *
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="6dgrp207ndl"
                    >
                      +44 20 6068 2668
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="eb0r6igpqv6"
                    >
                      *
                    </div>
                  </div>
                  <div
                    className="marquee-vertical__item"
                    data-frz-id="e7ufm4tb1c7"
                  >
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="j9441ue95to"
                    >
                      info@meraki.com
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="mdw8w1wl4wk"
                    >
                      *
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="gwziuz40nh"
                    >
                      +44 20 6068 2668
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="5pgzwnd91hv"
                    >
                      *
                    </div>
                  </div>
                  <div
                    className="marquee-vertical__item"
                    data-frz-id="j1lnbxjzegr"
                  >
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="8u3rw9n1q75"
                    >
                      info@meraki.com
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="isbrhk1io3d"
                    >
                      *
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="nr298whx6dr"
                    >
                      +44 20 6068 2668
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="0pd7iegieojm"
                    >
                      *
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero__horizontal-marquee" data-frz-id="jhry8jmdfot">
              <div className="marquee" data-frz-id="ivgn7393f0h">
                <div
                  data-marquee="horizontal"
                  className="marquee__track"
                  data-frz-id="n0ss7srzjr"
                >
                  <div className="marquee__item" data-frz-id="hn9xo4x0lr8">
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="80epjz519ka"
                    >
                      info@meraki.com
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="zcm25vqgxa"
                    >
                      *
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="dpbyn81ko7a"
                    >
                      +44 20 6068 2668
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="5zqbvmpeo3q"
                    >
                      *
                    </div>
                  </div>
                  <div className="marquee__item" data-frz-id="w5m5gf4lx88">
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="bdj1cdskoro"
                    >
                      info@meraki.com
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="wumfqwija2"
                    >
                      *
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="9cdshvxo5n9"
                    >
                      +44 20 6068 2668
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="4o4xogbpu9"
                    >
                      *
                    </div>
                  </div>
                  <div className="marquee__item" data-frz-id="657bso9pslq">
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="85ak5lc2h47"
                    >
                      info@meraki.com
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="4np2d75k9vu"
                    >
                      *
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="lx22387qdkm"
                    >
                      +44 20 6068 2668
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="pkty0n1vu7"
                    >
                      *
                    </div>
                  </div>
                  <div className="marquee__item" data-frz-id="7uv9hw50xhx">
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="at70npzurho"
                    >
                      info@meraki.com
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="s5svudgpy9q"
                    >
                      *
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="p3v891ecimr"
                    >
                      +44 20 6068 2668
                    </div>
                    <div
                      className="text-tiny for--marquee"
                      data-frz-id="2brpbxfn0q"
                    >
                      *
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Component_3 />
          </section>
          <div className="spacer-huge" data-frz-id="wgndpta4no"></div>
          <section className="words" data-frz-id="nga03jf2pwo">
            <Component_4 />
          </section>
          <div className="spacer-huge" data-frz-id="348npvsea8q"></div>
          <section className="projects" data-frz-id="2c7p43ceg7">
            <Component_5 />
          </section>
          <div className="spacer-huge" data-frz-id="7tfjukdmta"></div>
          <section className="firm" data-frz-id="ms1le4neo4">
            <Component_6 />
          </section>
          <div className="spacer-huge" data-frz-id="1sx0r2s5k2b"></div>
          <section className="journal" data-frz-id="pzzx6e3wfbr">
            <Component_7 />
          </section>
          <div className="spacer-huge" data-frz-id="y051foj673k"></div>
        </main>
        <footer className="footer" data-frz-id="29nly197lor">
          <div className="footer__content" data-frz-id="idpibdbmy0o">
            <Component_8 />
            <Component_9 />
            <div className="footer__legal" data-frz-id="m1bhk2hah0p">
              <div className="text-regular" data-frz-id="zjq8towveth">
                ©2025 Meraki Architects
              </div>
              <div
                id="w-node-c1ee3e52-7b50-9767-a902-592c86e928b4-86e92876"
                className="footer__legal-links"
                data-frz-id="lyghfjre3h"
              >
                <a
                  href="https://meraki-template.webflow.io/privacy-policy"
                  className="footer__link w-inline-block"
                  data-frz-id="uslptllt0t7"
                >
                  <div className="text-regular" data-frz-id="lwb2v4u1or">
                    Privacy Policy
                  </div>
                </a>
              </div>
            </div>
            <Component_10 />
          </div>
        </footer>
      </div>
    </>
  );
}

export default MerakiPage;
