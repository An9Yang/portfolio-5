import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Component_1 from '@/components/meraki/Component_1';
import Component_2 from '@/components/meraki/Component_2';
import Component_8 from '@/components/meraki/Component_8';
import Component_9 from '@/components/meraki/Component_9';
import Component_10 from '@/components/meraki/Component_10';

const topics = ['Events', 'Inside', 'Insights', 'News', 'Thinking'];

const articles = [
  {
    id: 'adaptive-reuse',
    title: 'The science and art of adaptive reuse',
    topic: 'Insights',
    image: 'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&w=1600&q=80',
    imageShape: 'square'
  },
  {
    id: 'public-spaces',
    title: 'Designing public spaces for connection and collaboration',
    topic: 'Thinking',
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80',
    imageShape: 'circle'
  },
  {
    id: 'luxury-design',
    title: 'True luxury is meticulous detail, simplicity in design and elegance in execution.',
    topic: 'Insights',
    image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1600&q=80',
    imageShape: 'square'
  },
  {
    id: 'jordan-belk',
    title: 'Partner Jordan Belk to deliver keynote at New York University',
    topic: 'Events',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    imageShape: 'circle'
  },
  {
    id: 'zuriluki-project',
    title: 'Construction begins on Zuriluki Upper West project in New York',
    topic: 'Inside',
    image: 'https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1600&q=80',
    imageShape: 'square'
  },
  {
    id: 'fosetsik-museum',
    title: 'Meraki designs the new gallery at Fosetsik Museum',
    topic: 'Inside',
    image: 'https://images.unsplash.com/photo-1529429617124-aee5f4ae7890?auto=format&fit=crop&w=1600&q=80',
    imageShape: 'circle'
  },
  {
    id: 'onsite-architect',
    title: 'Construction and the on-site architect',
    topic: 'Thinking',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80',
    imageShape: 'circle'
  },
  {
    id: 'creative-workshop',
    title: 'A creative workshop exploring the connection between art and architecture',
    topic: 'Events',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    imageShape: 'square'
  }
];

function JournalPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const filteredArticles = selectedTopic
    ? articles.filter(a => a.topic === selectedTopic)
    : articles;

  useEffect(() => {
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

  return (
    <>
      <div className="global" data-frz-id="1fxt3fsq4rph">
        <div className="global__styles w-embed" data-frz-id="gctamvvbyv"></div>
      </div>

      <div className="page-wrapper" data-frz-id="rfaxcmraenn">
        {/* Header */}
        <header className="header" data-frz-id="30co36fmymi">
          <nav className="nav" data-frz-id="0j6o0dk5he5t">
            <Component_1 onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} />
            <Component_2 isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          </nav>
        </header>

        {/* Main Content */}
        <main className="sections" data-frz-id="5t2kfugyg84">
          {/* Page Title */}
          <section style={{ paddingTop: '8rem', paddingBottom: '3rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <h1 className="heading-large" style={{ fontSize: '8rem', lineHeight: '1', fontWeight: '400' }}>
                Journal
              </h1>
            </div>
          </section>

          {/* Filter Tags */}
          <section style={{ paddingBottom: '4rem' }}>
            <div className="container" data-frz-id="fyqav5ejkjf">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                    className="tag"
                    data-frz-id="hjeo6m11y68"
                    style={{
                      cursor: 'pointer',
                      backgroundColor: selectedTopic === topic ? '#1a1a1a' : '#fff',
                      color: selectedTopic === topic ? '#fff' : '#1a1a1a',
                      borderColor: '#dcdcdc',
                      transition: 'all 0.3s ease',
                      boxShadow: selectedTopic === topic ? '0 8px 24px rgba(0,0,0,0.12)' : 'none'
                    }}
                  >
                    <div className="text-small" data-frz-id="iya95neoluf">
                      {topic}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Journal Grid */}
          <section className="journal" data-frz-id="pzzx6e3wfbr">
            <div className="container" data-frz-id="qpieh4qqcu">
              <div className="journal__content w-dyn-list" data-frz-id="sbtylajtcyp">
                <div
                  role="list"
                  className="journal__list w-dyn-items"
                  data-frz-id="ruqevq0hhr8"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '3rem'
                  }}
                >
                  {filteredArticles.map((article) => (
                    <div
                      key={article.id}
                      role="listitem"
                      className="journal__item w-dyn-item"
                      data-frz-id="7qpihm83vqf"
                    >
                      <Link
                        to={`/post/${article.id}`}
                        className="journal__img w-inline-block"
                        data-frz-id="vo8ttevbw5"
                      >
                        <img
                          loading="lazy"
                          alt={article.title}
                          src={article.image}
                          className="thumbnail"
                          data-frz-id="qxwksj3e5p"
                          style={{
                            width: '100%',
                            aspectRatio: '1',
                            objectFit: 'cover',
                            borderRadius: article.imageShape === 'circle' ? '50%' : '0'
                          }}
                        />
                      </Link>

                      <div className="journal__info" data-frz-id="nya9g006oa" style={{ marginTop: '1.5rem' }}>
                        <div className="journal__topic-wrapper" data-frz-id="9fx5mg57h18" style={{ marginBottom: '1rem' }}>
                          <Link
                            to={`/topic/${article.topic.toLowerCase()}`}
                            className="journal__topic w-inline-block"
                            data-frz-id="qf6r8yfhio"
                            style={{ textDecoration: 'none', border: 'none', boxShadow: 'none', display: 'inline-block' }}
                          >
                            <div
                              style={{
                                cursor: 'pointer',
                                backgroundColor: '#fff',
                                border: '1px solid #1a1a1a',
                                borderRadius: '999px',
                                padding: '0.35rem 0.9rem',
                                lineHeight: 1,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.25rem',
                                boxShadow: 'none'
                              }}
                            >
                              <div className="text-small" data-frz-id="dqq0k3l5lm">
                                {article.topic}
                              </div>
                            </div>
                          </Link>
                        </div>

                        <Link
                          to={`/post/${article.id}`}
                          className="journal__link w-inline-block"
                          data-frz-id="qbxqeqt56yl"
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          <h3 className="heading-small" data-frz-id="s5wcuxp1xd" style={{ fontSize: '1.5rem', lineHeight: '1.3' }}>
                            {article.title}
                          </h3>
                        </Link>
                      </div>
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

export default JournalPage;
