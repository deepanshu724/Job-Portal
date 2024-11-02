import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { SignIn, SignInButton,SignedIn,UserButton, useUser} from '@clerk/clerk-react'
import { SignedOut} from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react'
const Header = () => {
  const[showsignin,setsignin]=useState(false)
  const [search,setsearch]= useSearchParams()
  const {user }= useUser()

  useEffect(()=>{
    if(search.get('sign-in')){
      setsignin(true)
    }
  },[search])
  const handleoverlayclick=(e)=>{
   if(e.target===e.currentTarget){
      setsignin(false)
      setsearch({})
      console.log(e.currentTarget)
   }
  }
  return (
    <>
    <nav className='py-4 flex justify-between  items-center'>
        <Link > 
        <img className='h-20' src="/logo.png" alt="" />
        </Link>

    <div className='flex gap-8'>
       <SignedOut>
        <Button  variant="outline" onClick={()=>setsignin(true)}> Login</Button>
      </SignedOut>
      {user?.unsafeMetadata?.role==="recruiter" && <Link to="/post-job">
        <Button   variant="destructive"> <PenBox size={20} className='mr-2'/>  Post Jobs</Button>
        </Link >}
     
      <SignedIn>

        <UserButton appearance={{
          elements:{ 
            avatarBox:'h-10 w-10'
          }
        }} >
          <UserButton.MenuItems>
            <UserButton.Link
            label='My jobs'
            labelIcon={<BriefcaseBusiness size={15} />}
            href='/my-jobs'
            />
             <UserButton.Link
            label='Saved jobs'
            labelIcon={<Heart size={15}/>}
            href='/saved-jobs'
            />
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
    </div>
    </nav>
    {
      showsignin && <div className='fixed flex justify-center items-center inset-0 bg-black bg-opacity-50' onClick={handleoverlayclick}>
        <SignIn
        signUpForceRedirectUrl='/onboarding'
        fallbackRedirectUrl='/onboarding'
        />
      </div>
    }
    </>
  )
}

export default Header