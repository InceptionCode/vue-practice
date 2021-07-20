export function resolveDto<T, K extends keyof T>(o: T, key: K): T {
  const keys: string[] = Object.keys(o[key]);
  const resolvedDto: T = {} as T;

  keys.forEach((k: string) => {
    resolvedDto[k] = o[key][k];
  });

  return resolvedDto;
}
