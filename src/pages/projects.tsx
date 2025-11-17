import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Component_1 from '@/components/meraki/Component_1';
import Component_2 from '@/components/meraki/Component_2';
import Component_8 from '@/components/meraki/Component_8';
import Component_9 from '@/components/meraki/Component_9';
import Component_10 from '@/components/meraki/Component_10';
import { projectCategories as categories, projects as allProjects } from '@/data/projects';

function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    // Execute delayed scripts after React has rendered (needed for menu + marquee effects)
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

  const filteredProjects = selectedCategory
    ? allProjects.filter(p => p.category === selectedCategory)
    : allProjects;

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
          <section style={{ paddingTop: '8rem', paddingBottom: '3rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <h1 className="heading-large" data-frz-id="zw8yisqkjbm">
                Projects
              </h1>
            </div>
          </section>

          {/* Filter Tags */}
          <section style={{ paddingBottom: '4rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                    className="tag"
                    data-frz-id="hjeo6m11y68"
                    style={{
                      cursor: 'pointer',
                      backgroundColor: selectedCategory === cat ? '#1a1a1a' : 'white',
                      color: selectedCategory === cat ? 'white' : '#1a1a1a',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div className="text-small" data-frz-id="iya95neoluf">
                      {cat}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Grid - 2 columns */}
          <section className="projects" data-frz-id="2c7p43ceg7">
            <div className="container" data-frz-id="m7ghwu9q3zm">
              <div className="projects__content w-dyn-list" data-frz-id="7rezfpoga7e">
                <div role="list" className="projects__list w-dyn-items" data-frz-id="95bmhkj0kt">
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      role="listitem"
                      className="projects__item w-dyn-item"
                      data-frz-id="opnz7x7relf"
                    >
                      <Link
                        to={`/project/${project.id}`}
                        className="projects__img w-inline-block"
                        data-frz-id="mq4qy58jls"
                      >
                        <img
                          loading="lazy"
                          src={project.image}
                          alt={project.title}
                          className="thumbnail"
                          data-frz-id="s2r2sw469al"
                        />
                        <div className="tags" data-frz-id="kxkaw8pi64">
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
                      </Link>

                      <Link
                        to={`/project/${project.id}`}
                        className="projects__label w-inline-block"
                        data-frz-id="e6qnilaqsyi"
                      >
                        <h3 className="heading-small" data-frz-id="5uwc5o7oz2m">
                          {project.title}
                        </h3>
                        <div className="text-regular for--projects-label" data-frz-id="kogj65fi02r">
                          {project.description}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

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

export default ProjectsPage;
