import React, { Component } from "react";
import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
      title: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField, title } = this.state;
    // const filteredMonsters = monsters.filter(monster =>
    //   monster.name.toLowerCase().includes(searchField.toLowerCase())
    // );

    return (
      <div className="App">
        {/* <h1> Monster Rolodex </h1> */}
        <h1>{title}</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={e =>
            this.setState({
              searchField: e.target.value,
              title: e.target.value
            })
          }
        />
        {/* <CardList monsters={filteredMonsters} /> */}
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
