import React, { Component } from "react";
import { connect } from "react-redux";
import GamesList from "./gameslist.component";
import PropTypes from "prop-types";
import { saveGame } from "../Actions/actions";

class AddGamesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      cover: "",
      errors: {},
      loading: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, cover } = this.state;
    this.setState({ loading: true });
    this.props
      .saveGame({ title, cover })
      .then(
        () => {},
        err =>
          err.response.json().then(({ errors }) => this.setState({ errors }))
      );
  };

  render() {
    return (
      <div>
        <h1>Add New Game</h1>

        {!!this.state.errors.global && (
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Oops!</strong> {this.state.errors.global}
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        <form onSubmit={this.handleSubmit} className="spinner-border">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cover">Cover URL</label>
            <input
              type="text"
              className="form-control"
              id="cover"
              placeholder="URL"
              name="cover"
              value={this.state.cover}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            {this.state.cover !== "" && (
              <img src={this.state.cover} alt="cover" className="img-fluid" />
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { saveGame }
)(AddGamesPage);
