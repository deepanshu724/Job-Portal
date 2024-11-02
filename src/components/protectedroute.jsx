import { useUser } from '@clerk/clerk-react';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const Protectedroute = ({ children }) => {
    const { isSignedIn, isLoaded, user } = useUser();
    const { pathname } = useLocation();

    console.log(pathname);

    // Ensure user information is loaded
    if (!isLoaded) {
        return null; // You may want to show a loader or nothing until loaded
    }

    // Redirect if the user is not signed in
    if (!isSignedIn) {
        return <Navigate to='/?sign-in=true' />;
    }

    // Redirect to onboarding if the user doesn't have a role
    if (!user?.unsafeMetadata?.role && pathname !== "/onboarding") {
        return <Navigate to='/onboarding' />;
    }

    // Render the protected component
    return children;
};

export default Protectedroute;
