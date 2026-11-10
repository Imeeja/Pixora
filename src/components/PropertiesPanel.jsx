import UploadPanel from "./panels/UploadPanel";
import TextPanel from "./panels/TextPanel";
import ShapesPanel from "./panels/ShapesPanel";
import AdjustmentsPanel from "./panels/AdjustmentsPanel";

const panels = {
  upload: UploadPanel,
  text: TextPanel,
  shapes: ShapesPanel,
  adjustments: AdjustmentsPanel,
};

function PropertiesPanel({ activeTool }) {
  const ActivePanel = panels[activeTool];

  return (
    <aside className="properties-panel">
      <div className="properties-heading">
        <h3>
          {activeTool === "adjustments"
            ? "Adjustments"
            : activeTool.charAt(0).toUpperCase() + activeTool.slice(1)}
        </h3>
        <span>PROPERTIES</span>
      </div>

      <div className="properties-content">
        <ActivePanel />
      </div>
    </aside>
  );
}

export default PropertiesPanel;
