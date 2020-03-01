import React, { Component } from "react";
import EventCard from "./EventCard";
import Animation from "./Animation";
import Pagination from "./Pagination";
import axios from "axios";

class AllEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myData: null,
      pageInfo: null
    };
  }

  getPageData = event => {
    axios
      .get("/api/events/all/" + event.currentTarget.textContent + "")
      .then(res => {
        var myData = res.data.result.map(item => {
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
        this.setState({ myData, pageInfo: res.data.pageInfo });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios
      .get("/api/events/all/1")
      .then(res => {
        var myData = res.data.result.map(item => {
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
        this.setState({ myData, pageInfo: res.data.pageInfo });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);

    return (
      <div className="container m-5">
        {this.state.myData ? (
          <div className="row">
            <EventCard data={this.state.myData} />
          </div>
        ) : (
          <Animation />
        )}
        <div>
          {" "}
          {this.state.pageInfo ? (
            <Pagination
              clickFunc={this.getPageData}
              firstPage={this.state.pageInfo.firstPage}
              prevPage={this.state.pageInfo.prevPage}
              currPage={this.state.pageInfo.currPage}
              nextPage={this.state.pageInfo.nextPage}
              lastPage={this.state.pageInfo.totalPages}
            />
          ) : null}{" "}
        </div>
      </div>
    );
  }
}

export default AllEvents;
