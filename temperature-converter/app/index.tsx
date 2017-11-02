/// <reference path="index.d.ts"/>

import * as m from "mithril";
import * as Stream from "mithril/stream";

import styles = require("./index.css");

class TemperatureConverterViewModel {
  public celsiusRaw: Stream.Stream<string>;
  public fahrenheitRaw: Stream.Stream<string>;
  public celsius: Stream.Stream<string>;
  public fahrenheit: Stream.Stream<string>;

  constructor() {
    this.celsiusRaw = Stream("0");
    this.fahrenheitRaw = Stream("32");
    this.celsius = Stream("");
    this.fahrenheit = Stream("");
    this.celsiusRaw.map((celsius) => {
      this.celsius(celsius);
      const fahrenheit = parseFloat(celsius) * 9 / 5 + 32;
      if (isNaN(fahrenheit)) {
        this.fahrenheit("");
      } else {
        this.fahrenheit(String(Math.round(fahrenheit * 100) / 100));
      }
    });
    this.fahrenheitRaw.map((fahrenheit) => {
      this.fahrenheit(fahrenheit);
      const celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
      if (isNaN(celsius)) {
        this.celsius("");
      } else {
        this.celsius(String(Math.round(celsius * 100) / 100));
      }
    });
  }
}

class TemperatureConverterView implements m.ClassComponent<{}> {
  private vm: TemperatureConverterViewModel;

  constructor() {
    this.vm = new TemperatureConverterViewModel();
  }

  public view() {
    return <div class={styles.root}>
      <div class={styles.block}>
        <div>Celsius</div>
        <input class={styles.input} value={this.vm.celsius()}
          onkeyup={m.withAttr("value", this.vm.celsiusRaw)}></input>
      </div>
      <div class={styles.equal}>
        <div>=</div>
      </div>
      <div class={styles.block}>
        <div>Fahrenheit</div>
        <input class={styles.input} value={this.vm.fahrenheit()}
          onkeyup={m.withAttr("value", this.vm.fahrenheitRaw)}></input>
      </div>
    </div>;
  }
}

m.mount(document.getElementById("app")!, TemperatureConverterView);
