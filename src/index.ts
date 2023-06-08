import type LocalForageType from 'localforage';
// @ts-ignore this explicit .js file has no typings
import localForageImport from 'localforage/src/localforage.js';

export default localForageImport as typeof LocalForageType;
