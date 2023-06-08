# localforage-esm

Simple ESM wrapper for [`localforage`](https://www.npmjs.com/localforage). All this does is re-export the internals of localForage such that they are ESM compatible and still type safe.

See [`localforage`](https://www.npmjs.com/localforage) for all docs.

# Usage

Same usage as [`localforage`](https://www.npmjs.com/localforage), just make sure to import the default localforage export:

<!-- example-link: src/readme-examples/usage.example.ts  -->

```TypeScript
import localforage from 'localforage-esm';

localforage.getItem('my-item').then((value) => console.log(value));
```
