import { Nullable } from 'ts-toolbelt/out/Object/Nullable';

// iterate over an object and make all object properties null
export function objToNull<T extends object>(obj: T): Nullable<T, '', 'deep'> {
  return Object.entries(obj).reduce<any>((acc, [key, value]) => {
    if (typeof value === 'object') {
      return { ...acc, [key]: objToNull(value) };
    }

    return { ...acc, [key]: null };
  }, {});
}
