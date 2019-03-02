import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import CommodityList from "./pages/CommodityList";

const routes = (
    <BrowserRouter>
        <div>
            <Route exact={true} path="/" component={CommodityList}/>
            <Route path="/index.html" component={CommodityList}/>
            <Route path="/commodityList" component={CommodityList}/>
            {/*<Route path="/commodityDetail" component={CommodityDetail}/>*/}
            {/*<Route path="/orderList" component={OrderList}/>*/}
            {/*<Route path="/subscribeOrder" component={SubscribeOrder}/>*/}
            {/*<Route path="/orderDetail" component={OrderDetail}/>*/}
            {/*<Route path="/createOrder" component={CreateOrder}/>*/}
        </div>
    </BrowserRouter>
);

class Routes extends React.Component {
    render = () => routes;
}

export default Routes;