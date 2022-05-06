import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mfe/navbar2",
  app: () => System.import("@mfe/navbar2"),
  activeWhen: () => true,
});

registerApplication({
  name: "@mfe/dashboard",
  app: () => System.import("@mfe/dashboard"),
  activeWhen: ["/dash"],
});

registerApplication({
  name: "@mfe/app1",
  app: () => System.import("@mfe/app1"),
  activeWhen: ["/app1"],
});

registerApplication({
  name: "@mfe/app2",
  app: () => System.import("@mfe/app2"),
  activeWhen: ["/app2"],
});

registerApplication({
  name: "@mfe/app-vue",
  app: () => System.import("@mfe/app-vue"),
  activeWhen: ["/app-vue"],
});

start({
  urlRerouteOnly: true,
});
