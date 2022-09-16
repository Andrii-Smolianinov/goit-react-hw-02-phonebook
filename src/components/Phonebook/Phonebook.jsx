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

  addContactInState = contact => {
    if (this.isDuplicate(contact)) {
      return alert(
        `Контакт з іменем - ${contact.name} та номером телефону - ${contact.number} вже існує у списку`
      );
    }

    this.setState(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };

  removeContact = id => {
    this.setState(prev => {
      const newContacts = prev.contacts.filter(item => item.id !== id);

      return {
        contacts: newContacts,
      };
    });
  };

  filterChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  isDuplicate({ name, number }) {
    const { contacts } = this.state;
    const result = contacts.find(
      item => item.name === name && item.number === number
    );
    return result;
  }

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result =
        normalizedName.includes(normalizedFilter) ||
        number.includes(normalizedFilter);
      return result;
    });
    return filteredContacts;
  }

  render() {
    const { addContactInState, filterChange, removeContact } = this;
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();
    return (
      <StylesPhonebook>
        <div className="form">
          <FormAddContact onSubmit={addContactInState} />
          <ContactsList items={contacts} removeContact={removeContact} />
        </div>

        <label className="labelFilter" htmlFor="">
          Contacts filter
        </label>
        <input
          className="inputFilter"
          type="text"
          name="filter"
          onChange={filterChange}
          value={filter}
        />
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
