import { provide, inject, ref, watchEffect, readonly, type InjectionKey, type Ref } from 'vue';
import { useColorMode, useLocalStorage } from '@vueuse/core';

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  theme: Ref<Theme>;
  setTheme: (theme: Theme) => void;
  resolvedTheme: Ref<'light' | 'dark'>;
}

export const ThemeSymbol: InjectionKey<ThemeContextType> = Symbol('ThemeContext');

export const useThemeProvider = (defaultTheme: Theme = 'system', storageKey: string = 'theme-preference') => {
  const theme = useLocalStorage<Theme>(storageKey, defaultTheme);
  const colorMode = useColorMode({
    selector: 'html',
    attribute: 'class',
    initialValue: defaultTheme,
    storageKey: storageKey,
  });

  const resolvedTheme = ref<'light' | 'dark'>(colorMode.value as 'light' | 'dark');

  watchEffect(() => {
    resolvedTheme.value = colorMode.value as 'light' | 'dark';
  });

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme;
    colorMode.value = newTheme;
  };

  const context: ThemeContextType = {
    theme: theme,
    setTheme,
    resolvedTheme: readonly(resolvedTheme),
  };

  provide(ThemeSymbol, context);

  return context;
};

export const useTheme = () => {
  const context = inject(ThemeSymbol);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
