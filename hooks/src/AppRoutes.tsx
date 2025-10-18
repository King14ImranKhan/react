import React from "react";
import { Routes, Route } from "react-router-dom";

import { UseStateComponent } from "./useState/UseStateComponent";
import UseEffectComponent from "./useEffect/UseEffectComponent";
import UseContextMainComponent from "./useContext/UseContextMainComponent";
import UseRefComponent from "./useRef/UseRefComponent";
import UseReducerComponent from "./useReducer/UseReducerComponent";
import ParentUseCallback from "./useCallBack/ParentUseCallBackComponent";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/use-state" element={<UseStateComponent />} />
            <Route path="/use-effect" element={<UseEffectComponent />} />
            <Route path="/use-ref" element={<UseRefComponent />} />
            <Route path="/use-context" element={<UseContextMainComponent />} />
            <Route path="/use-reducer" element={<UseReducerComponent />} />
            <Route path="/use-callback" element={<ParentUseCallback />} />
        </Routes>
    );
};

export default AppRoutes;