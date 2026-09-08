import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import GateCheck from '../pages/GateCheck';
import LiveMonitoring from '../pages/LiveMonitoring';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'gate-check', element: <GateCheck /> },
      { path: 'live-monitoring', element: <LiveMonitoring /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

export default router;
