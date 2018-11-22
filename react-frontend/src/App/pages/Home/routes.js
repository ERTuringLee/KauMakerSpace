import MainComponent from "./pages/MainComponent";
import FestivalComponent from './pages/FestivalComponent';
import UseComponent from './pages/UseComponent';
import SpaceComponent from './pages/SpaceComponent';
import EquipmentComponent from './pages/EquipmentComponent'
import EducationComponent from './pages/EducationComponent'
import FestivalRegisterComponent from './pages/FestivalComponent/FestivalRegisterComponent';
import FestivalDetailComponent from './pages/FestivalComponent/FestivalDetailComponent';
import GoodsComponent from './pages/GoodsComponent';
import GoodsDetailComponent from './pages/GoodsComponent/GoodsDetailComponent';
import NoticeComponent from './pages/CommunicationComponent/pages/NoticeComponent';
import NoticeDetailComponent from './pages/CommunicationComponent/pages/NoticeComponent/NoticeDetailComponent';
import ActivityComponent from './pages/CommunicationComponent/pages/ActivityComponent'
import ActivityDetailComponent from './pages/CommunicationComponent/pages/ActivityComponent/ActivityDetailComponent'
import InformationComponent from './pages/CommunicationComponent/pages/InformationComponent'
import InformationDetailComponent from './pages/CommunicationComponent/pages/InformationComponent/InformationDetailComponent'
import EquipSpaceComponent from './pages/EquipSpaceComponent';
import LoginComponent from './pages/LoginComponent'
import RegisterComponent from './pages/RegisterComponent'

const routes = [
  {
    path: "/",
    exact: true,
    component: MainComponent
  },
  {
    path: "/use",
    exact: true,
    component: UseComponent
  },
  {
    path: "/space",
    exact: true,
    component: SpaceComponent
  },
  {
    path: "/equipment",
    exact: true,
    component: EquipmentComponent
  },
  {
    path: "/education",
    exact: true,
    component: EducationComponent
  },
  {
    path: "/festival",
    exact: true,
    component: FestivalComponent
  },
  {
    path: "/festival/detail/:id",
    exact: true,
    component: FestivalDetailComponent
  },
  {
    path: "/festival/register/:id",
    exact: true,
    component: FestivalRegisterComponent
  },
  {
    path: "/goods",
    exact: true,
    component: GoodsComponent
  },
  {
    path: "/goods/:id",
    exact: true,
    component: GoodsDetailComponent
  },
  {
    path: "/communication/notice",
    exact: true,
    component: NoticeComponent
  },
  {
    path: "/communication/notice/:id",
    exact: true,
    component: NoticeDetailComponent
  },
  {
    path: "/communication/information",
    exact: true,
    component: InformationComponent
  },
  {
    path: "/communication/information/:id",
    exact: true,
    component: InformationDetailComponent
  },
  {
    path: "/communication/activity",
    exact: true,
    component: ActivityComponent
  },
  {
    path: "/communication/activity/:id",
    exact: true,
    component: ActivityDetailComponent
  },
  {
    path: "/equip_space",
    exact: true,
    component: EquipSpaceComponent 
  },
  {
    path: "/login",
    exact: true,
    component: LoginComponent 
  },
  {
    path: "/register",
    exact: true,
    component: RegisterComponent 
  }

];

export default routes;
