import { Link } from 'react-router-dom';
import { useState } from 'react';

// 话题分类
const topics = ['Events', 'Inside', 'Insights', 'News', 'Thinking'];

// 文章数据（注意：imageShape 控制图片形状）
const articles = [
  {
    id: 'adaptive-reuse',
    title: 'The science and art of adaptive reuse',
    topic: 'Insights',
    image: 'https://cdn.prod.website-files.com/68aef5f81395ce7c0c491df2/68aef62c09dd19a4766ad7d6_post-adaptive-reuse-thumb.avif',
    imageShape: 'square' // 方形
  },
  {
    id: 'public-spaces',
    title: 'Designing public spaces for connection and collaboration',
    topic: 'Thinking',
    image: 'https://cdn.prod.website-files.com/68aef5f81395ce7c0c491df2/68aef62c3c3e4e076c0c8c5a_post-creative-workshop-thumb.avif',
    imageShape: 'circle' // 圆形
  },
  {
    id: 'luxury-design',
    title: 'True luxury is meticulous detail, simplicity in design and elegance in execution.',
    topic: 'Insights',
    image: 'https://cdn.prod.website-files.com/68aef5f81395ce7c0c491df2/68aef62c09dd19a4766ad7d6_post-adaptive-reuse-thumb.avif',
    imageShape: 'square' // 方形
  },
  {
    id: 'jordan-belk',
    title: 'Partner Jordan Belk to deliver keynote at New York University',
    topic: 'Events',
    image: 'https://cdn.prod.website-files.com/68aef5f81395ce7c0c491df2/68aef62c3c3e4e076c0c8c5a_post-creative-workshop-thumb.avif',
    imageShape: 'circle' // 圆形
  },
  {
    id: 'zuriluki-project',
    title: 'Construction begins on Zuriluki Upper West project in New York',
    topic: 'Inside',
    image: 'https://cdn.prod.website-files.com/68aef5f81395ce7c0c491df2/68aef62c09dd19a4766ad7d6_post-adaptive-reuse-thumb.avif',
    imageShape: 'circle' // 圆形
  },
  {
    id: 'fosetsik-museum',
    title: 'Meraki designs the new gallery at Fosetsik Museum',
    topic: 'Inside',
    image: 'https://cdn.prod.website-files.com/68aef5f81395ce7c0c491df2/68aef62c3c3e4e076c0c8c5a_post-creative-workshop-thumb.avif',
    imageShape: 'circle' // 圆形
  },
  {
    id: 'onsite-architect',
    title: 'Construction and the on-site architect',
    topic: 'Thinking',
    image: 'https://cdn.prod.website-files.com/68aef5f81395ce7c0c491df2/68aef62c09dd19a4766ad7d6_post-adaptive-reuse-thumb.avif',
    imageShape: 'circle' // 圆形
  },
  {
    id: 'creative-workshop',
    title: 'A creative workshop exploring the connection between art and architecture',
    topic: 'Events',
    image: 'https://cdn.prod.website-files.com/68aef5f81395ce7c0c491df2/68aef62c3c3e4e076c0c8c5a_post-creative-workshop-thumb.avif',
    imageShape: 'square' // 方形
  }
];

function JournalPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const filteredArticles = selectedTopic
    ? articles.filter(a => a.topic === selectedTopic)
    : articles;

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
                      backgroundColor: selectedTopic === topic ? '#1a1a1a' : 'white',
                      color: selectedTopic === topic ? 'white' : '#1a1a1a',
                      transition: 'all 0.3s ease'
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
                          >
                            <div
                              className="tag"
                              data-frz-id="hjeo6m11y68"
                              style={{ cursor: 'pointer' }}
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

export default JournalPage;
