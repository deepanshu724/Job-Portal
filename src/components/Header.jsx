import { useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

const Header = () => {
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();
  const navigate = useNavigate();

  // Function to handle direct redirection to custom sign-in URL
  const handleSignUp = () => {
    // Redirect to the specified Sign Up URL
    window.location.href = 'https://arriving-bonefish-42.accounts.dev/sign-in?sign_up_fallback_redirect_url=http%3A%2F%2Flocalhost%3A5177%2Fonboarding';
  };

  // Function to redirect user to the appropriate job page after login
  const redirectToJobs = () => {
    if (user) {
      // Direct users to My Jobs or Saved Jobs based on their role
      navigate("/my-jobs"); // Always redirect to My Jobs
    }
  };

  useEffect(() => {
    // Call redirectToJobs when user data changes
    redirectToJobs();
  }, [user, navigate]);

  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" className="h-20" alt="Hirrd Logo" />
        </Link>

        <div className="flex gap-8">
          <SignedOut>
            <Button variant="outline" onClick={handleSignUp}>
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/post-job">
                <Button variant="destructive" className="rounded-full">
                  <PenBox size={20} className="mr-2" />
                  Post a Job
                </Button>
              </Link>
            )}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs" // Link to My Jobs
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs" // Link to Saved Jobs
                />
                <UserButton.Action label="Manage Account" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>
    </>
  );
};

export default Header;
