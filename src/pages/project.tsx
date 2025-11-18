import { useParams, Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import Component_1 from '@/components/meraki/Component_1';
import Component_2 from '@/components/meraki/Component_2';
import Component_8 from '@/components/meraki/Component_8';
import Component_9 from '@/components/meraki/Component_9';
import Component_10 from '@/components/meraki/Component_10';
import { projects } from '@/data/projects';
import NotFound from './404';

function ProjectPage() {
  const { id } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const project = useMemo(() => projects.find((p) => p.id === id), [id]);

  useEffect(() => {
    // Run deferred scripts so the menu + marquee animations still work here.
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

  if (!project) {
    return <NotFound />;
  }

  const heroImage = project.gallery[0] || project.image;
  const secondaryImages = project.gallery.slice(1);

  // Get 2 related projects (excluding current project)
  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2);

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
          {/* Hero Section with Image and Title */}
          <section className="hero" data-frz-id="l0sg4kmrbu" style={{ position: 'relative' }}>
            <img
              alt={project.title}
              loading="lazy"
              src={heroImage}
              className="hero__img"
              data-frz-id="94hyknhv6bu"
            />

            {/* Project Title Overlay */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              zIndex: 10
            }}>
              <h1 className="heading-large" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                {project.title}
              </h1>
            </div>

            {/* Bottom Horizontal Marquee */}
            <div className="hero__horizontal-marquee" data-frz-id="jhry8jmdfot">
              <div className="marquee" data-frz-id="ivgn7393f0h">
                <div
                  data-marquee="horizontal"
                  className="marquee__track"
                  data-frz-id="n0ss7srzjr"
                >
                  <div className="marquee__item" data-frz-id="hn9xo4x0lr8">
                    <div className="text-tiny for--marquee" data-frz-id="80epjz519ka">
                      A landmark celebrating Norwegian culture, heritage, and community
                    </div>
                    <div className="text-tiny for--marquee" data-frz-id="zcm25vqgxa">
                      *
                    </div>
                    <div className="text-tiny for--marquee" data-frz-id="dpbyn81ko7a">
                      A landmark celebrating Norwegian culture, heritage, and community
                    </div>
                    <div className="text-tiny for--marquee" data-frz-id="5zqbvmpeo3q">
                      *
                    </div>
                  </div>
                  <div className="marquee__item" data-frz-id="w5m5gf4lx88">
                    <div className="text-tiny for--marquee" data-frz-id="bdj1cdskoro">
                      A landmark celebrating Norwegian culture, heritage, and community
                    </div>
                    <div className="text-tiny for--marquee" data-frz-id="wumfqwija2">
                      *
                    </div>
                    <div className="text-tiny for--marquee" data-frz-id="9cdshvxo5n9">
                      A landmark celebrating Norwegian culture, heritage, and community
                    </div>
                    <div className="text-tiny for--marquee" data-frz-id="4o4xogbpu9">
                      *
                    </div>
                  </div>
                  <div className="marquee__item" data-frz-id="657bso9pslq">
                    <div className="text-tiny for--marquee" data-frz-id="85ak5lc2h47">
                      A landmark celebrating Norwegian culture, heritage, and community
                    </div>
                    <div className="text-tiny for--marquee" data-frz-id="4np2d75k9vu">
                      *
                    </div>
                    <div className="text-tiny for--marquee" data-frz-id="lx22387qdkm">
                      A landmark celebrating Norwegian culture, heritage, and community
                    </div>
                    <div className="text-tiny for--marquee" data-frz-id="pkty0n1vu7">
                      *
                    </div>
                  </div>
                  <div className="marquee__item" data-frz-id="7uv9hw50xhx">
                    <div className="text-tiny for--marquee" data-frz-id="at70npzurho">
                      A landmark celebrating Norwegian culture, heritage, and community
                    </div>
                    <div className="text-tiny for--marquee" data-frz-id="s5svudgpy9q">
                      *
                    </div>
                    <div className="text-tiny for--marquee" data-frz-id="p3v891ecimr">
                      A landmark celebrating Norwegian culture, heritage, and community
                    </div>
                    <div className="text-tiny for--marquee" data-frz-id="2brpbxfn0q">
                      *
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="spacer-huge" data-frz-id="wgndpta4no"></div>

          {/* Project Info Grid Section */}
          <section style={{ paddingBottom: '4rem' }}>
            <div style={{
              maxWidth: '1440px',
              margin: '0 auto',
              padding: '0 40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '4rem',
            }}>
              <div>
                <h3 className="heading-tiny" style={{ marginBottom: '1rem' }}>
                  Sectors
                </h3>
                <p className="text-regular">
                  {project.category}
                </p>
              </div>

              {project.location && (
                <div>
                  <h3 className="heading-tiny" style={{ marginBottom: '1rem' }}>
                    Location
                  </h3>
                  <p className="text-regular">
                    {project.location}
                  </p>
                </div>
              )}

              {project.client && (
                <div>
                  <h3 className="heading-tiny" style={{ marginBottom: '1rem' }}>
                    Client
                  </h3>
                  <p className="text-regular">
                    {project.client}
                  </p>
                </div>
              )}

              <div>
                <h3 className="heading-tiny" style={{ marginBottom: '1rem' }}>
                  Status
                </h3>
                <p className="text-regular">
                  {project.status}
                </p>
              </div>
            </div>
          </section>

          {/* Practices Section */}
          {project.practices && project.practices.length > 0 && (
            <section style={{ paddingBottom: '4rem' }}>
              <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
                padding: '0 40px',
              }}>
                <h3 className="heading-tiny" style={{ marginBottom: '1.5rem' }}>
                  Practices
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.practices.map((practice) => (
                    <p key={practice} className="text-regular" style={{ color: 'rgba(26, 26, 26, 0.6)' }}>
                      {practice}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          <div className="spacer-huge" data-frz-id="348npvsea8q"></div>

          {/* Long Description Section */}
          {project.longDescription && (
            <section style={{ paddingBottom: '4rem' }}>
              <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
                padding: '0 40px',
              }}>
                <p className="text-large" style={{
                  maxWidth: '900px',
                  lineHeight: '1.6'
                }}>
                  {project.longDescription}
                </p>
              </div>
            </section>
          )}

          {/* Additional Text Sections */}
          {project.additionalText && project.additionalText.length > 0 && (
            <section style={{ paddingBottom: '4rem' }}>
              <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
                padding: '0 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}>
                {project.additionalText.map((text, idx) => (
                  <p key={idx} className="text-regular" style={{
                    maxWidth: '900px',
                    lineHeight: '1.8',
                    color: 'rgba(26, 26, 26, 0.8)'
                  }}>
                    {text}
                  </p>
                ))}
              </div>
            </section>
          )}

          <div className="spacer-huge" data-frz-id="7tfjukdmta"></div>

          {/* Gallery Images Section */}
          {secondaryImages.length > 0 && (
            <section style={{ paddingBottom: '6rem' }}>
              <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
                padding: '0 40px',
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem'
                }}>
                  {secondaryImages.map((src, idx) => (
                    <div key={src + idx} className="projects__img w-inline-block" data-frz-id="mq4qy58jls">
                      <img
                        loading="lazy"
                        src={src}
                        alt={`${project.title} view ${idx + 2}`}
                        className="thumbnail"
                        data-frz-id="s2r2sw469al"
                        style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <div className="spacer-huge" data-frz-id="1sx0r2s5k2b"></div>

          {/* Related Projects Section */}
          {relatedProjects.length > 0 && (
            <section style={{ paddingBottom: '6rem' }}>
              <div style={{
                maxWidth: '1440px',
                margin: '0 auto',
                padding: '0 40px',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '3rem'
                }}>
                  <h2 className="heading-large" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#1a1a1a',
                      borderRadius: '50%',
                      display: 'inline-block'
                    }}></span>
                    Related projects
                  </h2>
                  <Link
                    to="/projects"
                    className="text-small"
                    style={{
                      textDecoration: 'none',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    ALL PROJECTS
                    <span>○</span>
                  </Link>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '2rem'
                }}>
                  {relatedProjects.map((relProject) => (
                    <Link
                      key={relProject.id}
                      to={`/project/${relProject.id}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <div className="projects__img w-inline-block" data-frz-id="mq4qy58jls" style={{ position: 'relative' }}>
                        <img
                          loading="lazy"
                          src={relProject.image}
                          alt={relProject.title}
                          className="thumbnail"
                          data-frz-id="s2r2sw469al"
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />

                        {/* Tags overlay on image */}
                        <div style={{
                          position: 'absolute',
                          bottom: '20px',
                          left: '20px',
                          display: 'flex',
                          gap: '0.5rem'
                        }}>
                          <div className="tag" data-frz-id="hjeo6m11y68" style={{ backgroundColor: 'white', border: '1px solid #1a1a1a' }}>
                            <div className="text-small" data-frz-id="iya95neoluf">
                              {relProject.category}
                            </div>
                          </div>
                          <div className="tag square" data-frz-id="ibhulzpz56" style={{ backgroundColor: 'white', border: '1px solid #1a1a1a' }}>
                            <div className="text-small" data-frz-id="582o5100tm">
                              {relProject.status}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div style={{ marginTop: '1.5rem' }}>
                        <h3 className="heading-small" style={{ marginBottom: '0.5rem' }}>
                          {relProject.title}
                        </h3>
                        <p className="text-regular" style={{ color: 'rgba(26, 26, 26, 0.6)' }}>
                          {relProject.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

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

export default ProjectPage;
