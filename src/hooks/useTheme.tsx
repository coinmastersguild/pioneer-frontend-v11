// hooks/useTheme.ts
import { useThemeUI, ThemeUIContextValue } from 'theme-ui';
import { CustomTheme } from '@/theme';  // Adjust this import based on where your theme.ts file is

interface CustomContextValue extends ThemeUIContextValue {
  theme: CustomTheme;
}

export const useTheme = () => {
  const context = useThemeUI() as CustomContextValue;
  const { theme, colorMode, setColorMode } = context;

  // Return as an array for backward compatibility
  return [theme, colorMode, setColorMode]; // This makes it backward compatible with array destructuring
};
