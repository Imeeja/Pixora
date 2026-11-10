function AdjustmentsPanel() {
  return (
    <div className="panel-section">
      <div className="control-group">
        <label>Brightness</label>
        <div className="range-value">
          <span>0</span>
          <span>100</span>
        </div>
        <input type="range" min="0" max="100" defaultValue="50" disabled />
      </div>

      <div className="control-group">
        <label>Contrast</label>
        <div className="range-value">
          <span>0</span>
          <span>100</span>
        </div>
        <input type="range" min="0" max="100" defaultValue="50" disabled />
      </div>

      <div className="control-group">
        <label>Filters</label>

        <div className="filter-options">
          <button className="filter-button" disabled>
            Original
          </button>
          <button className="filter-button" disabled>
            Grayscale
          </button>
          <button className="filter-button" disabled>
            Sepia
          </button>
        </div>
      </div>

      <button className="secondary-button full-button" disabled>
        Reset adjustments
      </button>

      <p className="panel-hint">Upload an image to start adjusting it.</p>
    </div>
  );
}

export default AdjustmentsPanel;
