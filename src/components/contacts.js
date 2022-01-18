import React from 'react';
import Image from './image';

const Contacts = ({ contacts }) => {

    return (
      <div>
        <center><h1>Contact List</h1></center>
        <div className='row'>
        {contacts.map((contact) => (
          // { <div><pre>{JSON.stringify(contacts, null, 2) }</pre></div>}
          <div className='col-md-4'>
            <div className="card" key={contact.id}>
              <Image id={contact.id} />
              <div className="card-body">
                <h5 className="card-title">{contact.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p className="card-text">{contact.company.catchPhrase}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    )
  };

  export default Contacts;