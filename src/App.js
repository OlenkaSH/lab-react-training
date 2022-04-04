import React from 'react';
import './App.css';

const IdCard = (props) => {
  return (
    <div className="profile">
      <img alt={props.firstName} src={props.picture}></img>
      <ul>
        <li>
          <b>First name:</b> {props.firstName}
        </li>
        <li>
          <b>Last name:</b> {props.lastName}
        </li>
        <li>
          <b>Gender:</b> {props.gender}
        </li>
        <li>
          <b>Height:</b> {props.height}
        </li>
        <li>
          <b>Birth:</b> {props.birth}
        </li>
      </ul>
    </div>
  );
};

const IdCardMain = () => {
  return (
    <div>
      <div>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth="1992-07-14"
          picture={'https://randomuser.me/api/portraits/men/44.jpg'}
        />
      </div>
      <div>
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <IdCardMain />
    </div>
  );
}

export default App;
