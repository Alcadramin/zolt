/**
 * The CLI spinner that doesn't suck
 */
class Zolt {
  interval;
  currentFrame = 0;
  spinnerFrames = {
    dots: {
      frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
      speed: 100
    },
    bars: {
      frames: ['|', '/', '-', '\\'],
      speed: 150
    },
    arrows: {
      frames: ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖'],
      speed: 150
    },
    bounce: {
      frames: ['⠁', '⠂', '⠄', '⡀', '⠄', '⠂', '⠁'],
      speed: 75
    }
  };

  /**
   * Start the spinner.
   * @param {('dots'|'bars'|'arrows'|'bounce')} [mode='dots'] - Spinner mode.
   * @param {('black'|'red'|'green'|'yellow'|'blue'|'magenta'|'cyan'|'white'|'brightBlack'|'brightRed'|'brightGreen'|'brightYellow'|'brightBlue'|'brightMagenta'|'brightCyan'|'brightWhite'|'reset')} [color='reset'] - Color of the spinner (supports predefined 32 color codes).
   * @param {string} [text=''] - Text to display next to the spinner.
   */
  static start(mode = 'dots', color = 'reset', text = '') {
    const spinner = new Zolt();
    const { frames, speed } = spinner.spinnerFrames[mode];
    const colorCode = spinner.getColorCode(color);

    spinner.interval = setInterval(() => {
      const frame = frames[spinner.currentFrame];
      process.stdout.write(`\r${colorCode}${frame} ${text}\x1b[0m`);
      spinner.currentFrame = (spinner.currentFrame + 1) % frames.length;
    }, speed);

    this.spinnerInstance = spinner;
  }

  /**
   * Stop the spinner, clear the terminal line, and invoke the optional callback.
   * @param {Function} [callback] - Optional callback to execute after the spinner stops.
   */
  static stop(callback) {
    if (this.spinnerInstance) {
      clearInterval(this.spinnerInstance.interval);
      process.stdout.write('\r\x1b[K');

      if (typeof callback === 'function') {
        callback();
      }

      delete this.spinnerInstance;
    }
  }

  /**
   * Get ANSI color code.
   * @param {string} color - The color name.
   * @returns {string} The ANSI color code.
   */
  getColorCode(color) {
    const colors = {
      black: '\x1b[30m',
      red: '\x1b[31m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      blue: '\x1b[34m',
      magenta: '\x1b[35m',
      cyan: '\x1b[36m',
      white: '\x1b[37m',
      reset: '\x1b[0m',
      brightBlack: '\x1b[90m',
      brightRed: '\x1b[91m',
      brightGreen: '\x1b[92m',
      brightYellow: '\x1b[93m',
      brightBlue: '\x1b[94m',
      brightMagenta: '\x1b[95m',
      brightCyan: '\x1b[96m',
      brightWhite: '\x1b[97m'
    };

    return colors[color] || colors.reset;
  }
}

export { Zolt };
