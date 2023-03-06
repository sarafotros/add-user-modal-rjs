import React from 'react'
import Card from '../UI/Card'

import style from './UsersList.module.css'

function UsersList(props) {
  return (
    <Card className={style.users}>
        <ul>
            {props.users.map(user => (
                <li key={user.id}>
                    {user.username } {user.age}(yearsold)
                </li>
            ))}
        </ul>
    </Card>
  )
}



export default UsersList
