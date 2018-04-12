declare var require: any;

import { action } from "@storybook/addon-actions";
import backgrounds from "@storybook/addon-backgrounds/mithril";
import { text, withKnobs } from "@storybook/addon-knobs/mithril";
import { storiesOf } from "@storybook/mithril";
import * as m from "mithril";

import LoginView from "./LoginView";

const loginAction = action("login");

storiesOf("LoginView")
  .addDecorator(withKnobs)
  .addDecorator(backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "green", value: "#85ed6f" },
  ]))
  .add("no input", () => ({
    view: () =>
      <LoginView onlogin={(email) => loginAction(email)} />,
  }))
  .add("with a valid email", () => {
    const emailKnob = text("Email", "foobar@example.com");
    return {
      view: () =>
        <LoginView onlogin={(email) => loginAction(email)} email={emailKnob} />,
    };
  });
