import MainComponent from "./pages/MainComponent";
import FestivalComponent from './pages/FestivalComponent';
import UseComponent from './pages/UseComponent';
import SpaceComponent from './pages/SpaceComponent';
import SpaceRegisterComponent from './pages/SpaceComponent/SpaceRegisterComponent'
import EquipmentComponent from './pages/EquipmentComponent'
import EquipmentRegisterComponent from './pages/EquipmentComponent/EquipmentRegisterComponent'
import EducationComponent from './pages/EducationComponent'
import EducationDetailComponent from './pages/EducationComponent/EducationDetailComponent'
import EducationRegisterComponent from './pages/EducationComponent/EducationRegisterComponent'
import FestivalRegisterComponent from './pages/FestivalComponent/FestivalRegisterComponent';
import FestivalDetailComponent from './pages/FestivalComponent/FestivalDetailComponent';
import NoticeComponent from './pages/CommunicationComponent/pages/NoticeComponent';
import NoticeDetailComponent from './pages/CommunicationComponent/pages/NoticeComponent/NoticeDetailComponent';
import ActivityComponent from './pages/CommunicationComponent/pages/ActivityComponent'
import ActivityDetailComponent from './pages/CommunicationComponent/pages/ActivityComponent/ActivityDetailComponent'
import InformationComponent from './pages/CommunicationComponent/pages/InformationComponent'
import InformationDetailComponent from './pages/CommunicationComponent/pages/InformationComponent/InformationDetailComponent'
import LoginComponent from './pages/LoginComponent'
import RegisterComponent from './pages/RegisterComponent'
import SpaceManageComponent from './pages/AdminComponent/SpaceManageComponent'
import RegisterManageComponent from './pages/AdminComponent/RegisterManageComponent'
import FestivalManageComponent from './pages/AdminComponent/FestivalManageComponent'
import EquipmentManageComponent from './pages/AdminComponent/EquipmentManageComponent'
import EducationManageComponent from './pages/AdminComponent/EducationManageComponent'
import ActivityManageComponent from './pages/AdminComponent/CommunicationManageComponent/ActivityManageComponent'
import InformationManageComponent from './pages/AdminComponent/CommunicationManageComponent/InformationManageComponent'
import NoticeManageComponent from './pages/AdminComponent/CommunicationManageComponent/NoticeManageComponent'
import CommuncationCompoonent from "./pages/CommunicationComponent";
import AdminCompoonent from "./pages/AdminComponent";
import CommunicationManageCompoonent from "./pages/AdminComponent/CommunicationManageComponent";

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
    path: "/space/register/:id",
    exact: true,
    component: SpaceRegisterComponent
  },
  {
    path: "/equipment",
    exact: true,
    component: EquipmentComponent
  },
  {
    path: "/equipment/register/:id",
    exact: true,
    component: EquipmentRegisterComponent
  },
  {
    path: "/education",
    exact: true,
    component: EducationComponent
  },
  {
    path: "/education/detail/:id",
    exact: true,
    component: EducationDetailComponent
  },
  {
    path: "/education/register/:id",
    exact: true,
    component: EducationRegisterComponent
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
    path: "/communication",
    exact: true,
    component: CommuncationCompoonent
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
    path: "/login",
    exact: true,
    component: LoginComponent 
  },
  {
    path: "/register",
    exact: true,
    component: RegisterComponent 
  },
  {
    path:'/admin',
    exact: true,
    component: AdminCompoonent
  },
  {
    path: '/admin/space',
    exact: true,
    component: SpaceManageComponent
  },
  {
    path: '/admin/register',
    exact: true,
    component: RegisterManageComponent
  },
  {
    path: '/admin/festival',
    exact: true,
    component: FestivalManageComponent
  },
  {
    path: '/admin/education',
    exact: true,
    component: EducationManageComponent
  },
  {
    path: '/admin/equipment',
    exact: true,
    component: EquipmentManageComponent
  },
  {
    path: '/admin/communication',
    exact: true,
    component: CommunicationManageCompoonent
  },
  {
    path: '/admin/communication/notice',
    exact: true,
    component: NoticeManageComponent
  },
  {
    path: '/admin/communication/information',
    exact: true,
    component: InformationManageComponent
  },
  {
    path: '/admin/communication/activity',
    exact: true,
    component: ActivityManageComponent
  }
];

export default routes;
