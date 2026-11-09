import { execSync } from 'child_process';
import { copyFileSync } from 'fs';

/**
 * Build the Angular app. It doesn't include the site's data (see
 * build-data.ts), so it only needs rebuilding when app code changes.
 */
export function buildApp() {
  console.log('Running app build');
  execSync('ng build --configuration production --subresource-integrity', {
    stdio: 'inherit',
  });

  // Make sure the 404 also runs angular
  copyFileSync(
    'dist/shinypokemon.fun/browser/index.html',
    'dist/shinypokemon.fun/browser/404.html'
  );
}

if (process.argv[1]?.endsWith('build-app.ts')) {
  buildApp();
}
