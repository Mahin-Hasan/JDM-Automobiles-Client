import { useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Dark Mode</button>
      {/* Render other content based on isDarkMode */}
      {isDarkMode ? <p>Dark Mode is On</p> : <p>Dark Mode is Off</p>}
    </div>
  );
};

export default DarkModeToggle;
