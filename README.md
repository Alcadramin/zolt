<p align="center">
  <img src="https://storage.googleapis.com/engineerhub-static/zolt.png?v=1" alt="Zolt" />
</p>
<p align="center">
  <a href="https://github.com/Alcadramin/zolt/actions/workflows/build.yaml" target="_blank">
    <img src="https://github.com/Alcadramin/zolt/actions/workflows/build.yaml/badge.svg?branch=main" alt="Build Status"/>
  </a>
  <a href="https://github.com/Alcadramin/zolt/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/Alcadramin/zolt" />
  </a>
  <a href="https://github.com/Alcadramin/zolt/blob/main/LICENSE.md" target="_blank">
    <img src="https://img.shields.io/github/license/Alcadramin/zolt" />
  </a>
</p>

## Zolt - The CLI Spinner That Doesn't Suck

### Why Zolt?!

Look, we get it. You've used **Ora** and a thousand other spinners with a million dependencies. Do you _really_ need half the npm registry installed just to show a couple of spinning dots? **Zolt** ⚡ is here to save you (and your poor hard drive).

- **1KB of pure, unadulterated performance.** Yep, just 1KB! Smaller than your average tweet.
- **CommonJS AND ESModules.** We’re fancy like that.
- **No dependencies.** That’s right, Zolt runs without dragging in 500 packages you’ll never care about.

So if you’re tired of bloated spinners that make you question why you even needed one in the first place, give Zolt a spin (pun intended).

## Install

Let's face it, if you can't install Zolt, you probably shouldn't be spinning anything anyway. But here you go:

```bash
# Install via pnpm, because you're using the best package manager, right?
pnpm install zolt
```

## Usage

It's almost embarrassingly easy to use Zolt. Here’s how:

### CommonJS (because not everyone is cool enough for ESM):

```javascript
const { Zolt } = require('zolt');

Zolt.start('dots', 'cyan', 'Loading...');
setTimeout(() => Zolt.stop(), 5000);
```

### ESModules (because you’re modern and hip):

```javascript
import { Zolt } from 'zolt';

Zolt.start('dots', 'green', 'Creating awesome stuff 🚀');
setTimeout(() => Zolt.stop(), 5000);
```

## API

Zolt is simple, because you don’t need a PhD to understand a spinner.

### `Zolt.start([mode], [color], [text])`

- **mode** (`'dots' | 'bars'`): The style of the spinner. Because we know you want options, even if it's just two.
- **color** (`'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'brightBlack' | 'brightRed' | 'brightGreen' | 'brightYellow' | 'brightBlue' | 'brightMagenta' | 'brightCyan' | 'brightWhite'`): Pick a color, any color! Or just leave it if you're too indecisive.
- **text** (`string`): The _optional_ text you want next to your spinner. Could be “Loading…” or your existential crisis, whatever suits the mood.

### `Zolt.stop([callback])`

- **callback** (`function`): Because we care about your code finishing gracefully, we allow you to run a callback when the spinner stops. Maybe log a "finished" message, or just reflect on how good you are at making spinners stop.

## Why You'll Love Zolt

1. **Minimalism at its finest** – No need to clutter your project with useless dependencies just to show some spinning dots.
2. **Compatible with your lifestyle** – Whether you’re a CommonJS traditionalist or an ESModule futurist, Zolt doesn’t judge.
3. **Tiny, but mighty** – 1KB of functionality. You’ve probably written longer commit messages.
4. **Dependability without dependencies** – Zolt spins, stops, and keeps your terminal looking clean. That’s it. Simple, reliable, no drama.

Enjoy spinning, and remember, if your spinner has dependencies, it’s not Zolt.

## License

This repository is licensed under the [MIT](LICENSE.md) License.
