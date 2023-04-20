import Details from "./Details"
import React, { useState, useEffect, useRef } from 'react'

export default function List(props) {
    const [selectedUserID, setSelectedUserID] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
  
    const selectUserHandle = (userID) => {
      console.log('Выбран пользователь с ID: ' + userID);
      setSelectedUserID(userID);
    };
  
    return (
      <div className="row">
        <h1 className="display-4 mb-4">List and details</h1>
        <div className="col">
          <ul className="list-group">
            {props.usersList.map((user) => (
              <li
                className="list-group-item"
                key={user.id}
                onClick={() => selectUserHandle(user.id)}
              >
                {user.id}. {user.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          {selectedUserID !== null ? <Details userID={selectedUserID} /> : ''}
        </div>
      </div>
    );
}