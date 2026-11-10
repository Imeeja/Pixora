import { Upload, Type, Shapes, SlidersHorizontal } from "lucide-react";

const tools = [
  {
    id: "upload",
    label: "Upload",
    icon: Upload,
  },
  {
    id: "text",
    label: "Text",
    icon: Type,
  },
  {
    id: "shapes",
    label: "Shapes",
    icon: Shapes,
  },
  {
    id: "adjustments",
    label: "Adjust",
    icon: SlidersHorizontal,
  },
];

function Toolbar({ activeTool, setActiveTool }) {
  return (
    <aside className="toolbar">
      <div className="toolbar-heading">TOOLS</div>

      <div className="tool-list">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <button
              key={tool.id}
              className={`tool-button ${
                activeTool === tool.id ? "active" : ""
              }`}
              onClick={() => setActiveTool(tool.id)}
              title={tool.label}
            >
              <Icon size={21} strokeWidth={1.8} />
              <span>{tool.label}</span>
            </button>
          );
        })}
      </div>

      <div className="toolbar-bottom">
        <span className="toolbar-version">PIXORA · 1.0</span>
      </div>
    </aside>
  );
}

export default Toolbar;
