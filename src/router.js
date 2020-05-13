
import MainOrder from './components/LiveOrder/MainOrder'
import Tools from './components/Tools/ToolsTabSection';
import OrderDetailsMain from './components/OrderDetails/OrderDetailsMain'

const routePaths = {
    MAINORDER: '/order-main',
    TOOLS: '/tools',
    DETAILS_ORDERS: '/details-order'
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
]


export default routes;
export { routePaths };
