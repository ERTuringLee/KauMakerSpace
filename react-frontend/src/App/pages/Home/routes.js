import MainComponent from "./pages/MainComponent";
import FestivalComponent from './pages/FestivalComponent';
import GoodsComponent from './pages/GoodsComponent';
import CommunicationComponent from './pages/CommunicationComponent';
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
    path: "/goods",
    exact: true,
    component: GoodsComponent
  },
  {
    path: "/communication/notice",
    exact: true,
    component: CommunicationComponent
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
  },
  {
    path: "/equip_space",
    exact: true,
    component: EquipSpaceComponent 
  }

];

export default routes;
