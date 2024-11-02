import { useUser } from '@clerk/clerk-react';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { isSignedIn, isLoaded, user } = useUser();
    const location = useLocation();

    // URL for Sign-Up with redirect to onboarding after sign-up completion
    const signUpUrl = 'https://arriving-bonefish-42.accounts.dev/sign-in?sign_up_fallback_redirect_url=http%3A%2F%2Flocalhost%3A5177%2Fonboarding';

    // Wait until user data is loaded
    if (!isLoaded) return null; // Optionally show a loader

    // If user is not signed in, redirect to the Sign Up page
    if (!isSignedIn) {
        window.location.href = signUpUrl;
        return null;
    }

    // If the user is signed in but lacks a role, redirect to onboarding
    if (!user?.unsafeMetadata?.role && location.pathname !== "/onboarding") {
        return <Navigate to='/onboarding' replace />;
    }

    // Render the protected component if conditions are met
    return children;
};

export default ProtectedRoute;
