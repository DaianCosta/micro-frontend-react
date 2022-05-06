import * as React from "react";
import * as singleSpa from "single-spa";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function DisabledTabs() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    singleSpa.navigateToUrl("/");
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        singleSpa.navigateToUrl("dash");
        break;
      case 1:
        singleSpa.navigateToUrl("app1");
        break;
      case 2:
        singleSpa.navigateToUrl("app2");
        break;
      case 3:
        singleSpa.navigateToUrl("app-vue");
        break;
      default:
        break;
    }
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Dash" />
      <Tab label="App1" />
      <Tab label="App2" />
      <Tab label="App-vue" />
    </Tabs>
  );
}
