
import MainOrder from './components/LiveOrder/MainOrder'

const routePaths = {
    MAINORDER: '/order-main'
}
const routes = [
    {
        title: 'MainOrder',
        path: routePaths.MAINORDER,
        component: MainOrder,
    },
]


export default routes;
export { routePaths };
