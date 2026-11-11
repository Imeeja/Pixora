
import { useEffect, useRef, useState } from "react";
import { Canvas } from "fabric";

function useEditor() {
  const canvasElementRef = useRef(null);
  const fabricCanvasRef = useRef(null);

  const [selectedObject, setSelectedObject] = useState(null);
  const [selectedObjectProperties, setSelectedObjectProperties] =
    useState(null);

  // Create a readable snapshot of the selected object's properties
  function getObjectProperties(object) {
    if (!object) return null;

    return {
      id: object.id,
      objectType: object.objectType,
      type: object.type,
      left: Math.round(object.left ?? 0),
      top: Math.round(object.top ?? 0),
      width: Math.round(object.getScaledWidth()),
      height: Math.round(object.getScaledHeight()),
      angle: Math.round(object.angle ?? 0),
      fill: object.fill,
      opacity: object.opacity,
      text: object.text,
      fontFamily: object.fontFamily,
      fontSize: object.fontSize,

      // Text style properties
      fontWeight: object.fontWeight ?? "normal",
      fontStyle: object.fontStyle ?? "normal",
    };
  }

  // Synchronize the selected object with React
  function syncSelection(canvas) {
    const object = canvas.getActiveObject() ?? null;

    setSelectedObject(object);
    setSelectedObjectProperties(getObjectProperties(object));
  }

  useEffect(() => {
    if (!canvasElementRef.current) return;

    const fabricCanvas = new Canvas(canvasElementRef.current, {
      width: 1080,
      height: 1080,
      backgroundColor: "#F3F0F8",
      preserveObjectStacking: true,
    });

    fabricCanvasRef.current = fabricCanvas;

    // Fabric.js selection events
    const handleSelectionChange = () => {
      syncSelection(fabricCanvas);
    };

    const handleSelectionClear = () => {
      setSelectedObject(null);
      setSelectedObjectProperties(null);
    };

    // Update properties after moving, resizing, or rotating
    const handleObjectModified = () => {
      syncSelection(fabricCanvas);
    };

    fabricCanvas.on("selection:created", handleSelectionChange);
    fabricCanvas.on("selection:updated", handleSelectionChange);
    fabricCanvas.on("selection:cleared", handleSelectionClear);
    fabricCanvas.on("object:modified", handleObjectModified);

    fabricCanvas.requestRenderAll();

    return () => {
      fabricCanvas.off("selection:created", handleSelectionChange);
      fabricCanvas.off("selection:updated", handleSelectionChange);
      fabricCanvas.off("selection:cleared", handleSelectionClear);
      fabricCanvas.off("object:modified", handleObjectModified);

      fabricCanvas.dispose();
      fabricCanvasRef.current = null;
    };
  }, []);

  // Get the existing Fabric canvas
  function getCanvas() {
    return fabricCanvasRef.current;
  }

  // Add any Fabric object to the existing canvas
  function addObject(object, objectType) {
    const canvas = getCanvas();

    if (!canvas || !object) return;

    object.set({
      id: crypto.randomUUID(),
      objectType,
      selectable: true,
      evented: true,
    });

    canvas.add(object);
    canvas.setActiveObject(object);
    canvas.requestRenderAll();

    syncSelection(canvas);

    return object;
  }

  // Update properties of the currently selected object(s)
  function updateSelectedObject(properties) {
    const canvas = getCanvas();

    if (!canvas) return;

    const objects = canvas.getActiveObjects();

    if (objects.length === 0) return;

    objects.forEach((object) => {
      object.set(properties);
    });

    canvas.requestRenderAll();
    syncSelection(canvas);
  }

  // Delete selected object(s)
  function deleteSelectedObject() {
    const canvas = getCanvas();

    if (!canvas) return;

    const objects = canvas.getActiveObjects();

    if (objects.length === 0) return;

    objects.forEach((object) => {
      canvas.remove(object);
    });

    canvas.discardActiveObject();
    canvas.requestRenderAll();

    setSelectedObject(null);
    setSelectedObjectProperties(null);
  }

  // Deselect without deleting
  function clearSelection() {
    const canvas = getCanvas();

    if (!canvas) return;

    canvas.discardActiveObject();
    canvas.requestRenderAll();

    setSelectedObject(null);
    setSelectedObjectProperties(null);
  }

  return {
    canvasElementRef,
    fabricCanvasRef,
    selectedObject,
    selectedObjectProperties,

    getCanvas,
    addObject,
    updateSelectedObject,
    deleteSelectedObject,
    clearSelection,
  };
}

export default useEditor;
