import {createDrawerNavigator} from 'react-navigation';

import Page1 from "../src/pages/Page1";
import Page2 from "../src/pages/Page2";
import Page3 from "../src/pages/Page3";

const Routes = createDrawerNavigator({
    Page1,
    Page2,
    Page3
})

export default Routes;