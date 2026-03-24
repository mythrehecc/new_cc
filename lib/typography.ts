export const typography = {
  // Standardized heading sizes
  h1: "text-2xl md:text-3xl font-bold leading-tight text-gray-900",
  h2: "text-xl md:text-2xl font-bold leading-tight text-gray-900",
  h3: "text-lg md:text-xl font-semibold leading-tight text-gray-900",
  h4: "text-base md:text-lg font-semibold leading-tight text-gray-900",
  h5: "text-sm md:text-base font-semibold leading-tight text-gray-900",
  h6: "text-sm font-semibold leading-tight text-gray-900",
  
  // Standardized paragraph sizes
  p: "text-sm text-gray-700 leading-relaxed",
  pLarge: "text-base text-gray-700 leading-relaxed",
  pSmall: "text-xs text-gray-600 leading-relaxed",
  
  // Button text
  button: "text-sm font-medium",
  buttonLarge: "text-base font-medium",
  buttonSmall: "text-xs font-medium",
  
  // Navigation
  nav: "text-sm font-medium",
  navActive: "text-sm font-bold",
};

export const spacing = {
  // Section spacing
  sectionSmall: "py-8 md:py-12",
  section: "py-12 md:py-16",
  sectionLarge: "py-16 md:py-20",
  
  // Container
  container: "max-w-6xl mx-auto px-4 sm:px-6",
  containerSmall: "max-w-4xl mx-auto px-4 sm:px-6",
  containerLarge: "max-w-7xl mx-auto px-4 sm:px-6",
  
  // Gap utilities
  gap: {
    small: "space-y-4",
    medium: "space-y-6",
    large: "space-y-8",
    xlarge: "space-y-12",
  },
  
  // Margin utilities
  mb: {
    small: "mb-4",
    medium: "mb-6",
    large: "mb-8",
    xlarge: "mb-12",
  },
  
  // Padding utilities
  p: {
    small: "p-4",
    medium: "p-6",
    large: "p-8",
  },
};

export const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
};
