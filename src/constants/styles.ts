export const classNamePrefix = 'rd';

// constants for pseudo-classes. The `pseudo`-classes are for documenting pseudo
// classes in Storybook/Chromatic
export const pseudoWrapperClassNames = {
  default: '',
  hover: 'pseudo-hover',
  active: 'pseudo-active',
  focusVisible: 'pseudo-focus-visible',
};

// &:hover, .pseudo-hover &`,
// etc.
export const pseudo = {
  hover: `&:hover, .${pseudoWrapperClassNames.hover} &`,
  active: `&:active, .${pseudoWrapperClassNames.active} &`,
  focusVisible: `&:focus-visible, .${pseudoWrapperClassNames.focusVisible} &`,
};
