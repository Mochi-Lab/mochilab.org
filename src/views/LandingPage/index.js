import { useEffect, useRef, useState } from 'react';
import Navbar from 'components/Navbar';
import Introductions from 'components/Introductions';
import MochiTeam from 'components/MochiTeam';
import Achievements from 'components/Achievements';
import Projects from 'components/Projects';
import Footer from 'components/Footer';
import canvasDotAmination from 'utils/canvasBackground';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import './style.css';

export default function LandingPage() {
  const sections = useRef([]);

  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    canvasDotAmination(document);
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  const executeScroll = (strSection) => {
    if (!strSection) return;
    sections.current[strSection].scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className='landing-page' id='landing-page'>
        <canvas id='bg-landing-page' className='bg-landing-page'></canvas>
        <div className='oval-top'></div>
        <div ref={(el) => (sections.current['Top'] = el)}>
          <Navbar executeScroll={executeScroll} sections={sections} />
        </div>
        <Introductions />
        <div ref={(el) => (sections.current['Team'] = el)}>
          <MochiTeam />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Achievements />
        </div>

        <Footer />
        <div
          className={`btn-back-top ${showScrollTop ? 'is-visible' : ''}`}
          onClick={() => executeScroll('Top')}
        >
          <div className='btn-back-top-content'>
            <VerticalAlignTopOutlined />
          </div>
        </div>
      </div>
    </>
  );
}
