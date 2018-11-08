import MainComponent from "./pages/MainComponent";
import FestivalComponent from './pages/FestivalComponent';
import GoodsComponent from './pages/GoodsComponent';
import NoticeComponent from './pages/CommunicationComponent/pages/NoticeComponent';
import ActivityComponent from './pages/CommunicationComponent/pages/ActivityComponent'
import InformationComponent from './pages/CommunicationComponent/pages/InformationComponent'
import EquipSpaceComponent from './pages/EquipSpaceComponent';

const routes = [
  {
    path: "/",
    exact: true,
    component: MainComponent
  },
  {
    path: "/festival",
    exact: true,
    component: FestivalComponent
  },
  {
    path: "/festival/:id",
    exact: true,
    component: FestivalComponent
  },
  {
    path: "/goods",
    exact: true,
    component: GoodsComponent
  },
  {
    path: "/goods/:id",
    exact: true,
    component: GoodsComponent
  },
  {
    path: "/communication/notice",
    exact: true,
    component: NoticeComponent
  },
  {
    path: "/communication/notice/:id",
    exact: true,
    component: NoticeComponent
  },
  {
    path: "/communication/information",
    exact: true,
    component: InformationComponent
  },
  {
    path: "/communication/information/:id",
    exact: true,
    component: InformationComponent
  },
  {
    path: "/communication/activity",
    exact: true,
    component: ActivityComponent
  },
  {
    path: "/communication/activity/:id",
    exact: true,
    component: ActivityComponent
  },
  {
    path: "/equip_space",
    exact: true,
    component: EquipSpaceComponent 
  }

];

export default routes;
