import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { SignedIn, UserButton, useUser, SignedOut } from '@clerk/clerk-react';
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react';

const Header = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  // Redirect to onboarding after sign-up if no role is assigned
  useEffect(() => {
    if (isLoaded && isSignedIn && !user?.unsafeMetadata?.role) {
      navigate('/onboarding');
    }
  }, [isLoaded, isSignedIn, user, navigate]);

  const handleSignUp = () => {
    // Redirect to the specified Sign Up URL
    window.location.href = 'https://arriving-bonefish-42.accounts.dev/sign-in?sign_up_fallback_redirect_url=http%3A%2F%2Flocalhost%3A5177%2Fonboarding';
  };

  return (
    <nav className='py-4 flex justify-between items-center'>
      <Link to="/">
        <img className='h-20' src="/logo.png" alt="Logo" />
      </Link>

      <div className='flex gap-8'>
        <SignedOut>
          <Button variant="outline" onClick={handleSignUp}>Sign Up</Button>
        </SignedOut>

        {user?.unsafeMetadata?.role === "recruiter" && (
          <Link to="/post-job">
            <Button variant="destructive">
              <PenBox size={20} className='mr-2' /> Post Jobs
            </Button>
          </Link>
        )}

        <SignedIn>
          <UserButton appearance={{ elements: { avatarBox: 'h-10 w-10' } }}>
            <UserButton.MenuItems>
              <UserButton.Link
                label='My Jobs'
                labelIcon={<BriefcaseBusiness size={15} />}
                href='/my-jobs'
              />
              <UserButton.Link
                label='Saved Jobs'
                labelIcon={<Heart size={15} />}
                href='/saved-jobs'
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Header;
