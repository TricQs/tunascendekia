import React, { useEffect, useState } from 'react';
import { SANDBOX_PROBLEMS } from '../data/content';
import { EducationLevel, QuizOption, SandboxProblemSet, SandboxState } from '../types';
import {
  CheckIcon,
  HandRaiseIcon,
  LightbulbIcon,
  MedalAwardIcon,
  PauseIcon,
  PlayIcon,
  StepNextIcon,
  StepPrevIcon,
} from './Icons';

interface ZoomAlgorithmVisualizerProps {
  onRequestDiagnosticForLevel: (level: EducationLevel) => void;
}

const SD_SHELL_COLORS = ['#0F172A', '#10B981', '#F59E0B', '#2563EB', '#047857'];

export const ZoomAlgorithmVisualizer: React.FC<ZoomAlgorithmVisualizerProps> = ({
  onRequestDiagnosticForLevel,
}) => {
  const [activeLevel, setActiveLevel] = useState<EducationLevel>('SMP');
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [handRaised, setHandRaised] = useState<boolean>(false);

  const currentProblem: SandboxProblemSet =
    SANDBOX_PROBLEMS.find((p) => p.level === activeLevel) ?? SANDBOX_PROBLEMS[0];

  const [paramValues, setParamValues] = useState<Record<EducationLevel, number>>({
    SD: 4,
    SMP: 4,
    SMA: 8,
  });

  const [sandboxState, setSandboxState] = useState<SandboxState>('exploring');
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const activeParam = paramValues[activeLevel];
  const currentStage = currentProblem.stages[stageIndex] ?? currentProblem.stages[0];
  const selectedOption: QuizOption | undefined = currentProblem.challengeOptions.find(
    (opt) => opt.id === selectedOptionId
  );

  // Respect prefers-reduced-motion: only animate automatically when explicitly toggled on
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isPlaying || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setStageIndex((prev) => (prev + 1) % currentProblem.stages.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [isPlaying, activeLevel, currentProblem.stages.length]);

  const handleLevelChange = (level: EducationLevel) => {
    setActiveLevel(level);
    setStageIndex(0);
    setIsPlaying(false);
    setSandboxState('exploring');
    setSelectedOptionId(null);
  };

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIdx: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const nextIdx =
        e.key === 'ArrowRight'
          ? (currentIdx + 1) % SANDBOX_PROBLEMS.length
          : (currentIdx - 1 + SANDBOX_PROBLEMS.length) % SANDBOX_PROBLEMS.length;
      handleLevelChange(SANDBOX_PROBLEMS[nextIdx].level);
    }
  };

  const handleParamChange = (nextVal: number) => {
    const clamped = Math.max(
      currentProblem.parameterMin,
      Math.min(currentProblem.parameterMax, nextVal)
    );
    setParamValues((prev) => ({
      ...prev,
      [activeLevel]: clamped,
    }));
  };

  const handleSelectAnswer = (option: QuizOption) => {
    setIsPlaying(false);
    setSelectedOptionId(option.id);
    if (option.isCorrect) {
      setSandboxState('answered-correct');
      setStageIndex(2);
    } else {
      setSandboxState('answered-retry');
    }
  };

  const formatHalf = (val: number): string => {
    const half = val / 2;
    return Number.isInteger(half) ? `${half}` : half.toFixed(1);
  };

  // Precomputed geometry values for SMP diagram (a = 10cm, b = activeParam cm)
  const smpScale = 11;
  const smpA = 10 * smpScale;
  const smpB = activeParam * smpScale;
  const smpDiff = smpA - smpB;
  const smpOriginX = 116;
  const smpOriginY = 34;

  // Precomputed geometry values for SMA diagram (t = 8s, v0 = activeParam m/s)
  const smaBaseY = 140;
  const smaH = activeParam * 9;
  const smaHalfH = smaH / 2;
  const smaMidY = smaBaseY - smaHalfH;

  // Precomputed grid tiles for SD diagram (k = activeParam, 2..5)
  const sdCell = 22;
  const sdTiles: Array<{
    key: string;
    shell: number;
    row: number;
    col: number;
    barIndex: number;
  }> = [];
  if (activeLevel === 'SD') {
    for (let s = 0; s < activeParam; s++) {
      let barIdx = 0;
      for (let c = 0; c <= s; c++) {
        sdTiles.push({ key: `r-${s}-${c}`, shell: s, row: s, col: c, barIndex: barIdx++ });
      }
      for (let r = s - 1; r >= 0; r--) {
        sdTiles.push({ key: `c-${r}-${s}`, shell: s, row: r, col: s, barIndex: barIdx++ });
      }
    }
  }

  return (
    <div
      className="zoom-mockup-card"
      id="sandbox-interaktif"
      aria-label="Simulasi Kelas Interaktif Zoom TunasCendekia"
    >
      {/* 1. Zoom Window Top Bar */}
      <div className="zoom-topbar">
        <div className="window-dots" aria-hidden="true">
          <span className="window-dot dot-red" />
          <span className="window-dot dot-amber" />
          <span className="window-dot dot-green" />
        </div>
        <div className="zoom-session-badge">
          <span className="live-pulse" aria-hidden="true" />
          <span>SESI LIVE ZOOM 2 ARAH</span>
        </div>
        <div className="zoom-Capacity-pill">Maks. 15 Siswa/Kelas</div>
      </div>

      <div className="zoom-body">
        {/* 2. Authentic Zoom Video Gallery Strip */}
        <div className="zoom-video-gallery" aria-label="Suasana Kelas Zoom Kecil">
          <div className="zoom-video-tile mentor-cam active-speaker">
            <img
              src="/mentor-zoom.jpg"
              alt="Mentor Alumni OSN mengajar tatap muka via Zoom"
              className="zoom-cam-img"
              width={320}
              height={180}
              fetchPriority="high"
            />
            <div className="zoom-cam-top-tag">
              <span className="cam-medal-pill">Alumni Medalis OSN</span>
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
              alt="Siswa mengangkat tangan berdiskusi dalam kelas Zoom"
              className="zoom-cam-img student-crop-1"
              width={200}
              height={150}
            />
            <div className="zoom-cam-top-tag">
              <span className="cam-hand-pill">Diskusi Konsep</span>
            </div>
            <div className="zoom-cam-label">
              <span>Rania (SMA Kelas 11)</span>
            </div>
          </div>

          <div className="zoom-video-tile student-cam">
            <img
              src="/student-zoom-2.jpg"
              alt="Siswa mencatat penalaran soal di kelas interaktif"
              className="zoom-cam-img"
              width={200}
              height={150}
            />
            <div className="zoom-cam-top-tag">
              <span className="cam-participants-pill">Kelas Kecil</span>
            </div>
            <div className="zoom-cam-label">
              <span>Dimas (SMP Kelas 8)</span>
            </div>
          </div>
        </div>

        {/* 3. Accessible Education Level Switcher (role="tablist") */}
        <div
          className="mockup-tabs"
          role="tablist"
          aria-label="Pilih Jenjang Sandbox Konsep TKA dan OSN"
        >
          {SANDBOX_PROBLEMS.map((problem, idx) => (
            <button
              key={problem.level}
              id={`tab-level-${problem.level}`}
              type="button"
              role="tab"
              aria-selected={activeLevel === problem.level}
              aria-controls="sandbox-tabpanel"
              tabIndex={activeLevel === problem.level ? 0 : -1}
              className={`mockup-tab ${activeLevel === problem.level ? 'active' : ''}`}
              onClick={() => handleLevelChange(problem.level)}
              onKeyDown={(e) => handleTabKeyDown(e, idx)}
            >
              {problem.tabLabel}
            </button>
          ))}
        </div>

        {/* 4. Interactive Pedagogical Sandbox Panel */}
        <div
          id="sandbox-tabpanel"
          role="tabpanel"
          aria-labelledby={`tab-level-${activeLevel}`}
          className="brilliant-board"
        >
          <div className="brilliant-board-top">
            <div>
              <span className="sandbox-track-meta">{currentProblem.trackLabel}</span>
              <h2 className="brilliant-step-caption">{currentStage.title}</h2>
            </div>
            <span className="algo-step-badge">{currentStage.highlightBadge}</span>
          </div>

          {/* Interactive Parameter Slider + Stepper */}
          <div className="sandbox-param-bar">
            <div className="sandbox-param-info">
              <label htmlFor="sandbox-param-slider" className="sandbox-param-label">
                {currentProblem.parameterLabel}:
              </label>
              <strong className="sandbox-param-value">
                {activeParam} {currentProblem.parameterUnit}
              </strong>
            </div>

            <div className="sandbox-param-controls">
              <button
                type="button"
                className="param-step-btn"
                onClick={() => handleParamChange(activeParam - 1)}
                disabled={activeParam <= currentProblem.parameterMin}
                aria-label={`Kurangi ${currentProblem.parameterLabel}`}
              >
                -
              </button>
              <input
                id="sandbox-param-slider"
                type="range"
                className="sandbox-range-slider"
                min={currentProblem.parameterMin}
                max={currentProblem.parameterMax}
                step={1}
                value={activeParam}
                onChange={(e) => handleParamChange(Number(e.target.value))}
              />
              <button
                type="button"
                className="param-step-btn"
                onClick={() => handleParamChange(activeParam + 1)}
                disabled={activeParam >= currentProblem.parameterMax}
                aria-label={`Tambah ${currentProblem.parameterLabel}`}
              >
                +
              </button>
            </div>
          </div>

          {/* Moving Mathematical SVG Canvas */}
          <div className="brilliant-stage">
            {activeLevel === 'SD' && (
              <svg
                viewBox="0 0 420 180"
                className="brilliant-svg"
                role="img"
                aria-label={`Visualisasi jumlah ${activeParam} bilangan ganjil pertama membentuk persegi ${activeParam} kali ${activeParam}`}
              >
                {sdTiles.map((tile) => {
                  const rowCount = tile.shell * 2 + 1;
                  const barTotalW = rowCount * (sdCell + 2);
                  const barStartX = 210 - barTotalW / 2;
                  const sqSize = activeParam * sdCell;
                  const sqOriginX = 210 - sqSize / 2;
                  const sqOriginY = 92 - sqSize / 2;

                  const posX =
                    stageIndex === 0
                      ? barStartX + tile.barIndex * (sdCell + 2)
                      : stageIndex === 1
                      ? sqOriginX + tile.col * sdCell + tile.shell * 5
                      : sqOriginX + tile.col * sdCell;

                  const posY =
                    stageIndex === 0
                      ? 22 + tile.shell * (sdCell + 7)
                      : stageIndex === 1
                      ? sqOriginY + tile.row * sdCell + tile.shell * 5
                      : sqOriginY + tile.row * sdCell;

                  const fillColor = SD_SHELL_COLORS[tile.shell % SD_SHELL_COLORS.length];

                  return (
                    <rect
                      key={tile.key}
                      x="0"
                      y="0"
                      width={sdCell - 1.5}
                      height={sdCell - 1.5}
                      rx="3"
                      fill={fillColor}
                      stroke="#111827"
                      strokeWidth="1.5"
                      className="geo-moving-piece"
                      style={{
                        transform: `translate(${posX}px, ${posY}px)`,
                      }}
                    />
                  );
                })}

                {/* Outer k x k Caliper Dimension on Stage 2 */}
                {stageIndex === 2 && (
                  <g className="caliper-group">
                    <line
                      x1={210 - (activeParam * sdCell) / 2}
                      y1={92 + (activeParam * sdCell) / 2 + 12}
                      x2={210 + (activeParam * sdCell) / 2}
                      y2={92 + (activeParam * sdCell) / 2 + 12}
                      className="caliper-line"
                    />
                    <text
                      x="210"
                      y={92 + (activeParam * sdCell) / 2 + 27}
                      textAnchor="middle"
                      className="brilliant-math-var-sm"
                    >
                      k = {activeParam} ({activeParam * activeParam} ubin)
                    </text>
                  </g>
                )}
              </svg>
            )}

            {activeLevel === 'SMP' && (
              <svg
                viewBox="0 0 420 180"
                className="brilliant-svg"
                role="img"
                aria-label={`Pembuktian geometri selisih kuadrat dengan a = 10 cm dan b = ${activeParam} cm`}
              >
                {/* Top Horizontal Caliper: a -> a + b */}
                <g className="caliper-group">
                  <line
                    x1={smpOriginX}
                    y1="18"
                    x2={stageIndex === 2 ? smpOriginX + smpA + smpB : smpOriginX + smpA}
                    y2="18"
                    className="caliper-line"
                  />
                  <line x1={smpOriginX} y1="13" x2={smpOriginX} y2="23" className="caliper-tick" />
                  <line
                    x1={stageIndex === 2 ? smpOriginX + smpA + smpB : smpOriginX + smpA}
                    y1="13"
                    x2={stageIndex === 2 ? smpOriginX + smpA + smpB : smpOriginX + smpA}
                    y2="23"
                    className="caliper-tick"
                  />
                  <text
                    x={
                      stageIndex === 2
                        ? smpOriginX + (smpA + smpB) / 2
                        : smpOriginX + smpA / 2
                    }
                    y="12"
                    textAnchor="middle"
                    className="brilliant-math-var-sm"
                  >
                    {stageIndex === 2 ? `a + b = ${10 + activeParam}` : 'a = 10'}
                  </text>
                </g>

                {/* Left Vertical Caliper: a -> a - b */}
                <g className="caliper-group">
                  <line
                    x1={smpOriginX - 16}
                    y1={smpOriginY}
                    x2={smpOriginX - 16}
                    y2={stageIndex === 0 ? smpOriginY + smpA : smpOriginY + smpDiff}
                    className="caliper-line"
                  />
                  <line
                    x1={smpOriginX - 21}
                    y1={smpOriginY}
                    x2={smpOriginX - 11}
                    y2={smpOriginY}
                    className="caliper-tick"
                  />
                  <line
                    x1={smpOriginX - 21}
                    y1={stageIndex === 0 ? smpOriginY + smpA : smpOriginY + smpDiff}
                    x2={smpOriginX - 11}
                    y2={stageIndex === 0 ? smpOriginY + smpA : smpOriginY + smpDiff}
                    className="caliper-tick"
                  />
                  <text
                    x={smpOriginX - 28}
                    y={stageIndex === 0 ? smpOriginY + smpA / 2 + 4 : smpOriginY + smpDiff / 2 + 4}
                    textAnchor="end"
                    className="brilliant-math-var-sm"
                  >
                    {stageIndex === 0 ? 'a = 10' : `a - b = ${10 - activeParam}`}
                  </text>
                </g>

                {/* Top Main Rectangle a x (a - b) */}
                <rect
                  x={smpOriginX}
                  y={smpOriginY}
                  width={smpA}
                  height={smpDiff}
                  className="geo-shape geo-blue"
                />

                {/* Moving Bottom-Left Strip (a - b) x b */}
                <g
                  className="geo-moving-piece"
                  style={{
                    transform:
                      stageIndex <= 1
                        ? `translate(${smpOriginX}px, ${smpOriginY + smpDiff}px) rotate(0deg)`
                        : `translate(${smpOriginX + smpA}px, ${smpOriginY + smpDiff}px) rotate(-90deg)`,
                  }}
                >
                  <rect
                    x="0"
                    y="0"
                    width={smpDiff}
                    height={smpB}
                    className={`geo-shape ${stageIndex === 2 ? 'geo-emerald' : 'geo-blue-accent'}`}
                  />
                </g>

                {/* Corner b^2 Square */}
                <g
                  className="geo-b2-piece"
                  style={{
                    transform:
                      stageIndex === 0
                        ? `translate(${smpOriginX + smpDiff}px, ${smpOriginY + smpDiff}px) scale(1)`
                        : stageIndex === 1
                        ? `translate(${smpOriginX + smpDiff + 16}px, ${smpOriginY + smpDiff + 14}px) scale(1)`
                        : `translate(${smpOriginX + smpDiff + 26}px, ${smpOriginY + smpDiff + 22}px) scale(0.5)`,
                    opacity: stageIndex === 2 ? 0 : 1,
                  }}
                >
                  <rect
                    x="0"
                    y="0"
                    width={smpB}
                    height={smpB}
                    className={`geo-shape ${stageIndex === 0 ? 'geo-blue-seamless' : 'geo-gold'}`}
                  />
                  {stageIndex === 1 && (
                    <text
                      x={smpB / 2}
                      y={smpB / 2 + 5}
                      textAnchor="middle"
                      className="brilliant-math-var-sm"
                    >
                      b²={activeParam * activeParam}
                    </text>
                  )}
                </g>

                {/* Solid outer outline on Stage 0 */}
                <rect
                  x={smpOriginX}
                  y={smpOriginY}
                  width={smpA}
                  height={smpA}
                  fill="none"
                  stroke="#111827"
                  strokeWidth="2.4"
                  style={{ opacity: stageIndex === 0 ? 1 : 0, transition: 'opacity 250ms ease' }}
                />
              </svg>
            )}

            {activeLevel === 'SMA' && (
              <svg
                viewBox="0 0 420 180"
                className="brilliant-svg"
                role="img"
                aria-label={`Transformasi grafik kecepatan terhadap waktu dengan v0 = ${activeParam} m/s`}
              >
                {/* Bottom Time Axis Calliper t = 8s */}
                <g className="caliper-group">
                  <line x1="112" y1="154" x2="288" y2="154" className="caliper-line" />
                  <line x1="112" y1="149" x2="112" y2="159" className="caliper-tick" />
                  <line x1="288" y1="149" x2="288" y2="159" className="caliper-tick" />
                  <text x="200" y="170" textAnchor="middle" className="brilliant-math-var-sm">
                    t = 8 detik
                  </text>
                </g>

                {/* Right Height Calliper: v0 -> 1/2 v0 */}
                <g className="caliper-group">
                  <line
                    x1="304"
                    y1={stageIndex === 0 ? smaBaseY - smaH : smaMidY}
                    x2="304"
                    y2={smaBaseY}
                    className="caliper-line"
                  />
                  <line
                    x1="299"
                    y1={stageIndex === 0 ? smaBaseY - smaH : smaMidY}
                    x2="309"
                    y2={stageIndex === 0 ? smaBaseY - smaH : smaMidY}
                    className="caliper-tick"
                  />
                  <line x1="299" y1={smaBaseY} x2="309" y2={smaBaseY} className="caliper-tick" />
                  <text
                    x="316"
                    y={stageIndex === 0 ? smaBaseY - smaH / 2 + 4 : smaMidY + smaHalfH / 2 + 4}
                    textAnchor="start"
                    className="brilliant-math-var-sm"
                  >
                    {stageIndex === 0 ? `v₀ = ${activeParam} m/s` : `½ v₀ = ${formatHalf(activeParam)} m/s`}
                  </text>
                </g>

                {/* Bottom Trapezoid Base */}
                <polygon
                  points={`112,${smaMidY} 200,${smaMidY} 288,${smaBaseY} 112,${smaBaseY}`}
                  className="geo-shape geo-gold"
                />

                {/* Top Triangle Peak rotating 180deg around (200, smaMidY) */}
                <g
                  className="geo-moving-piece"
                  style={{
                    transformOrigin: `200px ${smaMidY}px`,
                    transform:
                      stageIndex === 0
                        ? 'rotate(0deg)'
                        : stageIndex === 1
                        ? 'rotate(75deg)'
                        : 'rotate(180deg)',
                  }}
                >
                  <polygon
                    points={`112,${smaBaseY - smaH} 200,${smaMidY} 112,${smaMidY}`}
                    className={`geo-shape ${stageIndex === 2 ? 'geo-emerald' : 'geo-gold-bright'}`}
                  />
                </g>

                {/* Midpoint Slice Line */}
                {stageIndex === 1 && (
                  <line
                    x1="100"
                    y1={smaMidY}
                    x2="294"
                    y2={smaMidY}
                    className="slice-dashed-line visible"
                    style={{ stroke: '#0F172A' }}
                  />
                )}
              </svg>
            )}

            {/* Dynamic Serif Mathematical Readout Bar */}
            <div className="brilliant-equation-bar" aria-live="polite">
              {activeLevel === 'SD' && (
                <div className="brilliant-eq-row">
                  <span className={`eq-term ${stageIndex <= 1 ? 'eq-active' : 'eq-done'}`}>
                    {Array.from({ length: activeParam }, (_, i) => 2 * i + 1).join(' + ')}
                  </span>
                  <span className={`eq-op ${stageIndex === 2 ? 'eq-done' : 'eq-muted'}`}>=</span>
                  <span className={`eq-term ${stageIndex === 2 ? 'eq-active' : 'eq-muted'}`}>
                    {activeParam}² = {activeParam * activeParam}
                  </span>
                </div>
              )}

              {activeLevel === 'SMP' && (
                <div className="brilliant-eq-row">
                  <span className={`eq-term ${stageIndex <= 1 ? 'eq-active' : 'eq-done'}`}>
                    10² − {activeParam}²
                  </span>
                  <span className={`eq-op ${stageIndex === 2 ? 'eq-done' : 'eq-muted'}`}>=</span>
                  <span className={`eq-term ${stageIndex === 2 ? 'eq-active' : 'eq-muted'}`}>
                    ({10 + activeParam})({10 - activeParam}) = {100 - activeParam * activeParam} cm²
                  </span>
                </div>
              )}

              {activeLevel === 'SMA' && (
                <div className="brilliant-eq-row">
                  <span className={`eq-term ${stageIndex <= 1 ? 'eq-active' : 'eq-done'}`}>
                    s = ½ · {activeParam} · 8
                  </span>
                  <span className={`eq-op ${stageIndex === 2 ? 'eq-done' : 'eq-muted'}`}>=</span>
                  <span className={`eq-term ${stageIndex === 2 ? 'eq-active' : 'eq-muted'}`}>
                    8 × {formatHalf(activeParam)} = {4 * activeParam} m
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 3-Stage Proof Stepper + Play/Pause Controls */}
          <div className="algo-controls-row">
            <div className="algo-step-pills" aria-label="Tahap Pembuktian Visual">
              {currentProblem.stages.map((stage, idx) => (
                <button
                  key={stage.stageNumber}
                  type="button"
                  className={`algo-step-pill ${stageIndex === idx ? 'active' : ''} ${
                    idx < stageIndex ? 'done' : ''
                  }`}
                  onClick={() => {
                    setIsPlaying(false);
                    setStageIndex(idx);
                  }}
                >
                  {stage.shortLabel}
                </button>
              ))}
            </div>

            <div className="algo-playback-btns">
              <button
                type="button"
                className="algo-ctrl-btn"
                onClick={() => {
                  setIsPlaying(false);
                  setStageIndex((prev) =>
                    prev === 0 ? currentProblem.stages.length - 1 : prev - 1
                  );
                }}
                aria-label="Tahap Sebelumnya"
              >
                <StepPrevIcon size={13} />
              </button>
              <button
                type="button"
                className={`algo-ctrl-btn play-pause ${isPlaying ? 'playing' : ''}`}
                onClick={() => setIsPlaying((prev) => !prev)}
                aria-label={isPlaying ? 'Jeda Animasi Tahapan' : 'Putar Animasi Tahapan'}
              >
                {isPlaying ? <PauseIcon size={11} /> : <PlayIcon size={11} />}
                <span>{isPlaying ? 'Jeda' : 'Putar'}</span>
              </button>
              <button
                type="button"
                className="algo-ctrl-btn"
                onClick={() => {
                  setIsPlaying(false);
                  setStageIndex((prev) => (prev + 1) % currentProblem.stages.length);
                }}
                aria-label="Tahap Selanjutnya"
              >
                <StepNextIcon size={13} />
              </button>
            </div>
          </div>

          {/* Explanation Callout */}
          <div className="hots-step-box">
            <p className="step-explanation-text">{currentStage.explanation}</p>
          </div>

          {/* Interactive Diagnostic Quick-Check */}
          <div className="sandbox-quiz-box" aria-live="polite">
            <div className="sandbox-quiz-q">{currentProblem.challengeQuestion}</div>
            <div className="sandbox-quiz-options">
              {currentProblem.challengeOptions.map((option) => {
                const isSelected = selectedOptionId === option.id;
                const optionStateClass =
                  isSelected && option.isCorrect
                    ? 'opt-correct'
                    : isSelected && !option.isCorrect
                    ? 'opt-retry'
                    : '';

                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={isSelected}
                    className={`sandbox-quiz-option ${optionStateClass}`}
                    onClick={() => handleSelectAnswer(option)}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            {sandboxState === 'answered-correct' && (
              <div className="sandbox-feedback sandbox-feedback-success">
                <p>{currentProblem.correctExplanation}</p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm sandbox-cta-btn"
                  onClick={() => onRequestDiagnosticForLevel(activeLevel)}
                >
                  <span>Petakan Kemampuan Anak di Sesi Diagnostik</span>
                </button>
              </div>
            )}

            {sandboxState === 'answered-retry' && selectedOption && (
              <div className="sandbox-feedback sandbox-feedback-hint">
                <span className="hint-icon-wrap" aria-hidden="true">
                  <LightbulbIcon size={16} color="#92400E" />
                </span>
                <p>{selectedOption.feedbackHint}</p>
              </div>
            )}
          </div>
        </div>

        {/* 5. Zoom Bottom Interactive Toolbar */}
        <div className="achievement-float">
          <div className="achievement-item">
            <span className="achievement-badge-icon badge-gold" aria-hidden="true">
              <MedalAwardIcon size={16} color="#F59E0B" />
            </span>
            <span>Bimbingan Alumni OSN</span>
          </div>

          <button
            type="button"
            className={`zoom-raise-hand-btn ${handRaised ? 'raised' : ''}`}
            onClick={() => setHandRaised((prev) => !prev)}
            aria-pressed={handRaised}
          >
            <HandRaiseIcon size={14} color="currentColor" />
            <span>{handRaised ? 'Tangan Diangkat (Aktif Diskusi)' : 'Simulasi Angkat Tangan'}</span>
          </button>

          <div className="achievement-item">
            <span className="achievement-badge-icon badge-emerald" aria-hidden="true">
              <CheckIcon size={14} color="#10B981" />
            </span>
            <span>Klinik Soal Mingguan</span>
          </div>
        </div>
      </div>
    </div>
  );
};
