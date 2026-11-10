import { Square, Circle, RectangleHorizontal } from "lucide-react";

function ShapesPanel() {
  return (
    <div className="panel-section">
      <div className="control-group">
        <label>Add a shape</label>

        <div className="shape-options">
          <button className="shape-button" title="Rectangle">
            <Square size={23} />
            <span>Square</span>
          </button>

          <button className="shape-button" title="Circle">
            <Circle size={23} />
            <span>Circle</span>
          </button>

          <button className="shape-button" title="Rectangle">
            <RectangleHorizontal size={23} />
            <span>Rectangle</span>
          </button>
        </div>
      </div>

      <div className="control-group">
        <label>Fill color</label>
        <input type="color" defaultValue="#B69AE8" disabled />
      </div>

      <div className="control-group">
        <label>Border color</label>
        <input type="color" defaultValue="#292832" disabled />
      </div>

      <p className="panel-hint">Add a shape to your canvas to customize it.</p>
    </div>
  );
}

export default ShapesPanel;
