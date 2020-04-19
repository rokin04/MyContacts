import React, { useEffect, useState, setState } from 'react';
import './App.scss';

import ContactAddComponent from './components/ContactAddComponent'
import ContactViewComponent from './components/ContactViewComponent'
import Sidebar from './components/Sidebar'
import Header from './components/Header';


// main app component
const App = (props) => {
const [contacts, setContacts] = useState([]);

// useEffect(() => {
//   fetch('contacts.json')
//     .then(res => res.json())
//       .then(data => {
//         setContacts(data);
//   })
// })
  
  const addToContacts = (data) => {
      setContacts([...contacts, data]);
  }
  
    return (
      <>
        <Header />
        <Sidebar />
        <div id="contacts-list">
            {
              contacts ? contacts.map(function(contact, index) {
                return <ContactViewComponent key={index} contact={contact}/>
              }) : []
            }
            <ContactAddComponent onContactAdded={addToContacts} />
        </div>
      </>
    )
}


// view contact component



// add contact component

export default App;
