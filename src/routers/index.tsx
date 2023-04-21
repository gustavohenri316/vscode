import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { SettingsJson } from "../pages/SettingsJson";
import { LayoutDefault } from "../layout/Default";
import { Home } from "../pages/Home";
import { ExtensionJson } from "../pages/ExtensionJson";

export function Router() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="settings" element={<SettingsJson />} />
          <Route path="extensions" element={<ExtensionJson />} />
        </Route>
      </Routes>
    </Fragment>
  );
}
