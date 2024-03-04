// Define dependencies
const { series, parallel, task } = require('sarata');

// Define tasks
const clean = task('clean', () => {
  console.log('Cleaning up...');
  // Logic to clean up files/directories
});

const lint = task('lint', () => {
  console.log('Linting files...');
  // Logic to lint files
});

const build = task('build', () => {
  console.log('Building project...');
  // Logic to build project
});

const test = task('test', () => {
  console.log('Running tests...');
  // Logic to run tests
});

const deploy = task('deploy', () => {
  console.log('Deploying project...');
  // Logic to deploy project
});

// Define task sequences
const buildTasks = series(clean, lint, build);
const testTasks = series(buildTasks, test);
const deployTasks = series(testTasks, deploy);

// Define default task
const defaultTask = deployTasks;

// Export default task
module.exports = defaultTask;
