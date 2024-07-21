import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

import GettingSetup from "./components/GettingSetup";
import ConfiguringModuleFederation from "./components/ConfiguringModuleFederation";
import SharingCommonModules from "./components/SharingCommonModules";
import FaultTolerance from "./components/FaultTolerance";
import AddingMoreMicroFrontends from "./components/AddingMoreMicroFrontends";

const Workshop = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route path="set-up" element={<GettingSetup />} />
        <Route path="exercise-1" element={<ConfiguringModuleFederation />} />
        <Route path="exercise-2" element={<SharingCommonModules />} />
        <Route path="exercise-3" element={<FaultTolerance />} />
        <Route path="exercise-4" element={<AddingMoreMicroFrontends />} />
      </Route>
    </Routes>
  );
};

export default Workshop;
