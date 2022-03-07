import React from "react";
import { useHistory } from "react-router-dom";


const Header = () => {
    // history would hold the routing uri
    const history = useHistory();

    return <div class="header-panel">
        {/* add the anchor to header so that user can click and go back. */}
        <h1 class="h1"><a onClick={() => history.push('/')}>This is Header string</a></h1></div >
};

export default Header;