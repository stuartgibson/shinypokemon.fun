import { copyFile, copyFileSync } from "fs";
import { generateApis } from "./generate-api"
import {execSync } from 'child_process';

console.log("Running Build Script");

// Create the static JSON files
console.log("Generating API files");
generateApis();

// Run the actual build
console.log("Running build");
execSync(
    'ng build --configuration production --subresource-integrity', 
    {stdio: 'inherit'}
);

// Make sure the 404 also runs angular
console.log("Copying files");
copyFileSync('dist/shinypokemon.fun/browser/index.html', 'dist/shinypokemon.fun/browser/404.html');

console.log("Build complete");
