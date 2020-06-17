import React from "react";
import Sidebar from "react-sidebar";
import HomePage from "./HomePage";

export default class SideBar extends React.Component {
  state = {
    sidebarOpen: false,
  };

  onSetSidebarOpen(open) {
    this.setState({
      sidebarOpen: open,
    });
  }

  render() {
    return (
      <Sidebar
        sidebar={
          <ul>
            <li>Home Page</li>
            <li>Movie List</li>
            <li>Liked List</li>
            <li>Blocked List</li>
          </ul>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: {
            background: "white",
            width: "300px",
          },
        }}
      >
        <HomePage onClick={() => this.onSetSidebarOpen(true)} />
      </Sidebar>
    );
  }
}
