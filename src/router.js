
import MainOrder from './components/LiveOrder/MainOrder'
import Tools from './components/Tools/ToolsTabSection';
import OrderDetailsMain from './components/OrderDetails/OrderDetailsMain'
import PhotoControl from './components/PhotoControl/PhotoControl';

const routePaths = {
    MAINORDER: '/adminka/order-main',
    TOOLS: '/adminka/tools',
    DETAILS_ORDERS: '/adminka/details-order',
    PHOTOCONTROL: '/adminka/photocontrol'
}
const routes = [
    {
        title: 'MainOrder',
        path: routePaths.MAINORDER,
        component: MainOrder,
    },
    {
        title: 'Tools',
        path: routePaths.TOOLS,
        component: Tools,
    },
    {
        title: 'Details order',
        path: routePaths.DETAILS_ORDERS,
        component: OrderDetailsMain,
    },
    {
        title: 'Photo Control',
        path: routePaths.PHOTOCONTROL,
        component: PhotoControl,
    },
]


export default routes;
export { routePaths };
