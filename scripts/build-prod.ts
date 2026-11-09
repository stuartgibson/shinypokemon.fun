import { buildApp } from './build-app';
import { buildData } from './build-data';

// Full production build: the app, then the data files written into it.
buildApp();
buildData();
console.log('Build complete');
