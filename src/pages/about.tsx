import { useEffect, useState } from 'react';
import Component_1 from '@/components/meraki/Component_1';
import Component_2 from '@/components/meraki/Component_2';
import Component_8 from '@/components/meraki/Component_8';
import Component_9 from '@/components/meraki/Component_9';
import Component_10 from '@/components/meraki/Component_10';

const heroCopy = [
  'We are a collective of designers and architects working to build places that improve life and work.',
  'Our work strives to enhance our sense of belonging, community, and wonder.'
];

const principles = [
  {
    title: 'Creativity without limits',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
  },
  {
    title: 'Advocates for the environment',
    body:
      'Vestibulum in augue in nunc commodo faucibus. Pellentesque venenatis nec sem eget bibendum. Donec convallis laoreet metus nec semper. Duis posuere urna lacus, non aliquet neque laoreet rhoncus. Phasellus vestibulum nulla risus, non feugiat dui vestibulum ut. Pellentesque ullamcorper nisl et hendrerit sodales. Phasellus at nisi tristique tortor tristique semper sit.'
  },
  {
    title: 'A culture of social responsibility',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
  }
];

const awards = [
  { name: 'OGEM Special Award for Sustainability', project: 'Project name', year: '2025' },
  { name: 'Designer of the Year 2025 - BAA Decor', project: 'Project name', year: '2025' },
  { name: 'DIV Lifetime Achievement Award 2024 to Name Surname', project: 'Project name', year: '2024' },
  { name: '2024 IPA Award', project: 'Project name', year: '2024' },
  { name: 'VASC Public Library of the Year', project: 'Project name', year: '2024' },
  { name: 'Visand Design Award - Office Spaces', project: 'Project name', year: '2024' },
  { name: 'CTBUH Awards', project: 'Project name', year: '2023' },
  { name: 'AILA Honor Awards', project: 'Project name', year: '2023' }
];

const galleryMain = {
  src: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=2000&q=80',
  caption: 'Meraki Architecture — London, England'
};

const galleryPair = [
  'https://images.unsplash.com/photo-1529429617124-aee5f4ae7890?auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80'
];

