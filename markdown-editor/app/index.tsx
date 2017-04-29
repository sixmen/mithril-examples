/// <reference path="index.d.ts"/>

import * as marked from "marked";
import * as m from "mithril";
import * as Stream from "mithril/stream";

import styles = require("./index.css");

class MarkdownEditorViewModel {
  public source = Stream("# Markdown Editor\n\nThis is a simple *Markdown* editor using **Mithril**.");
  public compiled: Stream.Stream<string>;

  constructor() {
    this.compiled = this.source.map((source) => marked(source));
  }
}

class MarkdownEditorView implements m.ClassComponent<{}> {
  private vm: MarkdownEditorViewModel;

  constructor() {
    this.vm = new MarkdownEditorViewModel();
  }

  public view() {
    return <div class={styles.root}>
      <textarea class={styles.source} value={this.vm.source()} oninput={m.withAttr("value", this.vm.source)} />
      <div class={styles.compiled}>{m.trust(this.vm.compiled())}</div>
    </div>;
  }
}

m.mount(document.getElementById("app")!, MarkdownEditorView);
