import React, { useState, useEffect, useRef } from 'react'
import List from './List'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  const [usersList, setUsersList] = useState([])
  const [userID, setUserID] = useState(null)

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
    )
      .then((response) => response.json())
      .then((json) => {
        console.log('Список пользователей загружен')
        setUsersList(json)
      });
  }, []);

  return (
    <div className="container">
      <List usersList={usersList} />
    </div>
  )
}