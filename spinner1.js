setTimeout(() => {
  process.stdout.write('\r|   ');
}, 200);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 400);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 600);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 800);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r|   \n');
}, 1200);