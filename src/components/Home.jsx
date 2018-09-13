import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewForm from'./NewForm';
import PropTypes from 'prop-types';

class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state ={
      formVisable: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisable: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisable){
      currentlyVisibleContent = <NewForm onHome={this.props.onHome}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

Home.propTypes = {
  onHome: PropTypes.func
};

export default Home;
