import getUniqueAtom from '../../utils/getUniqueAtom';

export const globalStateAtom = getUniqueAtom({
  key: 'globalState',
  default: 'this state is from recoil',
});
