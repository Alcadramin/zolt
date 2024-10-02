import test from 'ava';
import { Zolt } from './zolt';

let writeOutput = '';
const writeStub = text => {
  writeOutput += text;
};

test.beforeEach(() => {
  writeOutput = '';
  process.stdout.write = writeStub;
});

test.serial('start method should initiate spinner and update frame', async t => {
  Zolt.start();
  
  t.truthy(Zolt.spinnerInstance);
  t.is(Zolt.spinnerInstance.currentFrame, 0);
  
  await new Promise(resolve => setTimeout(resolve, 200));
  
  t.is(Zolt.spinnerInstance.currentFrame, 1);
  Zolt.stop();
});

test.serial('stop method should stop the spinner and clear the line', async t => {
  Zolt.start('bars', 'red', 'Processing');
  
  await new Promise(resolve => setTimeout(resolve, 200));
  Zolt.stop();
  
  t.deepEqual(Zolt.spinnerInstance, undefined);
  t.true(writeOutput.includes('\r\x1b[K'));
});

test.serial('getColorCode method should return correct ANSI color code', t => {
  const spinner = new Zolt();
  t.is(spinner.getColorCode('green'), '\x1b[32m');
  t.is(spinner.getColorCode('invalidColor'), '\x1b[0m');
});
