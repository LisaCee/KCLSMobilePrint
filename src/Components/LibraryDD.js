import React, { Component } from "react";
// import ListOfLibraries from '/ListOfLibraries'

class LibraryDD extends Component {

    state = {
        libraries: ["Algona Pacific", "Auburn", "Muckleshoot"],
        selection: ""
    }

    
  render() {
    return (
      <select>
          {this.state.libraries.map((library) => (
              <option>{library}</option>
          ))}
      </select>
    );
  }
}

export default LibraryDD;
