import * as m from "mithril";

import LoginView from "./LoginView";

m.route(document.getElementById("app")!, "/login", {
  "/login": LoginView,
});
