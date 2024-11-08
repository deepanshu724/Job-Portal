import React from 'react';
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import LandingPage from './pages/LandingPage';
import Onboarding from './pages/Onboarding';
import JobListing from './pages/JobListing';
import Job from './pages/Job';
import Postjob from './pages/post-job';
import Savedjob from './pages/saved-jobs';
import Myjobs from './pages/my-jobs';
import { ThemeProvider } from './components/Themeprovider';
import Protectedroute from './components/protectedroute';
import NotFound from './pages/NotFound'; // Import your NotFound component

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/onboarding",
        element: (
          <Protectedroute>
            <Onboarding />
          </Protectedroute>
        )
      },
      {
        path: "/jobs",
        element: (
          <Protectedroute>
            <JobListing />
          </Protectedroute>
        )
      },
      {
        path: "/job/:id",
        element: (
          <Protectedroute>
            <Job />
          </Protectedroute>
        )
      },
      {
        path: "/post-job",
        element: (
          <Protectedroute>
            <Postjob />
          </Protectedroute>
        )
      },
      {
        path: "/saved-jobs",
        element: (
          <Protectedroute>
            <Savedjob />
          </Protectedroute>
        )
      },
      {
        path: "/my-jobs",
        element: (
          <Protectedroute>
            <Myjobs />
          </Protectedroute>
        )
      },
      {
        path: "*", // Catch-all for unmatched routes
        element: <NotFound /> // Your 404 component
      }
    ]
  }
]);

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
