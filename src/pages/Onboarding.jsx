import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

const Onboarding = () => {
  const {user , isLoaded}=useUser();
  const navigate = useNavigate()
  if(!isLoaded){
    <PacmanLoader  width={"100%"} color='#36d7b7' className='mb-4' />
  }
  const handleRoleSelection= async (role)=>{
    await user.update({
      unsafeMetadata:{role},
    }).then(()=>{
 navigate(role==='recruiter'?'/post-job':'/jobs');
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    if(user?.unsafeMetadata?.role){
      navigate(user?.unsafeMetadata?.role==='recruiter'?'/post-job':'/jobs');
    }
    
  },[user])
  return (
    <div className='flex justify-center items-center w-full flex-col mt-32'>
      <div className='flex items-center justify-center '>
        <h1  className='gradient-title text-7xl sm:text-8xl font-extrabold tracking-tighter'> I am a...</h1>
      </div>
      <div className='grid grid-cols-2 gap-4 mt-16 md:px-40 w-full'>
        <Button variant='blue' className='h-36 text-2xl ' onClick={()=>handleRoleSelection("candidate")}>Candidate </Button>
        <Button variant='destructive' className='h-36 text-2xl ' onClick={()=>handleRoleSelection("recruiter")}>Recruiter</Button>
      </div>
    </div>
  )
}

export default Onboarding