import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Component_1 from '@/components/meraki/Component_1';
import Component_2 from '@/components/meraki/Component_2';
import Component_8 from '@/components/meraki/Component_8';
import Component_9 from '@/components/meraki/Component_9';
import Component_10 from '@/components/meraki/Component_10';

const practices = [
  {
    id: 'architecture',
    title: 'Architecture',
    description:
      'Buildings and structures, considering form, function, materials, sustainability, context, regulations, and user experience. Aesthetics, structural logic, and environmental performance.',
    image: 'https://images.unsplash.com/photo-1505693415763-3ed5e04ba4cd?auto=format&fit=crop&w=2000&q=80',
    marqueeText: 'ARCHITECTURE'
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    description:
      'Layouts, materials, lighting, furniture, color schemes, acoustics, and user experience, creating spaces that are both practical and visually engaging.',
    image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=2000&q=80',
    marqueeText: 'INTERIOR DESIGN'
  },
  {
    id: 'urban-planning',
    title: 'Urban Planning',
    description:
      'Land use, transportation, infrastructure, zoning, public spaces, and environmental sustainability. Creating vibrant, livable communities that balance growth with quality of life.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80',
    marqueeText: 'URBAN PLANNING'
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    description:
      'Energy efficiency, renewable materials, water conservation, and ecosystem integration. Designing for carbon neutrality and long-term environmental stewardship.',
    image: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=2000&q=80',
    marqueeText: 'SUSTAINABILITY'
  }
];

function PracticesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Match homepage behavior so menu/marquee scripts run.
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
        <main className="sections" data-frz-id="5t2kfugyg84">
          {/* Page Title */}
          <section style={{ paddingTop: '8rem', paddingBottom: '2rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <h1 className="heading-large" style={{ fontSize: '8rem', lineHeight: '1', fontWeight: '400' }}>
                Practices
              </h1>
            </div>
          </section>

          {/* Subtitle */}
          <section style={{ paddingBottom: '5rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <div
                style={{
                  backgroundColor: '#1a1a1a',
                  color: 'white',
                  padding: '1rem 1.25rem',
                  display: 'inline-block',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.06)'
                }}
              >
                <div className="text-regular" style={{ fontSize: '1.1rem', lineHeight: 1.4 }}>
                  Whatever you can imagine<br />our teams can build it.
                </div>
              </div>
            </div>
          </section>

          {/* Practices Sections with Marquee */}
          {practices.map((practice) => (
            <div key={practice.id}>
              {/* Horizontal Marquee */}
              <div className="hero__horizontal-marquee" data-frz-id="jhry8jmdfot" style={{ marginBottom: '4rem' }}>
                <div className="marquee" data-frz-id="ivgn7393f0h">
                  <div className="marquee__track practices-marquee-track" data-frz-id="n0ss7srzjr">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="marquee__item" data-frz-id="hn9xo4x0lr8">
                        <div className="text-tiny for--marquee" data-frz-id="80epjz519ka">
                          {practice.marqueeText}
                        </div>
                        <div className="text-tiny for--marquee" data-frz-id="zcm25vqgxa">
                          *
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Practice Content - Left Text, Right Image */}
              <section style={{ paddingBottom: '7rem' }}>
                <div className="container" data-frz-id="fyqav5ejkjf">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }}>
                    {/* Left: Text Content */}
                    <div>
                      <h2 className="heading-large" style={{ fontSize: '3.2rem', marginBottom: '1.75rem' }}>
                        {practice.title}
                      </h2>
                      <p className="text-regular" style={{ marginBottom: '2rem', lineHeight: '1.6', maxWidth: '520px' }}>
                        {practice.description}
                      </p>
                      <a
                        href="#"
                        className="text-small"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          textDecoration: 'none',
                          color: '#1a1a1a',
                          fontWeight: '500',
                          border: '1px solid rgba(0,0,0,0.1)',
                          padding: '0.6rem 0.9rem',
                          borderRadius: '999px',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.05)'
                        }}
                      >
                        READ MORE <span style={{ fontSize: '1.2em' }}>○</span>
                      </a>
                    </div>

                    {/* Right: Large Image */}
                    <div>
                      <img
                        src={practice.image}
                        alt={practice.title}
                        style={{
                          width: '100%',
                          height: '520px',
                          display: 'block',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}

          <div className="spacer-huge" data-frz-id="y051foj673k"></div>
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
                <Link to="/" className="footer__link w-inline-block" data-frz-id="uslptllt0t7">
                  <div className="text-regular" data-frz-id="lwb2v4u1or">
                    Privacy Policy
                  </div>
                </Link>
              </div>
            </div>
            <Component_10 />
          </div>
        </footer>
      </div>
    </>
  );
}

export default PracticesPage;
