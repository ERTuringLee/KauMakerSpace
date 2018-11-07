import ActivityComponent from "./pages/ActivityComponent";
import InformationComponent from './pages/InformationComponent';
import NoticeComponent from './pages/NoticeComponent';
const routes = [
    {
        path: "/communication/notice",
        exact: true,
        component: NoticeComponent
      },
      {
        path: "/communication/information",
        exact: true,
        component: InformationComponent
      },
      {
        path: "/communication/activity",
        exact: true,
        component: ActivityComponent
      }
];
  
export default routes;