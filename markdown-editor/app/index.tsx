/// <reference path="index.d.ts"/>

import * as marked from "marked";
import * as m from "mithril";
import * as Stream from "mithril/stream";

import styles = require("./index.css");

class MarkdownEditor implements m.ClassComponent<{}> {
  private source = Stream("# Markdown Editor\n\nThis is a simple *Markdown* editor using **Mithril**.");
  private compiled: Stream.Stream<string>;

  public oninit() {
    this.compiled = this.source.map((source) => marked(source));
  }

  public view() {
    return <div class={styles.root}>
      <textarea class={styles.source} value={this.source()} oninput={m.withAttr("value", this.source)} />
      <div class={styles.compiled}>{m.trust(this.compiled())}</div>
    </div>;
  }
}

m.mount(document.getElementById("app")!, MarkdownEditor);
