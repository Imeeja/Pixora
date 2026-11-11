import { Plus, ZoomIn, ZoomOut, Maximize } from "lucide-react";

function CanvasWorkspace({ canvasElementRef }) {
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
          <button className="icon-button" title="Zoom out">
            <ZoomOut size={17} />
          </button>

          <span>100%</span>

          <button className="icon-button" title="Zoom in">
            <ZoomIn size={17} />
          </button>

          <div className="header-divider" />

          <button className="icon-button" title="Fit canvas">
            <Maximize size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CanvasWorkspace;
