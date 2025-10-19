import React, { useState } from "react";
import Popup from "./PopUp";
import InfoCard from "./InfoCard";
import ButtonPopup from "./ButtonPopUp";
 // make sure file is named correctly

function MainButtonPopUp() {
  const [showPopup, setShowPopup] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: 100 }}>
      <h2>Dynamic Popup Example with Multiple Components</h2>

      {/* Buttons */}
      <ButtonPopup
        label={showPopup ? "Hide Popup" : "Show Popup"}
        onClick={() => setShowPopup((prev) => !prev)}
      />
      <ButtonPopup
        label={showInfo ? "Hide Info Card" : "Show Info Card"}
        onClick={() => setShowInfo((prev) => !prev)}
      />

      {/* Conditionally render components */}
      {showPopup && (
        <Popup
          title="Dynamic Popup"
          message="This is a professional reusable popup component!"
          onClose={() => setShowPopup(false)}
        />
      )}

      {showInfo && (
        <InfoCard
          info="Here is some important information!"
          onClose={() => setShowInfo(false)}
        />
      )}
    </div>
  );
}

export default MainButtonPopUp;
