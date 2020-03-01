import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import Animation from "./Animation";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: null
    };
  }
  componentDidMount() {
    var eventId = this.props.match.params.eventId;
    axios
      .get("/api/events/event/" + eventId + "")
      .then(result => {
        this.setState({
          eventData: {
            _id: result.data._id,
            description: result.data.description,
            event: result.data.event,
            main_speaker: result.data.main_speaker,
            name: result.data.name,
            published_date: moment
              .unix(result.data.published_date)
              .format("DD MMM YYYY"),
            ratings: eval("[" + result.data.ratings + "]"),
            related_talks: eval("[" + result.data.related_talks + "]"),
            speaker_occupation: result.data.speaker_occupation,
            tags: eval("[" + result.data.tags + "]"),
            title: result.data.title,
            url: result.data.url,
            views: result.data.views
          }
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.eventData);
    return (
      <div>
        {this.state.eventData ? (
          <div>
            <div class="card m-5 ">
              <h5 class="card-header">
                {this.state.eventData.event} &nbsp;&nbsp;&nbsp; Speeker :{" "}
                {this.state.eventData.main_speaker}
                &nbsp;&nbsp;&nbsp; Speeker Occupation : &nbsp;
                {this.state.eventData.speaker_occupation}
                &nbsp;&nbsp;&nbsp; Date :&nbsp;
                {this.state.eventData.published_date}
                &nbsp;&nbsp;&nbsp;
              </h5>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>

                {this.state.eventData.tags.map(tag => {
                  return <span>Tags : {tag}</span>;
                })}
                <br />
                <span>
                  {" "}
                  Ratings :
                  <br />
                  {this.state.eventData.ratings[0].map(rat => {
                    return (
                      <span>
                        <span>
                          {rat.name} : {rat.count} &nbsp;&nbsp;
                        </span>
                      </span>
                    );
                  })}
                </span>
              </div>
              <div class="card-footer text-muted">
                <span>
                  Views : {this.state.eventData.views} &nbsp;&nbsp;&nbsp; &nbsp;
                </span>

                <a
                  target="_blank"
                  className="btn btn-success"
                  href={this.state.eventData.url}
                >
                  Visit
                </a>
              </div>
            </div>
            <div className="container mb-5">
              Related Talks :
              {this.state.eventData.related_talks[0].map(relatedTalks => {
                return (
                  <div class="col-sm-5 mt-2 mb-2">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">{relatedTalks.title}</h5>
                        <span class="card-text">
                          {" "}
                          Speeker : {relatedTalks.speaker}
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        </span>

                        <span class="card-text">
                          {" "}
                          Duration : {relatedTalks.duration}
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                        <span class="card-text">
                          {" "}
                          Views : {relatedTalks.viewed_count}
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <Animation />
        )}
      </div>
    );
  }
}
export default EventDetail;
