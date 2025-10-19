import React, { useState } from "react";
import ItemButtons from "./ItemButtons";
import DetailsPopup from "./DetailsPopUp";

const items = [
  { name: "Item 1", description: "This is the description of Item 1" },
  { name: "Item 2", description: "This is the description of Item 2" },
  { name: "Item 3", description: "This is the description of Item 3" },
];

function MainPropComponent() {
  const [selectedItem, setSelectedItem] = useState<{ name: string; description: string } | null>(null);

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: 50 }}>
      <h2>Click an Item to See Details</h2>

      <ItemButtons items={items} onSelect={(item) => setSelectedItem(item)} />

      {selectedItem && (
        <DetailsPopup
          name={selectedItem.name}
          description={selectedItem.description}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

export default MainPropComponent;
