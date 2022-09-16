// import PropTypes from 'prop-types';
import { StylesPhonebook } from './StylesPhonebook';
import { Component } from 'react';
import FormAddContact from 'components/FormAddContact/FormAddContact';
import ContactsList from 'components/ContactsList/ContactsList';
import { nanoid } from 'nanoid';

export default class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '', 
  };

  addContactInState = (contact) => {
    this.setState((prev) => {
        const newContact = {
            id: nanoid(),
            ...contact
        }
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  render() {
    const { addContactInState } = this;
    const { contacts } = this.state;
    return (
      <StylesPhonebook>
        <>
          <div>
            <FormAddContact onSubmit={addContactInState} />
          </div>
          <input type="text" name="filter"/>
          <ContactsList items={contacts} />
        </>
      </StylesPhonebook>
    );
  }
}

// Phonebook.PropTypes = {
// //   username: PropTypes.string.isRequired,
// //   tag: PropTypes.string.isRequired,
// //   location: PropTypes.string.isRequired,
// //   avatar: PropTypes.string.isRequired,
// //   stats: PropTypes.shape({
// //     followers: PropTypes.number.isRequired,
// //     views: PropTypes.number.isRequired,
// //     likes: PropTypes.number.isRequired,
// //   }),
// };
