export const opencodeTokens = {
  colors: {
    // Backgrounds
    background: {
      base: 'var(--bg)',
      surface: 'var(--surface)',
      glass: 'var(--surface)',
      glassLight: 'var(--surface-2)',
<<<<<<< HEAD
      glassDark: 'var(--bg-2)',
    },
    // Primary Accents
    accent: {
      sakura: '#f0a8b8',
      sakuraHover: '#ffd0dc',
      ivory: '#fff1ec',
      purple: '#c04a67',
      purpleHover: '#a83853',
      purpleMuted: 'rgba(240, 168, 184, 0.14)',
      ember: '#ff8f6b',
      emberLight: '#c9532b',
=======
      glassDark: 'var(--card-bg)',
    },
    // Primary Accents
    accent: {
      sakura: 'var(--accent)',
      sakuraHover: 'var(--accent-hover)',
      ivory: 'var(--text)',
      purple: 'var(--accent)',
      purpleHover: 'var(--accent-hover)',
      purpleMuted: 'var(--accent-soft)',
      ember: 'var(--ember)',
      emberLight: 'var(--ember)',
    },
    // Secondary & Accent Colors
    secondary: {
      default: 'var(--secondary)',
      hover: 'var(--secondary-hover)',
      soft: 'var(--secondary-soft)',
      border: 'var(--secondary-border)',
    },
    status: {
      live: {
        bg: 'var(--status-live-bg)',
        text: 'var(--status-live-text)',
        border: 'var(--status-live-border)',
      },
      upcoming: {
        bg: 'var(--status-upcoming-bg)',
        text: 'var(--status-upcoming-text)',
        border: 'var(--status-upcoming-border)',
      },
      concluded: {
        bg: 'var(--status-concluded-bg)',
        text: 'var(--status-concluded-text)',
        border: 'var(--status-concluded-border)',
      },
>>>>>>> 41a2e192442375ced406f4735c79bbc839efac21
    },
    // Leaderboard Ranks
    rank: {
      gold: '#F5C542',
      silver: '#94A3B8',
      bronze: '#D97706',
    },
    // Text
    text: {
      primary: 'var(--fg)',
      secondary: 'var(--muted)',
      muted: 'var(--subtle)',
      inverse: 'var(--accent-ink)',
    },
    // Borders
    border: {
      light: 'var(--line)',
      medium: 'var(--border-strong)',
      primary: 'var(--border)',
    },
  },
  typography: {
<<<<<<< HEAD
    fontFamily: 'var(--f-body), sans-serif',
    display: 'var(--f-display), serif',
    jp: 'var(--f-jp), serif',
    mono: 'var(--f-mono), monospace',
    letterSpacing: {
      widest: '0.28em',
      wider: '0.14em',
=======
    fontFamily: 'var(--f-body), system-ui, sans-serif',
    body: 'var(--f-body), system-ui, sans-serif',
    display: 'var(--f-display), "Cormorant Garamond", Georgia, serif',
    jp: 'var(--f-jp), "Shippori Mincho", serif',
    mono: 'var(--f-mono), "DM Mono", monospace',
    scale: {
      hero: 'var(--fs-hero, clamp(38px, 6vw, 68px))',
      pageTitle: 'var(--fs-page-title, clamp(32px, 5.5vw, 54px))',
      section: 'var(--fs-section, clamp(24px, 3.5vw, 36px))',
      subsection: 'var(--fs-subsection, clamp(18px, 2.5vw, 24px))',
      cardTitle: 'var(--fs-card-title, clamp(16px, 2vw, 20px))',
      xs: 'var(--fs-xs, 12px)',
      sm: 'var(--fs-sm, 13px)',
      base: 'var(--fs-base, 14px)',
      md: 'var(--fs-md, 15px)',
      lg: 'var(--fs-lg, 16px)',
      xl: 'var(--fs-xl, 18px)',
      '2xl': 'var(--fs-2xl, 22px)',
      '3xl': 'var(--fs-3xl, 28px)',
      '4xl': 'var(--fs-4xl, 36px)',
    },
    lineHeights: {
      tight: 'var(--lh-tight, 1.15)',
      snug: 'var(--lh-snug, 1.25)',
      normal: 'var(--lh-normal, 1.5)',
      relaxed: 'var(--lh-relaxed, 1.7)',
    },
    letterSpacing: {
      aside: 'var(--ls-aside, 0.4em)',
      eyebrow: 'var(--ls-eyebrow, 0.28em)',
      widest: 'var(--ls-widest, 0.14em)',
      wider: 'var(--ls-wider, 0.08em)',
      wide: 'var(--ls-wide, 0.04em)',
>>>>>>> 41a2e192442375ced406f4735c79bbc839efac21
      normal: '0',
      tight: '-0.02em',
    },
  },
  shadows: {
    glass: 'var(--shadow)',
    glow: '0 12px 36px -10px var(--accent)',
  },
  borders: {
    radius: {
      sm: '8px',
      md: '14px',
      lg: '18px',
      xl: 'var(--r)',
      full: '9999px',
    },
  },
  glass: {
<<<<<<< HEAD
    backdropFilter: 'blur(16px)',
    border: '1px solid var(--line)',
=======
    backdropFilter: 'blur(20px)',
    border: '1px solid var(--border)',
>>>>>>> 41a2e192442375ced406f4735c79bbc839efac21
    background: 'var(--surface)',
  },
};
