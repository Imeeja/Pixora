import { useState } from "react";

import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import CanvasWorkspace from "./components/CanvasWorkspace";
import PropertiesPanel from "./components/PropertiesPanel";

import "./App.css";

function App() {
  const [activeTool, setActiveTool] = useState("upload");

  return (
    <div className="app">
      <Header />

      <main className="editor-layout">
        <Toolbar activeTool={activeTool} setActiveTool={setActiveTool} />

        <CanvasWorkspace />

        <PropertiesPanel activeTool={activeTool} />
      </main>
    </div>
  );
}

export default App;
