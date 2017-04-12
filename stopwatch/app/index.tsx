/// <reference path='index.d.ts'/>

import * as m from 'mithril';
import * as numeral from 'numeral';

import styles = require('./index.css');

function formatTime(time: number): string {
  const part_s = numeral(Math.floor(time / 1000)).format('00:00:00');
  const part_ms = numeral((time % 1000) / 1000).format('.000');
  return part_s + part_ms;
}

class Stopwatch implements m.ClassComponent<{}> {
  elapsed = 0;
  startTime = 0;
  timer?: number = undefined;

  start() {
    this.stop();
    this.startTime = Date.now();
    this.timer = setInterval(() => {
      m.redraw();
    }, 33);
  }

  stop() {
    if (this.timer) {
      this.elapsed += Date.now() - this.startTime;
      clearInterval(this.timer);
    }
    this.timer = undefined;
  }

  isPaused(): boolean {
    return this.timer === undefined;
  }

  getElapsed(): number {
    let elapsed = this.elapsed;
    if (!this.isPaused()) {
      elapsed += Date.now() - this.startTime;
    }
    return elapsed;
  }

  oninit() {
  }

  onremove() {
    this.stop();
  }

  view() {
    return <div class={styles.root}>
      <div class={styles.time}>{formatTime(this.getElapsed())}</div>
      {this.isPaused() ?
        <button class={styles.start} onclick={() => this.start()}>Start</button>
        :
        <button class={styles.stop} onclick={() => this.stop()}>Stop</button>
      }
    </div>;
  }
}

m.mount(document.getElementById('app')!, Stopwatch);
