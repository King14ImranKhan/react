import React from "react";
import { GlobalInfo } from "./UseContextMainComponent";

export function SuperChildComponent() {
    const { appColor, getDay, day } = React.useContext(GlobalInfo);

    return (
        <div>
            <h2 style={{ color: appColor }}>Super Child Component</h2>
            <button onClick={() => getDay(day)}>Get Day</button>
        </div>
    );
}
export default SuperChildComponent;