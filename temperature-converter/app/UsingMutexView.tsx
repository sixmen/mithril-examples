import * as m from "mithril";
import * as Stream from "mithril/stream";

import styles = require("./index.css");

class UsingMutexViewModel {
  public celsius: Stream.Stream<string>;
  public fahrenheit: Stream.Stream<string>;

  private mutex: boolean; // prevent recursion

  constructor() {
    this.celsius = Stream("0");
    this.fahrenheit = Stream("");
    this.celsius.map((celsius) => {
      if (this.mutex) {
        return;
      }
      this.mutex = true;
      const fahrenheit = parseFloat(celsius) * 9 / 5 + 32;
      if (isNaN(fahrenheit)) {
        this.fahrenheit("");
      } else {
        this.fahrenheit(String(Math.round(fahrenheit * 100) / 100));
      }
      this.mutex = false;
    });
    this.fahrenheit.map((fahrenheit) => {
      if (this.mutex) {
        return;
      }
      this.mutex = true;
      const celsius = (parseFloat(fahrenheit) - 32) * 5 / 9;
      if (isNaN(celsius)) {
        this.celsius("");
      } else {
        this.celsius(String(Math.round(celsius * 100) / 100));
      }
      this.mutex = false;
    });
  }
}

class UsingMutexView implements m.ClassComponent<{}> {
  private vm: UsingMutexViewModel;

  constructor() {
    this.vm = new UsingMutexViewModel();
  }

  public view() {
    return <div class={styles.root}>
      <div class={styles.block}>
        <div>Celsius</div>
        <input class={styles.input} value={this.vm.celsius()}
          onkeyup={m.withAttr("value", this.vm.celsius)}></input>
      </div>
      <div class={styles.equal}>
        <div>=</div>
      </div>
      <div class={styles.block}>
        <div>Fahrenheit</div>
        <input class={styles.input} value={this.vm.fahrenheit()}
          onkeyup={m.withAttr("value", this.vm.fahrenheit)}></input>
      </div>
    </div>;
  }
}

export default UsingMutexView;
