import { css } from 'styled-components';

const variables = css`
  :root {
    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;

      
--dark-midnight-blue: #000c19;
--midnight-blue: #191970;
--light-midnight-blue: #2c3b59;
--lightest-midnight-blue: #415284;
--midnight-blue-shadow: rgba(0, 12, 25, 0.7);
--dark-silver: #404040;
--silver: #C0C0C0;
--light-silver: #E0E0E0;
--lightest-silver: #F2F2F2;
--pearl-white: #F8F8FF;
--accent-blue: #0047AB;
--accentblue: #0047AB;
--light-accent-blue: #5893D4;
--accent-gray: #808080;
--accent-silver: #BEBEBE;
--midnightblue: #191970;
--darkmidnightblue: #000c19;
  }
`;

export default variables;
