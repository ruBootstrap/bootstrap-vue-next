// Преобразует PascalCase или camelCase в kebab-case
export const kebabCase = (str: string) => str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
