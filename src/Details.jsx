import React, { useState, useEffect, useRef } from 'react'

export default function Details(props) {
    const [isLoading, setIsLoading] = useState(false);
    const userData = useRef(null);
    const userDataDetails = useRef(null);
  
    useEffect(() => {
      console.log('ID выбранного пользователя для запроса: ' + props.userID);
  
      setIsLoading(true);
      fetch(
        'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/' +
          props.userID +
          '.json'
      ).then((response) => {
        if (response.status !== 200) {
          console.log(
            'Проблема загрузки данных. Статус ошибки: ' + response.status
          );
          return;
        }
        
        response.json().then(function (data) {
          Object.assign(userData, data);
          Object.assign(userDataDetails, data.details);
          setIsLoading(false);
          console.log(userData);
        });
      });
    }, [props.userID]);
  
    return (
      <div className="card" key={userData.id}>
        <img src={userData.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {userData.id}. {userData.name}
          </h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{userDataDetails.city}</li>
            <li className="list-group-item">{userDataDetails.company}</li>
            <li className="list-group-item">{userDataDetails.position}</li>
          </ul>
        </div>
      </div>
    );
}