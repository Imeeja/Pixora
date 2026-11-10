import { Image, Undo2, Redo2, Save, Download, ChevronDown } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <a className="logo" href="/">
          <span className="logo-icon">
            <Image size={20} />
          </span>
          <span>
            pixora<span className="logo-dot">.</span>
          </span>
        </a>

        <div className="header-divider" />

        <span className="project-name">Untitled design</span>
      </div>

      <div className="header-actions">
        <div className="history-actions">
          <button className="icon-button" title="Undo" disabled>
            <Undo2 size={19} />
          </button>

          <button className="icon-button" title="Redo" disabled>
            <Redo2 size={19} />
          </button>
        </div>

        <button className="secondary-button save-button">
          <Save size={16} />
          <span>Save</span>
        </button>

        <button className="primary-button export-button">
          <Download size={16} />
          <span>Export</span>
          <ChevronDown size={15} />
        </button>
      </div>
    </header>
  );
}

export default Header;
