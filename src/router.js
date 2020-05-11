
import MainOrder from './components/LiveOrder/MainOrder'
import Tools from './components/Tools/ToolsTabSection';

const routePaths = {
    MAINORDER: '/order-main',
    TOOLS: '/tools'
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
]


export default routes;
export { routePaths };
