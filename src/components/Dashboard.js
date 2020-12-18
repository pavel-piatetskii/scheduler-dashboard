import React, { Component } from "react";
import Loading from "./Loading"
import Panel from "./Panel"
import classnames from "classnames";


const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];


class Dashboard extends Component {

  // 1st option
  //constructor(props) {
  //  super(props);
  //
  //  this.selectPanel = this.selectPanel.bind(this);
  //}

  state = {
    loading: false,
    focused: null,
  };

  //selectPanel = (id) => this.setState({ focused: (id === this.state.focused) ? null : id }); 2nd option

  // 1st and 3rd option
  selectPanel(id) {
    this.setState(previousState => ({
      focused: previousState.focused !== null ? null : id
    }));
  }
  
  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
     });

    if (this.state.loading) return <Loading />

    const panels = data
      .filter(
        panel => this.state.focused === null || this.state.focused === panel.id
     ).map(el => (
      <Panel
        key={el.id}
        id={el.id}
        label={el.label}
        value={el.value}
        //onSelect={this.selectPanel}
        onSelect={() => this.selectPanel(el.id)}
      />
    ));

    return (
    <main className={dashboardClasses}>{panels}</main>
    );
  }
}

export default Dashboard;
