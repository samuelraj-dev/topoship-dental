import Home from './Home';
import Patient from './Patient';
import Appointment from './Appointment';
import Doctor from './Doctor';
import Prescription from './Prescription';
import Billing from './Billing';
import LabOrders from './LabOrders';
import Reports from './Reports';

export const appRoutes = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/patient',
    component: <Patient />,
  },
  {
    path: '/appointment',
    component: <Appointment />,
  },
  {
    path: '/doctor',
    component: <Doctor />,
  },
  {
    path: '/prescription',
    component: <Prescription />,
  },
  {
    path: '/billing',
    component: <Billing />,
  },
  {
    path: '/lab-orders',
    component: <LabOrders />,
  },
  {
    path: '/reports',
    component: <Reports />,
  },
] as const;
