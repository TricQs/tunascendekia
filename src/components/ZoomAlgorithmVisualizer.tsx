import React, { useState, useEffect } from 'react';
import { HOTS_TOPICS } from '../data/content';
import { HotsTopic } from '../types';
import { MedalAwardIcon, CheckIcon } from './Icons';

export const ZoomAlgorithmVisualizer: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<'math' | 'science' | 'tka'>('math');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [handRaised, setHandRaised] = useState<boolean>(false);

  const currentTopic: HotsTopic =
    HOTS_TOPICS.find((t) => t.id === activeTopicId) || HOTS_TOPICS[0];
  const currentStep = currentTopic.steps[currentStepIndex] || currentTopic.steps[0];

  // Continuous Brilliant.org-style step animation loop
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isPlaying || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setCurrentStepIndex((prev) => (prev + 1) % currentTopic.steps.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [isPlaying, activeTopicId, currentTopic.steps.length]);

  const handleTopicChange = (topicId: 'math' | 'science' | 'tka') => {
    setActiveTopicId(topicId);
    setCurrentStepIndex(0);
    setIsPlaying(true);
  };

  const handlePrevStep = () => {
    setIsPlaying(false);
    setCurrentStepIndex((prev) =>
      prev === 0 ? currentTopic.steps.length - 1 : prev - 1
    );
  };

  const handleNextStep = () => {
    setIsPlaying(false);
    setCurrentStepIndex((prev) => (prev + 1) % currentTopic.steps.length);
  };

  return (
    <div className="zoom-mockup-card" aria-label="Simulasi Kelas Interaktif Zoom TunasCendekia">
      {/* 1. Zoom Window Top Bar */}
      <div className="zoom-topbar">
        <div className="window-dots" aria-hidden="true">
          <span className="window-dot dot-red" />
          <span className="window-dot dot-amber" />
          <span className="window-dot dot-green" />
        </div>
        <div className="zoom-session-badge">
          <span className="live-pulse" />
          <span>REC • LIVE ZOOM 2 ARAH</span>
        </div>
        <div className="zoom-Capacity-pill">12/15 Siswa Aktif</div>
      </div>

      <div className="zoom-body">
        {/* 2. Realistic Zoom Video Gallery Strip */}
        <div className="zoom-video-gallery" aria-label="Galeri Video Peserta Zoom">
          <div className="zoom-video-tile mentor-cam active-speaker">
            <img
              src="/mentor-zoom.jpg"
              alt="Kak Kevin Ardiansyah mengajar via Zoom"
              className="zoom-cam-img"
              width={320}
              height={180}
              fetchPriority="high"
            />
            <div className="zoom-cam-top-tag">
              <span className="cam-medal-pill">🥇 Mentor OSN</span>
              <span className="voice-wave" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="zoom-cam-label">
              <span className="mic-on-dot" aria-hidden="true" />
              <span>Kak Kevin Ardiansyah, S.Si.</span>
            </div>
          </div>

          <div className="zoom-video-tile student-cam">
            <img
              src="/student-zoom-1.jpg"
              alt="Siswa SMA mengangkat tangan di kelas Zoom"
              className="zoom-cam-img student-crop-1"
              width={200}
              height={150}
            />
            <div className="zoom-cam-top-tag">
              <span className="cam-hand-pill">✋ Tanya Konsep</span>
            </div>
            <div className="zoom-cam-label">
              <span>Rania (SMA Kelas 11)</span>
            </div>
          </div>

          <div className="zoom-video-tile student-cam">
            <img
              src="/student-zoom-2.jpg"
              alt="Siswa SMP mencatat pembahasan soal di Zoom"
              className="zoom-cam-img"
              width={200}
              height={150}
            />
            <div className="zoom-cam-top-tag">
              <span className="cam-participants-pill">+10 Siswa</span>
            </div>
            <div className="zoom-cam-label">
              <span>Dimas (SMP Kelas 8)</span>
            </div>
          </div>
        </div>

        {/* 3. Topic Switcher Tabs */}
        <div className="mockup-tabs" role="tablist" aria-label="Pilih Topik Visualisasi">
          {HOTS_TOPICS.map((topic) => (
            <button
              key={topic.id}
              type="button"
              className={`mockup-tab ${activeTopicId === topic.id ? 'active' : ''}`}
              onClick={() => handleTopicChange(topic.id)}
              role="tab"
              aria-selected={activeTopicId === topic.id}
            >
              {topic.label}
            </button>
          ))}
        </div>

        {/* 4. Brilliant.org-Style Interactive Moving Geometry Whiteboard */}
        <div className="brilliant-board">
          <div className="brilliant-board-top">
            <span className="brilliant-step-caption">{currentStep.title}</span>
            <span className="algo-step-badge">{currentStep.highlightBadge}</span>
          </div>

          {/* Moving SVG Stage (Brilliant.org Style) */}
          <div className="brilliant-stage">
            {activeTopicId === 'math' && (
              <svg
                viewBox="0 0 420 185"
                className="brilliant-svg"
                role="img"
                aria-label="Animasi pembuktian geometri a kuadrat dikurang b kuadrat"
              >
                {/* Top Dimension Calliper Bar: a -> a + b */}
                <g className="caliper-group">
                  <line
                    x1="130"
                    y1="20"
                    x2={currentStepIndex === 3 ? 286 : 244}
                    y2="20"
                    className="caliper-line"
                  />
                  <line x1="130" y1="14" x2="130" y2="26" className="caliper-tick" />
                  <line
                    x1={currentStepIndex === 3 ? 286 : 244}
                    y1="14"
                    x2={currentStepIndex === 3 ? 286 : 244}
                    y2="26"
                    className="caliper-tick"
                  />
                  <text
                    x={currentStepIndex === 3 ? 208 : 187}
                    y="13"
                    textAnchor="middle"
                    className="brilliant-math-var"
                  >
                    {currentStepIndex === 3 ? 'a + b' : 'a'}
                  </text>
                </g>

                {/* Left Vertical Calliper Bar: a -> a - b */}
                <g className="caliper-group">
                  <line
                    x1="112"
                    y1="34"
                    x2="112"
                    y2={currentStepIndex === 0 ? 148 : 106}
                    className="caliper-line"
                  />
                  <line x1="106" y1="34" x2="118" y2="34" className="caliper-tick" />
                  <line
                    x1="106"
                    y1={currentStepIndex === 0 ? 148 : 106}
                    x2="118"
                    y2={currentStepIndex === 0 ? 148 : 106}
                    className="caliper-tick"
                  />
                  <text
                    x="98"
                    y={currentStepIndex === 0 ? 95 : 74}
                    textAnchor="end"
                    className="brilliant-math-var"
                  >
                    {currentStepIndex === 0 ? 'a' : 'a − b'}
                  </text>
                </g>

                {/* Main Top Rectangle: width a (114), height a - b (72) at (130, 34) */}
                <rect
                  x="130"
                  y="34"
                  width="114"
                  height="72"
                  className="geo-shape geo-blue"
                />

                {/* Moving Bottom-Left Strip: originally 72 x 42 at (130, 106).
                    In Step 2 it detaches & rotates -90deg;
                    In Step 3 it docks at (244, 34) with size 42 x 72! */}
                <g
                  className="geo-moving-piece"
                  style={{
                    transform:
                      currentStepIndex <= 1
                        ? 'translate(130px, 106px) rotate(0deg)'
                        : currentStepIndex === 2
                        ? 'translate(256px, 126px) rotate(-90deg)'
                        : 'translate(244px, 106px) rotate(-90deg)',
                  }}
                >
                  <rect
                    x="0"
                    y="0"
                    width="72"
                    height="42"
                    className={`geo-shape ${currentStepIndex >= 2 ? 'geo-blue-accent' : 'geo-blue'}`}
                  />
                </g>

                {/* Dashed Slice Line between Top Rectangle and Bottom Strip */}
                <line
                  x1="130"
                  y1="106"
                  x2="202"
                  y2="106"
                  className={`slice-dashed-line ${currentStepIndex === 1 || currentStepIndex === 2 ? 'visible' : ''}`}
                />

                {/* Corner Square b^2 (42 x 42 at 202, 106):
                    Step 0: Seamless blue part of a^2
                    Step 1: Turns Gold & slides out to show - b^2
                    Step 2 & 3: Fades away */}
                <g
                  className="geo-b2-piece"
                  style={{
                    transform:
                      currentStepIndex === 0
                        ? 'translate(202px, 106px) scale(1)'
                        : currentStepIndex === 1
                        ? 'translate(216px, 118px) scale(1)'
                        : 'translate(236px, 134px) scale(0.6)',
                    opacity: currentStepIndex >= 2 ? 0 : 1,
                  }}
                >
                  <rect
                    x="0"
                    y="0"
                    width="42"
                    height="42"
                    className={`geo-shape ${currentStepIndex === 0 ? 'geo-blue-seamless' : 'geo-gold'}`}
                  />
                  {currentStepIndex === 1 && (
                    <text x="21" y="26" textAnchor="middle" className="brilliant-math-var-sm">
                      b²
                    </text>
                  )}
                </g>

                {/* Outer Border of Complete a x a Square in Step 0 so it looks like 1 solid blue square */}
                <rect
                  x="130"
                  y="34"
                  width="114"
                  height="114"
                  fill="none"
                  stroke="#111827"
                  strokeWidth="2.5"
                  style={{ opacity: currentStepIndex === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}
                />

                {/* Bottom Caliper for b when in Step 1 or Step 3 */}
                {currentStepIndex === 1 && (
                  <g className="caliper-group">
                    <line x1="216" y1="168" x2="258" y2="168" className="caliper-line" />
                    <line x1="216" y1="163" x2="216" y2="173" className="caliper-tick" />
                    <line x1="258" y1="163" x2="258" y2="173" className="caliper-tick" />
                    <text x="237" y="181" textAnchor="middle" className="brilliant-math-var-sm">
                      b
                    </text>
                  </g>
                )}

                {currentStepIndex === 3 && (
                  <g className="caliper-group">
                    <line x1="130" y1="118" x2="244" y2="118" className="caliper-line" />
                    <line x1="130" y1="113" x2="130" y2="123" className="caliper-tick" />
                    <line x1="244" y1="113" x2="244" y2="123" className="caliper-tick" />
                    <text x="187" y="133" textAnchor="middle" className="brilliant-math-var-sm">
                      a
                    </text>

                    <line x1="244" y1="118" x2="286" y2="118" className="caliper-line" />
                    <line x1="286" y1="113" x2="286" y2="123" className="caliper-tick" />
                    <text x="265" y="133" textAnchor="middle" className="brilliant-math-var-sm">
                      b
                    </text>
                  </g>
                )}
              </svg>
            )}

            {activeTopicId === 'science' && (
              <svg
                viewBox="0 0 420 185"
                className="brilliant-svg"
                role="img"
                aria-label="Animasi transformasi segitiga kecepatan menjadi persegi panjang"
              >
                {/* Bottom Width Calliper: w / t */}
                <g className="caliper-group">
                  <line x1="120" y1="146" x2="280" y2="146" className="caliper-line" />
                  <line x1="120" y1="140" x2="120" y2="152" className="caliper-tick" />
                  <line x1="280" y1="140" x2="280" y2="152" className="caliper-tick" />
                  <text x="200" y="164" textAnchor="middle" className="brilliant-math-var">
                    t
                  </text>
                </g>

                {/* Right Vertical Height Calliper: v0 -> 1/2 v0 */}
                <g className="caliper-group">
                  <line
                    x1="296"
                    y1={currentStepIndex === 0 ? 38 : 84}
                    x2="296"
                    y2="130"
                    className="caliper-line"
                  />
                  <line
                    x1="290"
                    y1={currentStepIndex === 0 ? 38 : 84}
                    x2="302"
                    y2={currentStepIndex === 0 ? 38 : 84}
                    className="caliper-tick"
                  />
                  <line x1="290" y1="130" x2="302" y2="130" className="caliper-tick" />
                  <text
                    x="308"
                    y={currentStepIndex === 0 ? 88 : 111}
                    textAnchor="start"
                    className="brilliant-math-var"
                  >
                    {currentStepIndex === 0 ? 'v₀' : '½ v₀'}
                  </text>
                </g>

                {/* Bottom Trapezoid Base of Triangle (from y=84 to y=130, x=120..280) */}
                <polygon
                  points="120,84 200,84 280,130 120,130"
                  className="geo-shape geo-gold"
                />

                {/* Top Triangle Peak (from y=38 to y=84, x=120..200) that rotates 180 deg around (200, 84)! */}
                <g
                  className="geo-moving-piece"
                  style={{
                    transformOrigin: '200px 84px',
                    transform:
                      currentStepIndex <= 1
                        ? 'rotate(0deg)'
                        : currentStepIndex === 2
                        ? 'rotate(115deg)'
                        : 'rotate(180deg)',
                  }}
                >
                  <polygon
                    points="120,38 200,84 120,84"
                    className={`geo-shape ${currentStepIndex >= 2 ? 'geo-gold-bright' : 'geo-gold'}`}
                  />
                </g>

                {/* Horizontal Slice Line at Half Height y=84 */}
                {currentStepIndex >= 1 && currentStepIndex <= 2 && (
                  <line
                    x1="108"
                    y1="84"
                    x2="284"
                    y2="84"
                    className="slice-dashed-line visible"
                  />
                )}
              </svg>
            )}

            {activeTopicId === 'tka' && (
              <svg
                viewBox="0 0 420 185"
                className="brilliant-svg"
                role="img"
                aria-label="Animasi partisi deret geometri pada persegi satuan"
              >
                {/* Outer 1 x 1 Unit Square Frame (136 x 116 at 142, 22) */}
                <rect
                  x="142"
                  y="22"
                  width="136"
                  height="116"
                  fill="#FFFFFF"
                  stroke="#111827"
                  strokeWidth="2.5"
                />

                {/* Block 1: 1/2 (Left Half 68 x 116) */}
                <rect
                  x="142"
                  y="22"
                  width="68"
                  height="116"
                  className="geo-shape geo-blue"
                />
                <text x="176" y="85" textAnchor="middle" className="brilliant-block-label-light">
                  ½
                </text>

                {/* Block 2: 1/4 (Top Right Quarter 68 x 58) */}
                <g
                  className="geo-moving-piece"
                  style={{
                    opacity: currentStepIndex >= 1 ? 1 : 0,
                    transform:
                      currentStepIndex >= 1 ? 'translate(0px, 0px)' : 'translate(24px, -18px)',
                  }}
                >
                  <rect
                    x="210"
                    y="22"
                    width="68"
                    height="58"
                    className="geo-shape geo-gold"
                  />
                  <text x="244" y="56" textAnchor="middle" className="brilliant-block-label-dark">
                    ¼
                  </text>
                </g>

                {/* Block 3: 1/8 (Bottom-Right Left Half 34 x 58) */}
                <g
                  className="geo-moving-piece"
                  style={{
                    opacity: currentStepIndex >= 2 ? 1 : 0,
                    transform:
                      currentStepIndex >= 2 ? 'translate(0px, 0px)' : 'translate(0px, 20px)',
                  }}
                >
                  <rect
                    x="210"
                    y="80"
                    width="34"
                    height="58"
                    className="geo-shape geo-emerald"
                  />
                  <text x="227" y="114" textAnchor="middle" className="brilliant-block-label-light">
                    ⅛
                  </text>
                </g>

                {/* Block 4: 1/16 + ... (Remaining 34 x 58) */}
                <g
                  className="geo-moving-piece"
                  style={{
                    opacity: currentStepIndex >= 2 ? 1 : 0,
                    transform:
                      currentStepIndex >= 2 ? 'translate(0px, 0px)' : 'translate(18px, 18px)',
                  }}
                >
                  <rect
                    x="244"
                    y="80"
                    width="34"
                    height="29"
                    className="geo-shape geo-blue-accent"
                  />
                  <text x="261" y="99" textAnchor="middle" className="brilliant-block-label-light" style={{ fontSize: '10px' }}>
                    1/16
                  </text>
                </g>

                <g
                  className="geo-moving-piece"
                  style={{
                    opacity: currentStepIndex === 3 ? 1 : 0,
                    transform:
                      currentStepIndex === 3 ? 'scale(1)' : 'scale(0.5)',
                    transformOrigin: '261px 123px',
                  }}
                >
                  <rect
                    x="244"
                    y="109"
                    width="34"
                    height="29"
                    className="geo-shape geo-gold-bright"
                  />
                  <text x="261" y="128" textAnchor="middle" className="brilliant-block-label-dark" style={{ fontSize: '10px' }}>
                    •••
                  </text>
                </g>

                {/* Bottom Calliper Bar */}
                <g className="caliper-group">
                  <line
                    x1="142"
                    y1="152"
                    x2={currentStepIndex === 0 ? 210 : 278}
                    y2="152"
                    className="caliper-line"
                  />
                  <line x1="142" y1="146" x2="142" y2="158" className="caliper-tick" />
                  <line
                    x1={currentStepIndex === 0 ? 210 : 278}
                    y1="146"
                    x2={currentStepIndex === 0 ? 210 : 278}
                    y2="158"
                    className="caliper-tick"
                  />
                  <text
                    x={currentStepIndex === 0 ? 176 : 210}
                    y="170"
                    textAnchor="middle"
                    className="brilliant-math-var"
                  >
                    {currentStepIndex === 0 ? '½' : '1'}
                  </text>
                </g>
              </svg>
            )}

            {/* Synchronized Brilliant.org Bottom Equation Bar (Underlined Active Term) */}
            <div className="brilliant-equation-bar" aria-live="polite">
              {activeTopicId === 'math' && (
                <div className="brilliant-eq-row">
                  <span className={`eq-term ${currentStepIndex <= 1 ? 'eq-active' : 'eq-done'}`}>
                    a² {currentStepIndex >= 1 ? '− b²' : ''}
                  </span>
                  <span className={`eq-op ${currentStepIndex >= 2 ? 'eq-done' : 'eq-muted'}`}>=</span>
                  <span className={`eq-term ${currentStepIndex >= 2 ? 'eq-active' : 'eq-muted'}`}>
                    (a + b)(a − b)
                  </span>
                </div>
              )}

              {activeTopicId === 'science' && (
                <div className="brilliant-eq-row">
                  <span className={`eq-term ${currentStepIndex <= 1 ? 'eq-active' : 'eq-done'}`}>
                    Luas Δv-t
                  </span>
                  <span className={`eq-op ${currentStepIndex >= 2 ? 'eq-done' : 'eq-muted'}`}>=</span>
                  <span className={`eq-term ${currentStepIndex >= 2 ? 'eq-active' : 'eq-muted'}`}>
                    t × (½ v₀)
                  </span>
                </div>
              )}

              {activeTopicId === 'tka' && (
                <div className="brilliant-eq-row">
                  <span className={`eq-term ${currentStepIndex <= 2 ? 'eq-active' : 'eq-done'}`}>
                    ½ {currentStepIndex >= 1 ? '+ ¼' : ''} {currentStepIndex >= 2 ? '+ ⅛ + …' : ''}
                  </span>
                  <span className={`eq-op ${currentStepIndex === 3 ? 'eq-done' : 'eq-muted'}`}>=</span>
                  <span className={`eq-term ${currentStepIndex === 3 ? 'eq-active' : 'eq-muted'}`}>
                    1
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Stepper & Play/Pause Controls */}
          <div className="algo-controls-row">
            <div className="algo-step-pills" role="tablist" aria-label="Pilih Langkah Visualisasi">
              {currentTopic.steps.map((step, idx) => (
                <button
                  key={step.stepNumber}
                  type="button"
                  className={`algo-step-pill ${currentStepIndex === idx ? 'active' : ''} ${idx < currentStepIndex ? 'done' : ''}`}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentStepIndex(idx);
                  }}
                  aria-label={`Langkah ${step.stepNumber}`}
                  aria-selected={currentStepIndex === idx}
                  role="tab"
                >
                  <span>Langkah {step.stepNumber}</span>
                </button>
              ))}
            </div>

            <div className="algo-playback-btns">
              <button
                type="button"
                className="algo-ctrl-btn"
                onClick={handlePrevStep}
                aria-label="Langkah Sebelumnya"
              >
                ⏮
              </button>
              <button
                type="button"
                className={`algo-ctrl-btn play-pause ${isPlaying ? 'playing' : ''}`}
                onClick={() => setIsPlaying((prev) => !prev)}
                aria-label={isPlaying ? 'Jeda Animasi' : 'Putar Animasi'}
              >
                {isPlaying ? '⏸ Jeda' : '▶ Putar'}
              </button>
              <button
                type="button"
                className="algo-ctrl-btn"
                onClick={handleNextStep}
                aria-label="Langkah Selanjutnya"
              >
                ⏭
              </button>
            </div>
          </div>

          {/* Concise Explanation & Target Answer Box */}
          <div className="hots-step-box">
            <div className="step-box-header">
              <span className="step-formula-inline">{currentStep.formula}</span>
              <span className="step-ans-preview">🎯 {currentTopic.finalAnswer}</span>
            </div>
            <p className="step-explanation-text">{currentStep.explanation}</p>
          </div>
        </div>

        {/* 5. Zoom Bottom Interactive Toolbar */}
        <div className="achievement-float">
          <div className="achievement-item">
            <span className="achievement-badge-icon badge-gold">
              <MedalAwardIcon size={16} color="#F59E0B" />
            </span>
            <span>Alumni Lolos OSN-K &amp; OSN-P</span>
          </div>

          <button
            type="button"
            className={`zoom-raise-hand-btn ${handRaised ? 'raised' : ''}`}
            onClick={() => setHandRaised((prev) => !prev)}
          >
            <span>{handRaised ? '✋ Tangan Diangkat (Mentor Merespons)' : '✋ Simulasi Angkat Tangan'}</span>
          </button>

          <div className="achievement-item">
            <span className="achievement-badge-icon badge-emerald">
              <CheckIcon size={14} color="#10B981" />
            </span>
            <span>Skor Diagnostik TKA +38%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
