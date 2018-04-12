// tslint:disable-next-line:no-reference
/// <reference path="index.d.ts"/>

import * as m from "mithril";
import * as Stream from "mithril/stream";

import styles = require("./LoginView.css");

interface ILoginViewAttrs {
  email?: string;
  onlogin?: () => void;
}

class LoginViewModel {
  public email: Stream.Stream<string>;
  public emailValid: Stream.Stream<boolean>;
  public password: Stream.Stream<string>;
  public passwordValid: Stream.Stream<boolean>;
  public allValid: Stream.Stream<boolean>;
  private onlogin?: (email: string) => void;

  constructor(attrs: ILoginViewAttrs) {
    this.onlogin = attrs.onlogin;
    this.email = Stream(attrs.email || "");
    this.emailValid = this.email.map((email) => {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
    });
    this.password = Stream("");
    this.passwordValid = this.password.map((password) => {
      return password.length > 0;
    });
    this.allValid = Stream.merge([this.emailValid, this.passwordValid])
      .map(([emailValid, passwordValid]: [boolean, boolean]) => {
        return emailValid && passwordValid;
      });
  }

  public login(event: Event) {
    event.preventDefault();

    if (this.onlogin) {
      this.onlogin(this.email());
    }
  }
}

class LoginView implements m.ClassComponent<ILoginViewAttrs> {
  private vm: LoginViewModel;

  public oninit({attrs}: m.CVnode<ILoginViewAttrs>) {
    this.vm = new LoginViewModel(attrs);
  }

  public view() {
    return <form onsubmit={(event) => this.vm.login(event)}>
      <div class={`${styles.form_group} ${this.vm.emailValid() ? "" : styles.invalid}`}>
        <label>
          <span class={styles.label}>Email</span>
          <input type="email" class={styles.form_control}
                value={this.vm.email()} oninput={m.withAttr("value", this.vm.email)}/>
          {!this.vm.emailValid() &&
            <small class={styles.form_text}>Please input a valid email</small>}
        </label>
      </div>
      <div class={`${styles.form_group} ${this.vm.passwordValid() ? "" : styles.invalid}`}>
        <label>
          <span class={styles.label}>Password</span>
          <input type="password" class={styles.form_control}
                value={this.vm.password()} oninput={m.withAttr("value", this.vm.password)}/>
          {!this.vm.passwordValid() &&
            <small class={styles.form_text}>Please input your password</small>}
        </label>
      </div>
      <button class={`${styles.button} ${this.vm.allValid() ? "" : styles.disabled}`} type="submit">Login</button>
    </form>;
  }
}

export default LoginView;
