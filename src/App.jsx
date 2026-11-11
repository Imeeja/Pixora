import { useState } from "react";
import useEditor from "./hooks/useEditor";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import CanvasWorkspace from "./components/CanvasWorkspace";
import PropertiesPanel from "./components/PropertiesPanel";

import "./App.css";

function App() {
  const [activeTool, setActiveTool] = useState("upload");

  const { canvasElementRef } = useEditor();

  return (
    <div className="app">
      <Header />

      <main className="editor-layout">
        <Toolbar activeTool={activeTool} setActiveTool={setActiveTool} />

        <CanvasWorkspace canvasElementRef={canvasElementRef} />

        <PropertiesPanel activeTool={activeTool} />
      </main>
    </div>
  );
}

export default App;
