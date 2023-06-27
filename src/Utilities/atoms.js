import { atom } from "recoil";

// eslint-disable-next-line
export const searchResultsAtom = atom({
    key: 'SearchResults',
    default: []
});

// eslint-disable-next-line
export const appThemeAtom = atom({
    key: 'AppTheme',
    default: 'light'
});