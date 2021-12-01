import React from "react";
import Index from "../view/index"
const routes = [
    {
        path:"/test",
        component: Index, 
    },
    {
        path:"/test2",
        component: Bus, 
    },
    
]


function Bus() {
    return <h3>Bus</h3>;
  }

export default routes