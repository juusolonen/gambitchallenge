import React from 'react'

const Header = ({date}) => {
    return (
       <div className='App-header'>
           <h3>Readings from</h3>
            <p>{date}</p>
        </div>
    )
}

export default Header