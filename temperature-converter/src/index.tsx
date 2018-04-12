// tslint:disable-next-line:no-reference
/// <reference path="index.d.ts"/>

import * as m from "mithril";
import * as Stream from "mithril/stream";

import styles = require("./index.css");

import UsingMutexView from "./UsingMutexView";
import UsingRawView from "./UsingRawView";

class TemperatureConverterViewModel {
  constructor() {
    //
  }
}

class TemperatureConverterView implements m.ClassComponent<{}> {
  private vm: TemperatureConverterViewModel;

  constructor() {
    this.vm = new TemperatureConverterViewModel();
  }

  public view() {
    return <div class={styles.root}>
      <h4 class={styles.title}>Using Raw</h4>
      <UsingRawView />
      <h4 class={styles.title}>Using Mutex</h4>
      <UsingMutexView />
    </div>;
  }
}

m.mount(document.getElementById("app")!, TemperatureConverterView);
