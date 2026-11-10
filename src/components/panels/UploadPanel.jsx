import { ImagePlus, FolderOpen } from "lucide-react";

function UploadPanel() {
  return (
    <div className="panel-section">
      <div className="upload-dropzone">
        <div className="panel-icon">
          <ImagePlus size={25} />
        </div>

        <h4>Upload an image</h4>
        <p>Drag and drop your image here or browse files.</p>

        <button className="secondary-button browse-button">
          <FolderOpen size={16} />
          Browse files
        </button>

        <span className="file-info">PNG or JPG · Max 10 MB</span>
      </div>

      <div className="panel-note">Your images stay on your device.</div>
    </div>
  );
}

export default UploadPanel;
