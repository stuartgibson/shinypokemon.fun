import { generateApis } from './generate-api';
import { generateData } from './generate-data';

/**
 * Generate the data files from src/data: data.json (loaded by the app at
 * startup) and the public JSON API.
 *
 * Writes into the built site by default. Pass a directory to write somewhere
 * else, e.g. `src/assets` for the dev server.
 */
export function buildData(assetsDir = 'dist/shinypokemon.fun/browser/assets') {
  console.log(`Generating data files in ${assetsDir}`);
  generateData(assetsDir);
  generateApis(assetsDir);
}

if (process.argv[1]?.endsWith('build-data.ts')) {
  buildData(process.argv[2]);
}
