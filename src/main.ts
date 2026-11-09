import { appData, DATA_URL } from './app-data';

// Load the site's data before the app, because the store's initial state is
// built from it when the store modules are first evaluated.
fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to load ${DATA_URL}: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    Object.assign(appData, data);
    return import('./bootstrap');
  })
  .catch(err => console.error(err));
