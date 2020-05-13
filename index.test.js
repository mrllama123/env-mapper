const {setEnv} = require('./set-env');
const process = require('process');
const cp = require('child_process');
const path = require('path');

const mappingString = `
test:
  SOME_ENV: some value
uat:
  SOME_ENV: some value
prod:
  SOME_ENV: some value
`

test('key not in mapping', async() => {
    await expect(setEnv(mappingString, 'some_key', false)).rejects.toThrow('key not in mapping object');
});

// test('wait 500 ms', async() => {
//     const start = new Date();
//     await wait(500);
//     const end = new Date();
//     var delta = Math.abs(end - start);
//     expect(delta).toBeGreaterThan(450);
// });

// // shows how the runner will run a javascript action with env / stdout protocol
// test('test runs', () => {
//     process.env['INPUT_MILLISECONDS'] = 500;
//     const ip = path.join(__dirname, 'index.js');
//     console.log(cp.execSync(`node ${ip}`).toString());
// })
