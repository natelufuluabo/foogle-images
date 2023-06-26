import { atom } from "recoil";

// eslint-disable-next-line
const searchResultsAtom = atom({
    key: 'SearchResults',
    default: []
});

// eslint-disable-next-line
const searchTermAtom = atom({
    key: 'SearchTerm',
    default: ''
});

// eslint-disable-next-line
const appTheme = atom({
    key: 'AppTheme',
    default: 'light'
})