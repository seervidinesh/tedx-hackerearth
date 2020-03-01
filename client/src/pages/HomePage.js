import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EventCard from "../components/EventCard";
import classnames from "classnames";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchData: null,
      selectData: "event",
      idErr: ""
    };
  }

  getSearchData = e => {
    e.preventDefault();
    axios
      .get(
        "/api/events/search-event?event=" +
          this.state.search +
          "&&selectData=" +
          this.state.selectData +
          ""
      )
      .then(res => {
        console.log(res);
        var myData = res.data.map(item => {
          const {
            _id,
            description,
            event,
            main_speaker,
            name,
            published_date,
            ratings,
            related_talks,
            speaker_occupation,
            tags,
            title,
            url,
            views
          } = item;

          return {
            _id,
            description,
            event,
            main_speaker,
            name,
            published_date,
            ratings: eval("[" + ratings + "]"),
            related_talks: eval("[" + related_talks + "]"),
            speaker_occupation,
            tags: eval("[" + tags + "]"),
            title,
            url,
            views
          };
        });
        this.setState({ ...this.state, idErr: null, searchData: myData });
      })
      .catch(err =>
        this.setState({
          search: "",
          searchData: "",
          idErr: err.response.data.event
        })
      );
  };
  changeHandler = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container m-5">
        <form className="form">
          <div className="row">
            <div className="col-3">
              <div className="form-group mb-2">
                <label>Select What you want to search for</label>
                <select
                  className="form-control"
                  name="selectData"
                  id="yearSelect"
                  onChange={this.changeHandler}
                  value={this.state.selectData}
                >
                  <option value="event">Search By Event</option>
                  <option value="main_speaker">Search by Main Speeker</option>
                  <option value="name">Search by Name</option>
                  <option value="title">Search by title</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              <label>Search Value</label>
              <input
                className={classnames("form-control", {
                  "is-invalid": this.state.idErr
                })}
                name="search"
                value={this.state.search}
                onChange={this.changeHandler}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {this.state.idErr && (
                <span className="invalid-feedback"> {this.state.idErr} </span>
              )}
            </div>
            <div className="col-2 mt-2">
              <button
                type="submit"
                className="btn btn-success mb-3 mt-4"
                onClick={this.getSearchData}
              >
                Search
              </button>
            </div>
          </div>
        </form>
        {this.state.searchData ? (
          <EventCard data={this.state.searchData} />
        ) : null}
      </div>
    );
  }
}
export default HomePage;
