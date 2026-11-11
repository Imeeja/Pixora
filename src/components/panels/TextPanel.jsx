
import { Plus } from "lucide-react";

function TextPanel({
  onAddText,
  selectedObjectProperties,
  updateSelectedObject,
}) {
  const isTextSelected =
    selectedObjectProperties?.objectType === "text";

  return (
    <div className="panel-section">
      <button
        className="primary-button full-button"
        onClick={onAddText}
      >
        <Plus size={17} />
        Add a text box
      </button>

      <div className="control-group">
        <label>Text content</label>
        <textarea
          placeholder="Enter your text..."
          rows="3"
          value={isTextSelected ? selectedObjectProperties.text ?? "" : ""}
          disabled={!isTextSelected}
          onChange={(e) =>
            updateSelectedObject({ text: e.target.value })
          }
        />
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
  <label>Font family</label>

  <select
    value={selectedObjectProperties?.fontFamily || "Arial"}
    disabled={!isTextSelected}
    onChange={(e) =>
      updateSelectedObject({
        fontFamily: e.target.value,
      })
    }
  >
    <option value="Arial">Arial</option>
    <option value="Nunito">Nunito</option>
    <option value="Georgia">Georgia</option>
    <option value="Times New Roman">Times New Roman</option>
    <option value="Verdana">Verdana</option>
  </select>
</div>

      </div>

      <p className="panel-hint">
        Select a text object on the canvas to edit its properties.
      </p>
    </div>
  );
}

export default TextPanel;
