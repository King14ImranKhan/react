import React, { useContext, useState} from "react";
import ChildComponent from "./ChildComponent";
import OtherChildComponent from "./OtherChildComponent";

type GlobalInfoType = {
  appColor: string;
  getDay: (day: string) => void;
  day: string;
};


export const GlobalInfo = React.createContext<GlobalInfoType>({
  appColor: 'green',
  getDay: (day: string) => {},
  day: 'Monday'
});



function UseContextMainComponent() {
    const [color] = useState('blue');
    const[day, setDay] = useState('monday');

    const getDay = (day: string) => {
    console.log(`Today is ${day}`);
    setDay(day);
}

    return (
        <GlobalInfo.Provider value={{appColor: color, getDay, day}}>
        <ChildComponent />
        <OtherChildComponent />
        </GlobalInfo.Provider>
    );
}

export default UseContextMainComponent;
