import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Home from'./Home';
import Header from'./Header';
import List from './List';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterList: []
    };
    this.handleAddingNewItemToList = this.handleAddingNewItemToList.bind(this);
  }

  handleAddingNewItemToList(newItem){
    var newMasterList = this.state.masterList.slice();
    newMasterList.push(newItem);
    this.setState({masterList: newMasterList});
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/home' render={()=><Home onHome={this.handleAddingNewItemToList}/>} />
          <Route exact path='/' render={()=><List list={this.state.masterList} />} />
          <Route componet={Error404}/>
        </Switch>
      </div>
    );
  // }
  }
}

export default App;
