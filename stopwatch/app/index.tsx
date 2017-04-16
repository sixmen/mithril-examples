/// <reference path="index.d.ts"/>

import * as m from "mithril";
import * as numeral from "numeral";

import styles = require("./index.css");

function formatTime(time: number): string {
  const partS = numeral(Math.floor(time / 1000)).format("00:00:00");
  const partMs = numeral((time % 1000) / 1000).format(".000");
  return partS + partMs;
}

class Stopwatch implements m.ClassComponent<{}> {
  private elapsed = 0;
  private startTime = 0;
  private timer?: number = undefined;

  public onremove() {
    this.stop();
  }

  public view() {
    return <div class={styles.root}>
      <div class={styles.time}>{formatTime(this.getElapsed())}</div>
      {this.isPaused() ?
        <button class={styles.start} onclick={() => this.start()}>Start</button>
        :
        <button class={styles.stop} onclick={() => this.stop()}>Stop</button>
      }
    </div>;
  }

  private start() {
    this.stop();
    this.startTime = Date.now();
    this.timer = setInterval(() => {
      m.redraw();
    }, 33);
  }

  private stop() {
    if (this.timer) {
      this.elapsed += Date.now() - this.startTime;
      clearInterval(this.timer);
    }
    this.timer = undefined;
  }

  private isPaused(): boolean {
    return this.timer === undefined;
  }

  private getElapsed(): number {
    let elapsed = this.elapsed;
    if (!this.isPaused()) {
      elapsed += Date.now() - this.startTime;
    }
    return elapsed;
  }
}

m.mount(document.getElementById("app")!, Stopwatch);
