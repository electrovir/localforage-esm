import localforage from '..';

localforage.getItem('my-item').then((value) => console.log(value));
