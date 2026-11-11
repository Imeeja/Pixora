
import { useState } from "react";
import { Textbox } from "fabric";

import useEditor from "./hooks/useEditor";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import CanvasWorkspace from "./components/CanvasWorkspace";
import PropertiesPanel from "./components/PropertiesPanel";

import "./App.css";

function App() {
  const [activeTool, setActiveTool] = useState("upload");

  const {
    canvasElementRef,
    addObject,
    selectedObjectProperties,
    updateSelectedObject,
  } = useEditor();

  // Add a new text object to the canvas
  function handleAddText() {
    const text = new Textbox("Your text", {
      left: 100,
      top: 100,
      width: 350,
      fontSize: 32,
      fontFamily: "Arial",
      fill: "#292832",
    });

    addObject(text, "text");
  }

  return (
    <div className="app">
      <Header />

      <main className="editor-layout">
        <Toolbar
          activeTool={activeTool}
          setActiveTool={setActiveTool}
        />

        <CanvasWorkspace canvasElementRef={canvasElementRef} />

        <PropertiesPanel
          activeTool={activeTool}
          onAddText={handleAddText}
          selectedObjectProperties={selectedObjectProperties}
          updateSelectedObject={updateSelectedObject}
        />
      </main>
    </div>
  );
}

export default App;
