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

  // Auto-advance step-by-step animation every 3.6 seconds when playing
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isPlaying || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setCurrentStepIndex((prev) => (prev + 1) % currentTopic.steps.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [isPlaying, activeTopicId, currentTopic.steps.length]);

  const handleTopicChange = (topicId: 'math' | 'science' | 'tka') => {
    setActiveTopicId(topicId);
    setCurrentStepIndex(0);
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
        {/* 2. Realistic Zoom Video Gallery Strip (Mentor + Students) */}
        <div className="zoom-video-gallery" aria-label="Galeri Video Peserta Zoom">
          {/* Active Speaker: Mentor Video Feed */}
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

          {/* Student 1 Video Feed */}
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

          {/* Student 2 Video Feed */}
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
        <div className="mockup-tabs" role="tablist" aria-label="Pilih Topik Algoritma Soal HOTS">
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

        {/* 4. Interactive Zoom Screen-Share Whiteboard + Step-by-Step Algorithm Visualizer */}
        <div className="hots-whiteboard">
          <div className="whiteboard-header">
            <span className="hots-tag">{currentTopic.tag}</span>
            <span className="hots-level">{currentTopic.level}</span>
          </div>

          <p className="hots-question">{currentTopic.question}</p>

          {/* Animated SVG Algorithm Visualizer Canvas */}
          <div className="algo-canvas-wrapper" aria-label={currentTopic.algorithmName}>
            <div className="algo-canvas-topbar">
              <span className="algo-canvas-title">
                📐 Visualisasi Algoritma: <strong>{currentTopic.algorithmName}</strong>
              </span>
              <span className="algo-step-badge">{currentStep.highlightBadge}</span>
            </div>

            {/* Dynamic SVG Visualization per Topic & Step */}
            <div className="algo-svg-stage">
              {activeTopicId === 'math' && (
                <svg
                  viewBox="0 0 480 148"
                  className="algo-svg"
                  role="img"
                  aria-label="Diagram pohon faktorisasi algoritma teori bilangan"
                >
                  {/* Step 1: Root Equation & GCD Parameterization */}
                  <g className={`algo-node ${currentStepIndex >= 0 ? 'visible' : ''} ${currentStepIndex === 0 ? 'focused' : ''}`}>
                    <rect x="10" y="12" width="136" height="44" rx="8" className="node-box-navy" />
                    <text x="78" y="30" textAnchor="middle" className="svg-label-light">Input Persamaan</text>
                    <text x="78" y="46" textAnchor="middle" className="svg-math-gold">KPK + FPB = ab − 2026</text>
                  </g>

                  {/* Arrow 1 -> 2 */}
                  <path
                    d="M 146 34 L 176 34"
                    className={`algo-edge ${currentStepIndex >= 1 ? 'edge-active' : ''}`}
                  />

                  {/* Step 2: Divisor Search Space Pruning */}
                  <g className={`algo-node ${currentStepIndex >= 1 ? 'visible' : ''} ${currentStepIndex === 1 ? 'focused' : ''}`}>
                    <rect x="176" y="10" width="144" height="48" rx="8" className="node-box-slate" />
                    <text x="248" y="27" textAnchor="middle" className="svg-label-dark">Uji Faktor d | 2026</text>
                    <g transform="translate(184, 33)">
                      <rect x="0" y="0" width="26" height="18" rx="4" className={currentStepIndex >= 2 ? 'pill-pruned' : 'pill-candidate'} />
                      <text x="13" y="13" textAnchor="middle" className="svg-pill-text">d=1</text>

                      <rect x="30" y="0" width="28" height="18" rx="4" className={currentStepIndex >= 2 ? 'pill-valid' : 'pill-candidate'} />
                      <text x="44" y="13" textAnchor="middle" className="svg-pill-text-valid">d=2</text>

                      <rect x="62" y="0" width="32" height="18" rx="4" className={currentStepIndex >= 2 ? 'pill-pruned' : 'pill-candidate'} />
                      <text x="78" y="13" textAnchor="middle" className="svg-pill-text">1013</text>

                      <rect x="98" y="0" width="32" height="18" rx="4" className={currentStepIndex >= 2 ? 'pill-pruned' : 'pill-candidate'} />
                      <text x="114" y="13" textAnchor="middle" className="svg-pill-text">2026</text>
                    </g>
                  </g>

                  {/* Arrow 2 -> 3 */}
                  <path
                    d="M 248 58 L 248 84"
                    className={`algo-edge ${currentStepIndex >= 2 ? 'edge-active' : ''}`}
                  />

                  {/* Step 3: Prime Power Blocks of xy = 1014 */}
                  <g className={`algo-node ${currentStepIndex >= 2 ? 'visible' : ''} ${currentStepIndex === 2 ? 'focused' : ''}`}>
                    <rect x="10" y="84" width="290" height="52" rx="8" className="node-box-emerald-soft" />
                    <text x="155" y="101" textAnchor="middle" className="svg-label-emerald">
                      Cabang Valid (d = 2) ⇒ x · y = 1014 (Faktor Prima Saling Lepas)
                    </text>
                    <g transform="translate(32, 108)">
                      <rect x="0" y="0" width="68" height="20" rx="5" className="prime-block" />
                      <text x="34" y="14" textAnchor="middle" className="prime-text">Blok p₁ = 2¹</text>

                      <text x="78" y="14" textAnchor="middle" className="svg-label-dark">×</text>

                      <rect x="88" y="0" width="68" height="20" rx="5" className="prime-block" />
                      <text x="122" y="14" textAnchor="middle" className="prime-text">Blok p₂ = 3¹</text>

                      <text x="166" y="14" textAnchor="middle" className="svg-label-dark">×</text>

                      <rect x="176" y="0" width="76" height="20" rx="5" className="prime-block" />
                      <text x="214" y="14" textAnchor="middle" className="prime-text">Blok p₃ = 13²</text>
                    </g>
                  </g>

                  {/* Arrow 3 -> 4 */}
                  <path
                    d="M 300 110 L 332 110"
                    className={`algo-edge ${currentStepIndex >= 3 ? 'edge-active' : ''}`}
                  />

                  {/* Step 4: Combinatorial Output 2^3 = 8 */}
                  <g className={`algo-node ${currentStepIndex >= 3 ? 'visible' : ''} ${currentStepIndex === 3 ? 'focused' : ''}`}>
                    <rect x="332" y="12" width="138" height="124" rx="10" className="node-box-gold" />
                    <text x="401" y="34" textAnchor="middle" className="svg-label-gold-dark">Distribusi Koprima</text>
                    <text x="401" y="58" textAnchor="middle" className="svg-big-formula">2³ = 8</text>
                    <text x="401" y="78" textAnchor="middle" className="svg-sub-dark">Pasangan (x, y)</text>
                    <rect x="346" y="92" width="110" height="30" rx="6" className="pill-valid" />
                    <text x="401" y="111" textAnchor="middle" className="svg-pill-text-valid">✓ 8 Solusi (a, b)</text>
                  </g>
                </svg>
              )}

              {activeTopicId === 'science' && (
                <svg
                  viewBox="0 0 480 148"
                  className="algo-svg"
                  role="img"
                  aria-label="Simulasi lintasan balok dan grafik integrasi usaha gesekan"
                >
                  {/* Left: Curved Ramp & Rough Surface */}
                  <path
                    d="M 18 22 Q 18 106 95 106 L 245 106"
                    fill="none"
                    stroke="#0F172A"
                    strokeWidth="3"
                  />
                  {/* Rough surface hatch marks */}
                  <path
                    d="M 95 106 L 245 106"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="4"
                    strokeDasharray="6 4"
                  />
                  <text x="42" y="52" className="svg-label-dark">Licin (h)</text>
                  <text x="165" y="125" textAnchor="middle" className="svg-label-gold-dark">
                    Kasar: μ(x) = μ₀·x
                  </text>

                  {/* Animated Block Position depending on step */}
                  <g
                    className="physics-block-group"
                    style={{
                      transform:
                        currentStepIndex === 0
                          ? 'translate(22px, 24px)'
                          : currentStepIndex === 1
                          ? 'translate(96px, 84px)'
                          : currentStepIndex === 2
                          ? 'translate(152px, 84px)'
                          : 'translate(206px, 84px)',
                    }}
                  >
                    <rect x="0" y="0" width="26" height="20" rx="4" fill="#10B981" stroke="#047857" strokeWidth="2" />
                    <text x="13" y="14" textAnchor="middle" className="svg-pill-text-valid">m</text>
                  </g>

                  {/* Right: Force vs Position Integral Graph */}
                  <g transform="translate(275, 16)">
                    <rect x="0" y="0" width="192" height="116" rx="8" className="node-box-slate" />
                    <line x1="28" y1="92" x2="174" y2="92" stroke="#334155" strokeWidth="1.8" />
                    <line x1="28" y1="92" x2="28" y2="18" stroke="#334155" strokeWidth="1.8" />
                    <text x="34" y="26" className="svg-label-dark">f_k(x)</text>
                    <text x="170" y="106" textAnchor="end" className="svg-label-dark">posisi x</text>

                    {/* Shaded Integral Triangle */}
                    <polygon
                      points={
                        currentStepIndex <= 1
                          ? '28,92 68,92 68,72'
                          : currentStepIndex === 2
                          ? '28,92 124,92 124,44'
                          : '28,92 162,92 162,24'
                      }
                      fill="rgba(16, 185, 129, 0.25)"
                    />
                    {/* Linear Force Line f_k = mu_0 m g x */}
                    <line
                      x1="28"
                      y1="92"
                      x2="162"
                      y2="24"
                      stroke="#059669"
                      strokeWidth="2.5"
                    />
                    <text x="108" y="78" textAnchor="middle" className="svg-label-emerald">
                      {currentStepIndex >= 2 ? 'W = ½μ₀mgx²' : 'f(x) = μ₀mgx'}
                    </text>
                    {currentStepIndex === 3 && (
                      <text x="105" y="14" textAnchor="middle" className="svg-label-gold-dark">
                        ✓ x_maks = √(2h/μ₀)
                      </text>
                    )}
                  </g>
                </svg>
              )}

              {activeTopicId === 'tka' && (
                <svg
                  viewBox="0 0 480 148"
                  className="algo-svg"
                  role="img"
                  aria-label="Grafik konvergensi rasio eksponensial TKA"
                >
                  <rect x="10" y="10" width="286" height="126" rx="8" className="node-box-slate" />
                  {/* Axes */}
                  <line x1="38" y1="112" x2="276" y2="112" stroke="#334155" strokeWidth="1.8" />
                  <line x1="38" y1="112" x2="38" y2="22" stroke="#334155" strokeWidth="1.8" />

                  {/* Target threshold line 5/3 = 1.667 */}
                  <line
                    x1="38"
                    y1="40"
                    x2="276"
                    y2="40"
                    stroke="#F59E0B"
                    strokeWidth="1.8"
                    strokeDasharray="5 4"
                  />
                  <text x="272" y="34" textAnchor="end" className="svg-label-gold-dark">
                    Target Rasio 5/3 ≈ 1,667
                  </text>

                  {/* Exponential Growth Curve (16/15)^n */}
                  <path
                    d="M 42 104 Q 125 94 185 72 T 254 38"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3"
                  />

                  {/* Binary Doubling Points */}
                  <circle cx="68" cy="100" r="4.5" fill={currentStepIndex >= 1 ? '#059669' : '#94A3B8'} />
                  <text x="68" y="125" textAnchor="middle" className="svg-label-dark">n=1</text>

                  <circle cx="112" cy="92" r="4.5" fill={currentStepIndex >= 2 ? '#059669' : '#94A3B8'} />
                  <text x="112" y="125" textAnchor="middle" className="svg-label-dark">n=2</text>

                  <circle cx="174" cy="75" r="4.5" fill={currentStepIndex >= 2 ? '#059669' : '#94A3B8'} />
                  <text x="174" y="125" textAnchor="middle" className="svg-label-dark">n=4</text>

                  <circle
                    cx="252"
                    cy="39"
                    r={currentStepIndex === 3 ? '7' : '5'}
                    fill={currentStepIndex === 3 ? '#F59E0B' : '#10B981'}
                  />
                  <text x="252" y="125" textAnchor="middle" className="svg-label-emerald">n=8</text>

                  {/* Right Summary Box */}
                  <rect x="308" y="10" width="162" height="126" rx="8" className="node-box-navy" />
                  <text x="389" y="32" textAnchor="middle" className="svg-label-light">Tabel Fast Doubling</text>
                  <text x="322" y="54" className="svg-math-gold">n=1 : (16/15)¹ = 1,067</text>
                  <text x="322" y="72" className="svg-math-gold">n=2 : (1,067)² = 1,138</text>
                  <text x="322" y="90" className="svg-math-gold">n=4 : (1,138)² = 1,294</text>
                  <text x="322" y="108" className="svg-pill-text-valid">n=8 : (1,294)² = 1,675</text>
                  <text x="389" y="127" textAnchor="middle" className="svg-label-light">✓ Setara di Tahun ke-8</text>
                </svg>
              )}
            </div>

            {/* Step Progress Pills & Playback Controls */}
            <div className="algo-controls-row">
              <div className="algo-step-pills" role="tablist" aria-label="Pilih Langkah Penyelesaian">
                {currentTopic.steps.map((step, idx) => (
                  <button
                    key={step.stepNumber}
                    type="button"
                    className={`algo-step-pill ${currentStepIndex === idx ? 'active' : ''} ${idx < currentStepIndex ? 'done' : ''}`}
                    onClick={() => {
                      setIsPlaying(false);
                      setCurrentStepIndex(idx);
                    }}
                    aria-label={`Langkah ${step.stepNumber}: ${step.title}`}
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
                  aria-label={isPlaying ? 'Jeda Animasi Algoritma' : 'Putar Animasi Algoritma'}
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

            {/* Animated Step Detail & Math Formula Box */}
            <div className="hots-step-box">
              <div className="step-box-header">
                <strong className="step-box-title">
                  Langkah {currentStep.stepNumber}: {currentStep.title}
                </strong>
                <span className="step-ans-preview">🎯 Target: {currentTopic.finalAnswer}</span>
              </div>
              <div className="step-formula-code">{currentStep.formula}</div>
              <p className="step-explanation-text">{currentStep.explanation}</p>
            </div>
          </div>
        </div>

        {/* 5. Zoom Bottom Interactive Toolbar & Achievement Strip */}
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
