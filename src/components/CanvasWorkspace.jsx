
import {
  Plus,
  ZoomIn,
  ZoomOut,
  Maximize,
  RotateCcw,
} from "lucide-react";

function CanvasWorkspace({
  canvasElementRef,
  zoomLevel,
  zoomIn,
  zoomOut,
  resetZoom,
  fitCanvas,
}) {
  return (
    <section className="workspace">
      <div className="workspace-top">
        <div>
          <h2>Workspace</h2>
          <p>Create something beautiful.</p>
        </div>

        <button className="new-design-button">
          <Plus size={16} />
          New design
        </button>
      </div>

      <div className="canvas-area">
        <div className="canvas-placeholder">
          <canvas ref={canvasElementRef} />
        </div>
      </div>

      <div className="canvas-footer">
        <span className="canvas-dimensions">1080 × 1080 px</span>

        <div className="zoom-controls">
          <button
            className="icon-button"
            title="Zoom out"
            onClick={zoomOut}
            disabled={zoomLevel <= 0.2}
          >
            <ZoomOut size={17} />
          </button>

          <span>{Math.round(zoomLevel * 100)}%</span>

          <button
            className="icon-button"
            title="Zoom in"
            onClick={zoomIn}
            disabled={zoomLevel >= 3}
          >
            <ZoomIn size={17} />
          </button>

          <div className="header-divider" />

          <button
            className="icon-button"
            title="Reset zoom"
            onClick={resetZoom}
          >
            <RotateCcw size={16} />
          </button>

          <button
            className="icon-button"
            title="Fit canvas"
            onClick={fitCanvas}
          >
            <Maximize size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CanvasWorkspace;
