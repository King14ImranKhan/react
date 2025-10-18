import React, { useContext } from "react";
import { GlobalInfo } from "./UseContextMainComponent";
import SuperChildComponent from "./SuperChildComponent";

function ChildComponent() {
    const { appColor, getDay, day } = useContext(GlobalInfo);

    return (
        <div>
            <h2 style={{ color: appColor }}>Child Component</h2>
            <h2>{day}</h2>

            {/* Button to change day
            <button onClick={() => getDay("Tuesday")}>Set Day to Tuesday</button> */}

            <SuperChildComponent />
        </div>
    );
}

export default ChildComponent;
