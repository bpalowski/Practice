import React from 'react';
import PropTypes from 'prop-types';

function NewForm(props) {

  let _names = null;
  let _location = null;
  let _issue = null;


  function handleNewTicketFormSubmission(event) {
    event.preventDefault();

    props.onHome({names: _names.value, location: _location.value, issue: _issue.value});

    _names.value = '';
    _location.value = '';
    _issue.value = '';

  }
  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <input
          type='text'
          id='issue'
          placeholder='Describe your issue.'
          ref={(input) => {_issue = input;}}/>

        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewForm.propTypes = {
  onHome: PropTypes.func
};


export default NewForm;
