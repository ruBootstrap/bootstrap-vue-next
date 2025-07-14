// Выбирает указанные ключи из объекта
export const pick = <
  A extends Record<PropertyKey, unknown>,
  const B extends ReadonlyArray<PropertyKey>,
>(
  objToPluck: Readonly<A>,
  keysToPluck: Readonly<B> | readonly (keyof A)[]
): Pick<A, B[number]> =>
  [...keysToPluck].reduce(
    (memo, prop) => {
      memo[prop] = objToPluck[prop]
      return memo
    },
    {} as Record<PropertyKey, unknown>
  ) as Pick<A, B[number]>

// Исключает указанные ключи из объекта
export const omit = <
  A extends Record<PropertyKey, unknown>,
  const B extends ReadonlyArray<PropertyKey>,
>(
  objToPluck: Readonly<A>,
  keysToPluck: Readonly<B> | readonly (keyof A)[]
): Omit<A, B[number]> =>
  Object.keys(objToPluck)
    .filter((key) => !keysToPluck.map((el) => el.toString()).includes(key))
    .reduce((result, key) => ({...result, [key]: objToPluck[key]}), {} as Omit<A, B[number]>)

// Преобразует PascalCase или camelCase в kebab-case
export const kebabCase = (str: string) => str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
