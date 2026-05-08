/**
 * AXIAL LABS · DESIGN TOKENS · TAILWIND THEME EXTENSION
 * v1.0 · generated 2026-05-07
 *
 * Usage:
 *   const axialTokens = require('./tokens/build/tokens.tailwind.js');
 *   module.exports = { theme: { extend: axialTokens } };
 *
 * Or inline (CDN mode):
 *   <script>tailwind.config = { theme: { extend: <this object> } }</script>
 */

const axialTokens = {
  colors: {
    axial: {
      black:          '#0A0A0B',
      bone:           '#F4F2EC',
      voltage:        '#C6F24E',
      'voltage-dim':  '#9DC23A',
      ion:            '#3D5BFF',
      plasma:         '#FF4D2E',
      mercury:        '#B8C2CC',
    },
    graphite: {
      900: '#0A0A0B',
      800: '#1A1B1E',
      700: '#26282D',
      600: '#3A3D44',
      500: '#5A5E68',
      400: '#878C97',
      300: '#B5B9C2',
      200: '#D8DAE0',
      100: '#ECEDEF',
      50:  '#F4F2EC',
    },
  },

  fontFamily: {
    display:   ['"Neue Haas Grotesk Display"', '"Inter Display"', 'system-ui', 'sans-serif'],
    body:      ['Inter', 'system-ui', 'sans-serif'],
    editorial: ['"Source Serif 4"', 'Georgia', 'serif'],
    mono:      ['"JetBrains Mono"', '"Berkeley Mono"', 'monospace'],
    sans:      ['Inter', 'system-ui', 'sans-serif'],
  },

  fontSize: {
    '12':  ['0.75rem',  { lineHeight: '1.5' }],
    '14':  ['0.875rem', { lineHeight: '1.5' }],
    '16':  ['1rem',     { lineHeight: '1.5' }],
    '20':  ['1.25rem',  { lineHeight: '1.5' }],
    '24':  ['1.5rem',   { lineHeight: '1.1' }],
    '32':  ['2rem',     { lineHeight: '1.1' }],
    '40':  ['2.5rem',   { lineHeight: '1.1' }],
    '56':  ['3.5rem',   { lineHeight: '1.1' }],
    '72':  ['4.5rem',   { lineHeight: '1.0' }],
    '96':  ['6rem',     { lineHeight: '1.0' }],
    '128': ['8rem',     { lineHeight: '1.0' }],
    '160': ['10rem',    { lineHeight: '1.0' }],
  },

  letterSpacing: {
    tightest: '-0.03em',
    tight:    '-0.02em',
    tighter:  '-0.01em',
    normal:    '0em',
    wide:     '0.02em',
    wider:    '0.06em',
  },

  spacing: {
    '0':  '0px',
    '1':  '4px',
    '2':  '8px',
    '3':  '12px',
    '4':  '16px',
    '5':  '20px',
    '6':  '24px',
    '8':  '32px',
    '10': '40px',
    '12': '48px',
    '16': '64px',
    '20': '80px',
    '24': '96px',
    '32': '128px',
    '48': '192px',
    '64': '256px',
  },

  maxWidth: {
    prose:     '640px',
    container: '1280px',
    wide:      '1440px',
  },

  borderRadius: {
    none: '0px',
    sm:   '4px',
    md:   '8px',
    full: '9999px',
  },

  boxShadow: {
    'z1':           'inset 0 0 0 1px #26282D',
    'z1-light':     'inset 0 0 0 1px #D8DAE0',
    'z2':           '0 8px 24px rgba(10, 10, 11, 0.4), inset 0 0 0 1px #26282D',
    'z2-light':     '0 8px 24px rgba(10, 10, 11, 0.08), inset 0 0 0 1px #D8DAE0',
    'z3-modal':     '0 24px 64px rgba(10, 10, 11, 0.6)',
    'glow-soft':    '0 0 24px rgba(198, 242, 78, 0.35)',
    'glow-strong':  '0 0 48px rgba(198, 242, 78, 0.55), 0 0 96px rgba(198, 242, 78, 0.25)',
    'focus':        '0 0 0 2px #0A0A0B, 0 0 0 4px #C6F24E',
  },

  transitionTimingFunction: {
    axial:    'cubic-bezier(0.32, 0.72, 0, 1)',
    'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
    out:      'cubic-bezier(0, 0, 0.35, 1)',
  },

  transitionDuration: {
    instant: '120ms',
    ui:      '240ms',
    hero:    '600ms',
    epic:    '1200ms',
  },

  zIndex: {
    '0':  '0',
    '1':  '10',
    '2':  '100',
    '3':  '1000',
    '4':  '10000',
  },

  backgroundImage: {
    'axis-mesh':     'radial-gradient(circle at 50% 50%, #C6F24E 0%, #0A0A0B 70%)',
    'glow-field':    'linear-gradient(135deg, #3D5BFF 0%, #0A0A0B 100%)',
    'ion-mist':      'radial-gradient(circle at 30% 30%, #3D5BFF 0%, #0A0A0B 60%)',
    'voltage-fade':  'linear-gradient(180deg, #C6F24E 0%, rgba(198,242,78,0) 100%)',
    'graphite-veil': 'linear-gradient(180deg, rgba(10,10,11,0) 0%, #0A0A0B 100%)',
  },

  screens: {
    sm:   '480px',
    md:   '768px',
    lg:   '1024px',
    xl:   '1280px',
    '2xl':'1440px',
  },

  backdropBlur: {
    scrim:  '12px',
    subtle: '4px',
  },
};

if (typeof module !== 'undefined') module.exports = axialTokens;
if (typeof window !== 'undefined') window.axialTokens = axialTokens;
