import { useState } from "react";
import "./TopLogo.css";

export default function TopLogo({
  logoSrc = "/shuffle-logo.png",
  companyName = "Shuffle",
}) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.error("Failed to load logo image");
  };

  return (
    <div className="top-logo">
      {!imageError && (
        <img
          src={logoSrc}
          alt="Shuffle logo"
          className="top-logo__image"
          onError={handleImageError}
        />
      )}
      <h1 className="top-logo__name">{companyName}</h1>
    </div>
  );
}
