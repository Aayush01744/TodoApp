import React from 'react'
function List(props) {
  
    return (
        <div>
       {
        props.list.map((data)=>
        {
           return <li>{data}</li>
        })
       }
        </div>
    )
}

export default List
