import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <>
      <div className="global" data-frz-id="1fxt3fsq4rph">
        <div className="global__styles w-embed" data-frz-id="gctamvvbyv"></div>
      </div>

      <div className="page-wrapper" data-frz-id="rfaxcmraenn">
        {/* Header */}
        <header className="header" data-frz-id="30co36fmymi">
          <nav className="nav" data-frz-id="0j6o0dk5he5t">
            <div className="nav__head" data-frz-id="2akuwwlrfst">
              <Link to="/" className="nav__brand w-inline-block w--current" data-frz-id="2pi1pyi66y6">
                <img
                  alt="Meraki"
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/68adf375e35ad16c2f64d0bf/68b0cca67ccef24d34d15214_Meraki.svg"
                  className="nav__brand-img"
                  data-frz-id="spvzfc2dr5"
                />
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="sections" data-frz-id="5t2kfugyg84">
          {/* Hero Section - Our Way Tag + Quote */}
          <section style={{ paddingTop: '8rem', paddingBottom: '6rem', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>
                {/* Left: "Our way" tag */}
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

                {/* Right: Large Quote Text */}
                <div>
                  <p className="text-regular" style={{ fontSize: '1.5rem', lineHeight: '1.6', fontWeight: '400' }}>
                    "The merger of architecture and structural engineering has been Meraki's hallmark for decades. From the glass and steel facade of Aurora Tower, completed in 1994 as a pioneering modernist office building in São Paulo; to the record-breaking skyscrapers, Skyspire and Orion Center, which redefined the Dubai skyline in the 2000s; to the cantilevered trusses of Pacific Gateway Terminal, opening a landmark arrival point for the new millennium; and the engineering of Zenith Spire, which stands among the world's tallest buildings, Meraki continues to innovate."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Image Gallery Section */}
          <section style={{ paddingBottom: '6rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <img
                  src="https://cdn.prod.website-files.com/68aef5f81395ce7c0c491df2/68b08872d1131205205542c0_thumb-46-hudson.avif"
                  alt="Meraki Project 1"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <img
                  src="https://cdn.prod.website-files.com/68aef5f81395ce7c0c491df2/68b0887396e23c5fa4c9f9c7_thumb-lukiye.avif"
                  alt="Meraki Project 2"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </section>

          {/* Additional Story Section */}
          <section style={{ paddingBottom: '6rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
                <div>
                  <h2 className="heading-large" style={{ fontSize: '4rem' }}>
                    Our Philosophy
                  </h2>
                </div>
                <div>
                  <p className="text-regular" style={{ fontSize: '1.25rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                    Meraki is more than an architecture firm—it's a philosophy. The word itself comes from Greek, meaning to do something with soul, creativity, and love. This principle guides everything we create.
                  </p>
                  <p className="text-regular" style={{ fontSize: '1.25rem', lineHeight: '1.7' }}>
                    We believe architecture should be timeless, sustainable, and deeply connected to its context. Every project is an opportunity to shape not just spaces, but the experiences and communities that inhabit them.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Image Gallery Section 2 */}
          <section style={{ paddingBottom: '6rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <img
                  src="https://cdn.prod.website-files.com/68aef5f81395ce7c0c491df2/68b08873a4e6e10ba30e8d96_thumb-aon-florest.avif"
                  alt="Meraki Project 3"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <img
                  src="https://cdn.prod.website-files.com/68aef5f81395ce7c0c491df2/68b088735d5e8b2d41b17937_thumb-lee-tompson.avif"
                  alt="Meraki Project 4"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </section>

          <div className="spacer-huge" data-frz-id="y051foj673k"></div>
        </main>

        {/* Footer */}
        <footer className="footer" data-frz-id="29nly197lor">
          <div className="footer__content" data-frz-id="idpibdbmy0o">
            <div className="footer__legal" data-frz-id="m1bhk2hah0p">
              <div className="text-regular" data-frz-id="zjq8towveth">
                ©2025 Meraki Architects
              </div>
              <div className="footer__legal-links" data-frz-id="lyghfjre3h">
                <Link to="/" className="footer__link w-inline-block" data-frz-id="uslptllt0t7">
                  <div className="text-regular" data-frz-id="lwb2v4u1or">
                    Back to Home
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default AboutPage;
