import { Plus } from "lucide-react";

function TextPanel() {
  return (
    <div className="panel-section">
      <button className="primary-button full-button">
        <Plus size={17} />
        Add a text box
      </button>

      <div className="control-group">
        <label>Text content</label>
        <textarea placeholder="Enter your text..." rows="3" disabled />
      </div>

      <div className="control-group">
        <label>Font family</label>
        <select disabled defaultValue="Nunito">
          <option>Nunito</option>
          <option>Arial</option>
          <option>Georgia</option>
        </select>
      </div>

      <div className="control-row">
        <div className="control-group">
          <label>Font size</label>
          <input type="number" defaultValue="32" disabled />
        </div>

        <div className="control-group">
          <label>Color</label>
          <input type="color" defaultValue="#292832" disabled />
        </div>
      </div>

      <p className="panel-hint">
        Select a text object on the canvas to edit its properties.
      </p>
    </div>
  );
}

export default TextPanel;
