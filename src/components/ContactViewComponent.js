import React, { useState, useEffect} from 'react'

const ContactViewComponent = (props) => {
    const [contact, setContact] = useState(props.contact);
    const [isEditing, setIsEditing] = useState(false);
    const [shouldHide, setShouldHide] = useState(false);

    const toggleEditContact = () => {
        setIsEditing(!isEditing)
    }
      
    const deleteContact = () => {
        setShouldHide(true);
    }
    const UpdateDetails = (e) => {
        contact[e.target.name] = e.target.value;
    }
    const updateContact = (e) => {
        setContact(contact);
        setIsEditing(false);
      }
      
      return ( !shouldHide ?
        <div className="contactWrapper">
          <div className="contactDetails">
            {
              !isEditing ? 
              <div style={{"wordwrap": "break-word"}}>
              <div className={`dot ${contact.status ? "active" : "inactive"}`}></div>
                <p>{contact.fname}</p>
                <p>{contact.lname}</p>
                <p>{contact.ph}</p>
                <p>{contact.email}</p>
              </div>

                :
            <div>
                <input name="fname" defaultValue={contact.fname} onChange={UpdateDetails}></input><br/>
                <input name="lname" defaultValue={contact.lname} onChange={UpdateDetails}></input><br/>
                <input name="ph" defaultValue={contact.ph} onChange={UpdateDetails}></input><br/>
                <input name="email" defaultValue={contact.email} onChange={UpdateDetails}></input>
            </div>

            }
          </div>
          {
            !isEditing ?
              
            <div className="contactBtns">
              <button onClick={toggleEditContact} className="btnPrimary">Edit</button>
              <button onClick={deleteContact} className="btnDanger">Delete</button>
            </div>
              
              :
            
            <div className="contactBtns">
              <button onClick={toggleEditContact} className="btnDefault">Cancel</button>
              <button onClick={updateContact} className="btnSuccess">Update</button>
            </div>
          }
        </div>
        : null);
    }

  export default ContactViewComponent;