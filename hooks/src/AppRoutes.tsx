import { Routes, Route } from "react-router-dom";
import UseStateComponent from "./useEffect/UseEffectComponent";
import UseEffectComponent from "./useEffect/UseEffectComponent";
import UseRefComponent from "./useRef/UseRefComponent";
import ParentUseCallback from "./useCallBack/ParentUseCallBackComponent";
import UseContextMainComponent from "./useContext/UseContextMainComponent";
import UseReducerComponent from "./useReducer/UseReducerComponent";
import MainButtonPopUp from "./pop-up/component-pop-up/MainButtonPopUp";
import MainPropComponent from "./props/MainPropComponent";
import CustomModal from "./modal/CustomModal";
import MapFilterForEachReduce from "./methods/MapFilterForEachReduce";
import UseMemoComponent from "./useMemo/UseMemoComponent";
        

function AppRoutes() {
  return (
    <Routes>
         {/* hooks routes */}
      <Route path="/use-state" element={<UseStateComponent />} />
      <Route path="/use-effect" element={<UseEffectComponent />} />
      <Route path="/use-ref" element={<UseRefComponent />} />
      <Route path="/use-context" element={<UseContextMainComponent />} />
      <Route path="/use-reducer" element={<UseReducerComponent />} />
      <Route path="/use-callback" element={<ParentUseCallback />} />
      <Route path="/use-memo" element={<UseMemoComponent />} />

      {/* Pop-Up */}
      <Route path="/pop-up" element={<MainButtonPopUp />} />
      {/* Modal */}
      <Route path="/modal" element={<CustomModal />} />

      {/* Props */}
      <Route path="/props" element={<MainPropComponent />} />

      {/* Methods */}
      <Route path="/map-filter-for-each-reduce" element={<MapFilterForEachReduce/>} />
    </Routes>
  );
}

export default AppRoutes;
