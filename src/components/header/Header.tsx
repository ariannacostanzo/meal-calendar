import React from "react";
import "./header.scss";

interface HeaderProps {
  downloadJSON: () => void;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ downloadJSON, handleFileUpload }) => {
  return (
    <header>
      <h4>Dieta settimanale</h4>
      <div className="button-container">
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          style={{ display: "none" }}
          id="file-upload"
        />
        <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
          📤 Importa JSON
        </label>
        <button onClick={downloadJSON}>💾</button>
      </div>
    </header>
  );
};

export default Header;
