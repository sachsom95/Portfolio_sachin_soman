import { createContext, useContext } from 'react';

export const ThemeContext = createContext('light');

// The same scene has a separate pencil treatment for each paper colour.
export function Artwork({ src, className = '', ...props }) {
  const theme = useContext(ThemeContext);
  const themedSource = theme === 'dark' ? src.replace('.webp', '-dark.webp') : src;
  return <img {...props} className={className} src={themedSource} />;
}
