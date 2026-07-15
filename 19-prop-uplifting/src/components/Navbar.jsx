import React from 'react'

const Navbar = (props) => {

    function changeTheme(){
        if(props.theme=='light'){
            props.setTheme('dark')
        }else{
            props.setTheme('light')
        }
        
    }
  return (
    <div>
        <h3>This is {props.theme} theme</h3>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar