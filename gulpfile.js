const path = require('path');
const { task, src, dest, series } = require('gulp');

function copyIcons() {
  const nodeSource = path.resolve('nodes', '**', '*.{png,svg}');
  const nodeDestination = path.resolve('dist', 'nodes');
  src(nodeSource).pipe(dest(nodeDestination));

  const credSource = path.resolve('credentials', '**', '*.{png,svg}');
  const credDestination = path.resolve('dist', 'credentials');
  return src(credSource).pipe(dest(credDestination));
}

function copyLocales() {
  const localeSource = path.resolve('locales', '**', '*.*');
  const localeDestination = path.resolve('dist', 'locales');
  return src(localeSource).pipe(dest(localeDestination));
}

task('build:icons', copyIcons);
task('build:locales', copyLocales);

// Combine both steps
task('build', series('build:icons', 'build:locales'));
