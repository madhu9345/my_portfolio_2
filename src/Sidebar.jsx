import React from 'react'
import { useNavigate } from 'react-router-dom'


function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
    <div className='m-3'>
    <div className='d-flex flex-column gap-3 position-fixed side'>
        <h1 className='logo'>Portfolio</h1>
        <div onClick={()=>{navigate('/')}}><i className="bi bi-house-door"></i>Home</div>
        <div onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
        <div onClick={() => navigate("/skills")}><i className="bi bi-code-slash"></i>Skills</div>
        
        <div onClick={() => navigate("/education")}><i className="bi bi-book"></i>Educations</div>
        
        <div onClick={() => navigate("/clubs")}><i className="bi bi-people"></i>Clubs </div>
        
        
    </div>
    
    
    </div>
    </>
    
  )
}

export default Sidebar