function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Mirror homepage behavior for menu + marquee scripts.
    const delayedScripts = document.querySelectorAll('script[type="text/delayed"]');
    delayedScripts.forEach((script) => {
      const htmlScript = script as HTMLElement;
      const newScript = document.createElement('script');

      if (htmlScript.dataset.src) {
        newScript.src = htmlScript.dataset.src;
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name !== 'data-src') {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      } else {
        newScript.textContent = script.textContent;
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name.startsWith('data-')) {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      }

      document.body.appendChild(newScript);
    });

    const delayedModules = document.querySelectorAll(
      'script[type="text/delayed-module"]'
    );

    delayedModules.forEach((script) => {
      const htmlScript = script as HTMLElement;
      const newScript = document.createElement('script');
      newScript.type = 'module';

      if (htmlScript.dataset.src) {
        newScript.src = htmlScript.dataset.src;
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name !== 'data-src') {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      } else {
        newScript.textContent = script.textContent;
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== 'type' && attr.name.startsWith('data-')) {
            newScript.setAttribute(attr.name, attr.value);
          }
        });
      }

      document.body.appendChild(newScript);
    });
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="global" data-frz-id="1fxt3fsq4rph">
        <div className="global__styles w-embed" data-frz-id="gctamvvbyv"></div>
      </div>

      <div className="page-wrapper" data-frz-id="rfaxcmraenn">
        {/* Header */}
        <header className="header" data-frz-id="30co36fmymi">
          <nav className="nav" data-frz-id="0j6o0dk5he5t">
            <Component_1 onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
            <Component_2 isOpen={isMenuOpen} onClose={toggleMenu} />
          </nav>
        </header>

        {/* Main Content */}
        <main className="sections" data-frz-id="5t2kfugyg84" style={{ overflow: 'hidden' }}>
          {/* Hero */}
          <section style={{ paddingTop: '7rem', paddingBottom: '6rem', position: 'relative' }}>
            <div className="container" data-frz-id="fyqav5ejkjf" style={{ position: 'relative' }}>
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: '-4rem',
                  left: '-1rem',
                  fontSize: '22rem',
                  fontWeight: 700,
                  color: 'rgba(0,0,0,0.06)',
                  letterSpacing: '-0.05em',
                  lineHeight: 0.85,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  textTransform: 'uppercase'
                }}
              >
                About
              </div>
              <div style={{ position: 'relative', maxWidth: '1100px', display: 'grid', gap: '0.5rem' }}>
                {heroCopy.map((line) => (
                  <h1 key={line} className="heading-large" style={{ fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0 }}>
                    {line}
                  </h1>
                ))}
              </div>
            </div>
          </section>

          {/* Full width hero image */}
          <section style={{ paddingBottom: '5rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <figure style={{ margin: 0 }}>
                <img
                  src={galleryMain.src}
                  alt={galleryMain.caption}
                  className="thumbnail"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }}
                />
                <figcaption className="text-small" style={{ marginTop: '0.75rem', opacity: 0.7 }}>
                  {galleryMain.caption}
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Our way + quote */}
          <section style={{ paddingBottom: '6rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '4rem', alignItems: 'start' }}>
                <div>
                  <div
                    className="tag"
                    data-frz-id="hjeo6m11y68"
                    style={{ cursor: 'default', display: 'inline-block' }}
                  >
                    <div className="text-small" data-frz-id="iya95neoluf">
                      Our way
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-regular" style={{ fontSize: '1.3rem', lineHeight: '1.6', fontWeight: 400, maxWidth: '840px' }}>
                    "The merger of architecture and structural engineering has been Meraki's hallmark for decades. From the glass and steel facade of Aurora Tower, completed in 1994 as a pioneering modernist office building in São Paulo; to the record-breaking skyscrapers, Skyspire and Orion Center, which redefined the Dubai skyline in the 2000s; to the cantilevered trusses of Pacific Gateway Terminal, opening a landmark arrival point for the new millennium; and the engineering of Zenith Spire, which stands among the world's tallest buildings, Meraki continues to innovate."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Double image row */}
          <section style={{ paddingBottom: '6rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {galleryPair.map((src, idx) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Meraki gallery ${idx + 1}`}
                    className="thumbnail"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '10px' }}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Principles */}
          <section style={{ paddingBottom: '6rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <div style={{ maxWidth: '740px', margin: '0 auto', display: 'grid', gap: '3rem' }}>
                {principles.map((item) => (
                  <div key={item.title}>
                    <h3 className="heading-small" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                      {item.title}
                    </h3>
                    <p className="text-regular" style={{ lineHeight: 1.7, color: 'rgba(0,0,0,0.75)' }}>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Awards */}
          <section style={{ paddingBottom: '8rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <h2 className="heading-large" style={{ fontSize: '7rem', lineHeight: 1, fontWeight: 400, marginBottom: '3rem' }}>
                Awards
              </h2>
              <div style={{ borderTop: '1px solid #e5e5e5' }}>
                {awards.map((award) => (
                  <div
                    key={award.name}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '2fr 1fr 0.4fr',
                      alignItems: 'center',
                      padding: '1.25rem 0',
                      borderBottom: '1px solid #f0f0f0',
                      gap: '1.5rem'
                    }}
                  >
                    <div style={{ fontSize: '1.05rem' }}>{award.name}</div>
                    <div>
                      <span
                        className="tag"
                        style={{
                          padding: '0.35rem 0.9rem',
                          borderRadius: '999px',
                          borderColor: '#dcdcdc',
                          backgroundColor: '#f8f8f8'
                        }}
                      >
                        <span className="text-small" style={{ fontSize: '0.85rem' }}>
                          {award.project}
                        </span>
                      </span>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: '1.05rem', opacity: 0.7 }}>{award.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
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

export default AboutPage;
