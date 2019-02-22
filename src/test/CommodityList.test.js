import React from "react";
import ReactDOM from "react-dom";
import CommodityList from "../pages/CommodityList";


it('test commodity list ', function () {
    const div = document.createElement('div');
    ReactDOM.render(<CommodityList/>, div);
    ReactDOM.unmountComponentAtNode(div);
}); 