export const pipe = (...fn) => fn.reduce((f, g) => (...a) => g(f(...a)))
