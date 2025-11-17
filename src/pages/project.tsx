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
          <section style={{ paddingTop: '8rem', paddingBottom: '3rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
                <div>
                  <h1 className="heading-large" data-frz-id="zw8yisqkjbm">
                    {project.title}
                  </h1>
                  <div className="text-regular" style={{ marginTop: '1rem', maxWidth: '520px' }}>
                    {project.description}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div className="tag" data-frz-id="hjeo6m11y68">
                    <div className="text-small" data-frz-id="iya95neoluf">
                      {project.category}
                    </div>
                  </div>
                  <div className="tag square" data-frz-id="ibhulzpz56">
                    <div className="text-small" data-frz-id="582o5100tm">
                      {project.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={{ paddingBottom: '4rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <div className="projects__img w-inline-block" data-frz-id="mq4qy58jls">
                <img
                  loading="lazy"
                  src={heroImage}
                  alt={project.title}
                  className="thumbnail"
                  data-frz-id="s2r2sw469al"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </section>

          {secondaryImages.length > 0 && (
            <section style={{ paddingBottom: '6rem' }}>
              <div className="container" data-frz-id="fyqav5ejkjf">
                <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
                  {secondaryImages.map((src, idx) => (
                    <div key={src + idx} className="projects__img w-inline-block" data-frz-id="mq4qy58jls">
                      <img
                        loading="lazy"
                        src={src}
                        alt={`${project.title} view ${idx + 2}`}
                        className="thumbnail"
                        data-frz-id="s2r2sw469al"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section style={{ paddingBottom: '4rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <Link to="/projects" className="text-small" style={{ textDecoration: 'none', fontWeight: 600 }}>
                ← Back to all projects
              </Link>
            </div>
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

export default ProjectPage;
