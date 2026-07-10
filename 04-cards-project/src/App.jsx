import React from 'react'

import Card from './components/Card';
import User from './components/User.jsx'
const App = () => {
const jobs = [
  {
    id: 1,
    brandLogo: "https://cdn.simpleicons.org/google",
    company: "Google",
    posted: "2 Days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Bengaluru, India",
  },
  {
    id: 2,
    brandLogo: "https://cdn.simpleicons.org/meta",
    company: "Meta",
    posted: "5 Days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Menlo Park, USA",
  },
  {
    id: 3,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW-Kq9gfty56z8kGjFSbD8c4qkG3HmSul4stGRc3jig&s=10",
    company: "Amazon",
    posted: "1 Week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    brandLogo: "https://cdn.simpleicons.org/apple",
    company: "Apple",
    posted: "3 Days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Cupertino, USA",
  },
  {
    id: 5,
    brandLogo: "https://cdn.simpleicons.org/netflix",
    company: "Netflix",
    posted: "10 Days ago",
    post: "Frontend Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$145/hr",
    location: "Los Gatos, USA",
  },
  {
    id: 6,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikGFJR-a0827PjlHAYz5Afmo_7FYLw2JY-2w07VfIYA&s=10",
    company: "Microsoft",
    posted: "2 Weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Hyderabad, India",
  },
  {
    id: 7,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uY4d5TNjC1yRM2j7ceVjX12P1GR7UpNHNSvuQp_xPQ&s=10",
    company: "Adobe",
    posted: "4 Days ago",
    post: "UI Engineer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "$88/hr",
    location: "Noida, India",
  },
  {
    id: 8,
    brandLogo: "https://cdn.simpleicons.org/uber",
    company: "Uber",
    posted: "6 Days ago",
    post: "React Native Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Bengaluru, India",
  },
  {
    id: 9,
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    company: "NVIDIA",
    posted: "3 Weeks ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$115/hr",
    location: "Santa Clara, USA",
  },
  {
    id: 10,
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfD4CgpbZ0-WJpVTHRNTcGVNXwjF4sz29dSABZ74SWAA&s=10",
    company: "OpenAI",
    posted: "1 Day ago",
    post: "Full Stack Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$160/hr",
    location: "San Francisco, USA",
  },
];
console.log(jobs)
  return (
    <div className='parent'>
      {/* <Card/> */}
      {jobs.map(function(elem,idx){
        return <div key={idx}> 
          <Card brandLogo={elem.brandLogo} company={elem.company} posted={elem.posted}  post={elem.post}  tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
     

      </div>
      
  )
}

export default App