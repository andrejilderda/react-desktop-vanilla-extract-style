import { NestedObjKeys } from '../../types/flat';
import { getLightDarkColors } from '../../utils/theme-helpers';
import tokens from '../tokens';

type TokenNames = NestedObjKeys<typeof tokens.macos.light>;

export const variables = {
  'font-family': {
    system: 'system-ui, BlinkMacSystemFont, sans-serif',
  },
};
const globalColors: Record<string, TokenNames> = {
  background: 'windows.windowBackground',
};

export const colors = getLightDarkColors('macos', globalColors);

export default variables;
