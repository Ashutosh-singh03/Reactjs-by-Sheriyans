import React from 'react'

const User = () => {
    const user=[
        {"name":"sarthak",
          age:22          
        },
        {"name":"Aman",
          age:23
        },
        {"name":"Harsh",
          age:28
        }
    ]

  return (
    <div>
    {user.map(function(elem){
        return  elem.name;
    })}
    </div>
  )
}

export default User