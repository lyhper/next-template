import { atom, AtomOptions, RecoilState } from 'recoil';

const atomKeyMap = {};

export default function getUniqueAtom<T>(opts: AtomOptions<T>): RecoilState<T> {
  let key = opts.key;

  if (!atomKeyMap[key]) {
    atomKeyMap[key] = 0;
  }
  
  atomKeyMap[key] += 1;
  key = `${key}_${atomKeyMap[key]}`;

  const atomState = atom({
    key,
    default: opts.default,
  });

  return atomState;
}
