
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
          value={
            isTextSelected
              ? selectedObjectProperties.text ?? ""
              : ""
          }
          disabled={!isTextSelected}
          onChange={(e) =>
            updateSelectedObject({
              text: e.target.value,
            })
          }
        />
      </div>

      <div className="control-group">
        <label>Font family</label>
        <select
          value={
            selectedObjectProperties?.fontFamily || "Arial"
          }
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

      <div className="control-row">
        <div className="control-group">
  <label>Font size</label>
  <input
    type="number"
    min="1"
    max="300"
    value={
      isTextSelected
        ? selectedObjectProperties.fontSize ?? 32
        : 32
    }
    disabled={!isTextSelected}
    onChange={(e) => {
      const value = Number(e.target.value);

      if (value >= 1 && value <= 300) {
        updateSelectedObject({ fontSize: value });
      }
    }}
  />
</div>

        <div className="control-group">
          <label>Color</label>
          <input
            type="color"
            defaultValue="#292832"
            disabled
          />
        </div>
      </div>

      <p className="panel-hint">
        Select a text object on the canvas to edit its properties.
      </p>
    </div>
  );
}

export default TextPanel;
