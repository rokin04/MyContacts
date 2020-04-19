import React, { useState, useEffect} from 'react'

const ContactAddComponent = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    
    const toggleModal = () => {
        setModalOpen(!modalOpen)
    }
    const details = {};
    const addDetails = (e) => {
        details[e.target.name] = e.target.value;
    }
    
    const addContact = (e) => {
      e.preventDefault();
      let form = document.getElementsByName('details-form')[0]
      console.log(details);
      props.onContactAdded(details);
      setModalOpen(false);
      form.reset();
    }
      
      return (
        <div className="contactAddWrapper">
          <div className="contactAddBtn" onClick={toggleModal}>
            <span>+</span>
          </div>
          <div className={`contactAddModal ${modalOpen ? 'opened' : 'closed'}`}>
            <h2>New Contact</h2>
            <form name="details-form" onSubmit={addContact}>
              First Name
              <input name="fname" onChange={addDetails} required></input>
              Last Name<br/>
              <input name="lname" onChange={addDetails} required></input>
              Phone Number<br/>
              <input name="ph" type="number" onChange={addDetails} required />
              Email<br/>
              <input name="email" onChange={addDetails} required></input>
              <input type="checkbox" onClick={addDetails} name="status"></input>
              <label>Are you active</label>
              <div>
                <button type="button" className="btnDefault" onClick={toggleModal}>Cancel</button>
                <button type="submit" className="btnSuccess">Submit</button>
              </div>
            </form>
          </div>
        </div>
      );
  }

  export default ContactAddComponent;