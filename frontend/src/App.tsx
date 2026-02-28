import { createRouter, createRoute, createRootRoute, RouterProvider } from '@tanstack/react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import DataAnalyticsLandingPage from './pages/DataAnalyticsLandingPage';
import QATestingLandingPage from './pages/QATestingLandingPage';
import ApplicationForm from './pages/ApplicationForm';
import ApplicationSuccess from './pages/ApplicationSuccess';
import AboutPage from './pages/AboutPage';
import TermsOfUsePage from './pages/TermsOfUsePage';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const infrastructureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/infrastructure',
  component: LandingPage,
});

const dataAnalyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/data-analytics',
  component: DataAnalyticsLandingPage,
});

const qaTestingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/qa-testing',
  component: QATestingLandingPage,
});

const applyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/apply',
  component: ApplicationForm,
});

const successRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/apply/success',
  component: ApplicationSuccess,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms',
  component: TermsOfUsePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  infrastructureRoute,
  dataAnalyticsRoute,
  qaTestingRoute,
  applyRoute,
  successRoute,
  aboutRoute,
  termsRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
