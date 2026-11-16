import React from 'react';
import { DeckIllustrationKey } from '../types';

interface DeckIllustrationProps {
  variant: DeckIllustrationKey;
  className?: string;
}

export const DeckIllustration: React.FC<DeckIllustrationProps> = ({ variant, className = '' }) => {
  switch (variant) {
    case 'problem':
      return (
        <svg
          viewBox="0 0 280 168"
          className={`deck-svg ${className}`}
          role="img"
          aria-label="Ilustrasi diskusi tantangan pembinaan olimpiade siswa"
        >
          {/* Rounded White & Emerald Deck Backdrop Blocks */}
          <rect x="24" y="10" width="232" height="62" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
          <rect x="24" y="80" width="232" height="74" rx="12" fill="#10B981" />

          {/* Speech Bubble */}
          <rect x="132" y="18" width="66" height="32" rx="9" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" />
          <path d="M148 50 L143 60 L158 50 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
          <circle cx="151" cy="34" r="3.5" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />
          <circle cx="165" cy="34" r="3.5" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />
          <circle cx="179" cy="34" r="3.5" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.5" />

          {/* Figure 1 (Left, holding Yellow Notebook) */}
          <circle cx="102" cy="54" r="14" fill="#0F172A" />
          <circle cx="106" cy="68" r="13" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" />
          <circle cx="104" cy="67" r="1.5" fill="#0F172A" />
          <circle cx="111" cy="67" r="1.5" fill="#0F172A" />
          <path d="M104 73 Q108 76 112 73" fill="none" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M74 154 C74 102 82 88 106 88 C128 88 138 102 138 154 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" />
          <path d="M92 88 C98 98 114 98 120 88 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
          <rect x="78" y="106" width="38" height="44" rx="4" transform="rotate(-12 78 106)" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.2" />

          {/* Figure 2 (Right, holding Yellow Tablet) */}
          <circle cx="194" cy="70" r="15" fill="#0F172A" />
          <circle cx="192" cy="73" r="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" />
          <path d="M164 154 C164 108 174 94 196 94 C218 94 226 112 226 154 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" />
          <rect x="148" y="96" width="44" height="30" rx="5" transform="rotate(6 148 96)" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.2" />
          <line x1="60" y1="154" x2="236" y2="154" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );

    case 'vision':
      return (
        <svg
          viewBox="0 0 280 168"
          className={`deck-svg ${className}`}
          role="img"
          aria-label="Ilustrasi visi pemerataan akses pembinaan prestasi nasional"
        >
          <rect x="24" y="14" width="232" height="140" rx="14" fill="#122D59" />

          {/* Glowing Gold Lightbulb */}
          <g transform="translate(132 24)">
            <line x1="16" y1="-8" x2="16" y2="-2" stroke="#FACC15" strokeWidth="2.4" strokeLinecap="round" />
            <line x1="-2" y1="2" x2="3" y2="6" stroke="#FACC15" strokeWidth="2.4" strokeLinecap="round" />
            <line x1="34" y1="2" x2="29" y2="6" stroke="#FACC15" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M16 4 C7 4 3 12 6 19 C8 23 10 25 10 29 L22 29 C22 25 24 23 26 19 C29 12 25 4 16 4 Z" fill="#FACC15" stroke="#0F172A" strokeWidth="2.2" />
            <rect x="11" y="29" width="10" height="5" rx="2" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          </g>

          {/* Left Student */}
          <circle cx="72" cy="84" r="11" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <path d="M46 154 C46 116 56 106 74 106 C92 106 100 120 100 154 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.2" />

          {/* Center Mentor */}
          <circle cx="118" cy="52" r="14" fill="#0F172A" />
          <circle cx="122" cy="54" r="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <path d="M96 154 C96 92 106 78 126 78 C146 78 152 94 152 154 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />

          {/* Right Student Carrying Stack of Books */}
          <circle cx="204" cy="76" r="14" fill="#0F172A" />
          <circle cx="201" cy="79" r="11.5" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <path d="M174 154 C174 110 184 96 206 96 C226 96 234 114 234 154 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <rect x="180" y="114" width="44" height="11" rx="4" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
          <rect x="184" y="127" width="42" height="11" rx="4" fill="#10B981" stroke="#0F172A" strokeWidth="2" />
          <line x1="40" y1="154" x2="244" y2="154" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );

    case 'opportunity':
      return (
        <svg
          viewBox="0 0 280 168"
          className={`deck-svg ${className}`}
          role="img"
          aria-label="Ilustrasi peluang peningkatan prestasi akademik daring"
        >
          <rect x="24" y="14" width="232" height="64" rx="12" fill="#122D59" />
          <rect x="24" y="88" width="232" height="66" rx="12" fill="#122D59" />
          {/* Top Emerald Pill Accent */}
          <rect x="38" y="6" width="84" height="22" rx="11" fill="#10B981" />

          {/* Pie Chart Cutout */}
          <path d="M138 22 L138 58 L104 42 C110 28 124 22 138 22 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.2" strokeLinejoin="round" />
          <rect x="148" y="24" width="54" height="44" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />

          {/* Growth Chart Board */}
          <polygon points="88,76 200,76 184,154 72,154" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
          <polyline points="92,136 116,112 136,126 164,98" fill="none" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="116" cy="112" r="5" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
          <circle cx="136" cy="126" r="5" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
          <circle cx="164" cy="98" r="5" fill="#10B981" stroke="#0F172A" strokeWidth="2" />
          <rect x="158" y="84" width="24" height="20" rx="4" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
          <polyline points="164,94 169,99 177,90" fill="none" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="48" y1="154" x2="232" y2="154" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      );

    case 'solution':
      return (
        <svg
          viewBox="0 0 280 168"
          className={`deck-svg ${className}`}
          role="img"
          aria-label="Ilustrasi kelas Zoom interaktif dua arah bersama mentor medalis"
        >
          <rect x="20" y="18" width="114" height="136" rx="12" fill="#122D59" />
          <rect x="144" y="18" width="116" height="136" rx="12" fill="#10B981" />

          {/* Left Student Raising Hand */}
          <circle cx="72" cy="70" r="13" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" />
          <circle cx="62" cy="64" r="6" fill="#0F172A" />
          <path d="M40 154 C40 110 52 94 74 94 C94 94 102 108 104 126 L124 88 L134 94 L108 154 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.4" strokeLinejoin="round" />
          <rect x="86" y="128" width="44" height="26" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />

          {/* Right Confident Mentor */}
          <circle cx="204" cy="40" r="14" fill="#0F172A" />
          <circle cx="204" cy="44" r="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" />
          <path d="M174 114 C174 74 184 62 204 62 C224 62 234 74 234 114 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" />
          <polygon points="196,62 204,70 212,62" fill="#F59E0B" stroke="#0F172A" strokeWidth="1.8" />
          <rect x="180" y="114" width="48" height="40" fill="#0F172A" />
          <rect x="148" y="122" width="38" height="11" rx="3" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
          <rect x="148" y="135" width="40" height="11" rx="3" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
        </svg>
      );

    case 'product-zoom':
      return (
        <svg
          viewBox="0 0 280 168"
          className={`deck-svg ${className}`}
          role="img"
          aria-label="Ilustrasi bedah konsep geometri dan bank soal HOTS"
        >
          <rect x="20" y="14" width="240" height="140" rx="14" fill="#122D59" />
          <rect x="44" y="28" width="160" height="96" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />

          {/* Isometric Cube & Hexagon Diagrams on Board */}
          <rect x="82" y="58" width="30" height="30" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.2" />
          <polygon points="172,42 186,50 186,66 172,74 158,66 158,50" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.2" />
          <polygon points="164,82 178,90 178,106 164,114 150,106 150,90" fill="#10B981" stroke="#0F172A" strokeWidth="2.2" />
          <line x1="56" y1="42" x2="132" y2="42" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="56" y1="50" x2="110" y2="50" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />

          {/* Active Student & Tutor with Laptop */}
          <circle cx="72" cy="88" r="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <path d="M52 154 C52 118 60 108 74 108 C88 108 96 118 96 154 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <rect x="64" y="132" width="44" height="10" rx="3" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />

          <circle cx="206" cy="76" r="13" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <path d="M180 154 C180 110 190 98 208 98 C228 98 236 112 236 154 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.2" />
          <rect x="134" y="122" width="46" height="32" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
        </svg>
      );

    case 'product-clinic':
      return (
        <svg
          viewBox="0 0 280 168"
          className={`deck-svg ${className}`}
          role="img"
          aria-label="Ilustrasi klinik tanya jawab soal sulit mingguan bersama tim pengajar"
        >
          <rect x="20" y="14" width="240" height="140" rx="14" fill="#10B981" />
          {/* Globe Illustration */}
          <circle cx="144" cy="48" r="18" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" />
          <path d="M132 42 Q144 48 136 58 M152 38 Q146 50 156 54" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <line x1="144" y1="66" x2="144" y2="76" stroke="#0F172A" strokeWidth="2.4" />

          {/* Left Mentor */}
          <circle cx="104" cy="56" r="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <path d="M74 154 C74 102 84 82 104 82 C124 82 130 100 130 154 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <rect x="86" y="86" width="26" height="22" rx="3" transform="rotate(-14 86 86)" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />

          {/* Center-Right Tutor */}
          <circle cx="176" cy="42" r="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <rect x="166" y="25" width="20" height="8" rx="3" fill="#F59E0B" stroke="#0F172A" strokeWidth="2" />
          <path d="M150 154 C150 92 162 72 184 72 C206 72 216 94 216 154 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />

          {/* Foreground Student */}
          <circle cx="204" cy="94" r="12" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <path d="M180 154 C180 120 190 110 206 110 C224 110 232 122 232 154 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.2" />
          <rect x="116" y="122" width="48" height="32" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
        </svg>
      );

    case 'contact-team':
    default:
      return (
        <svg
          viewBox="0 0 280 168"
          className={`deck-svg ${className}`}
          role="img"
          aria-label="Ilustrasi tim akademik dan konsultasi program TunasCendekia"
        >
          <rect x="20" y="16" width="240" height="136" rx="14" fill="#122D59" />
          <rect x="48" y="34" width="184" height="96" rx="8" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <polygon points="134,68 156,80 156,104 134,116 112,104 112,80" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.2" />
          <polygon points="184,46 196,53 196,67 184,74 172,67 172,53" fill="#10B981" stroke="#0F172A" strokeWidth="2" />
          <circle cx="72" cy="70" r="11" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <path d="M56 152 C56 112 62 96 76 96 C90 96 96 112 96 152 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.2" />
          <circle cx="206" cy="72" r="11" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <path d="M186 152 C186 114 194 98 210 98 C224 98 230 116 230 152 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.2" />
          <rect x="176" y="132" width="54" height="16" rx="4" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.2" />
        </svg>
      );
  }
};
