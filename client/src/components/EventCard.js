import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

class EventCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-12 mt-2 mb-2">
        {this.props.data.map(item => {
          return (
            <div className="card mt-2 mb-2">
              <div className="card-header">
                {item.event} &nbsp;&nbsp;&nbsp; Speeker : {item.main_speaker}
                &nbsp;&nbsp;&nbsp; Speeker Occupation : &nbsp;
                {item.speaker_occupation}
                &nbsp;&nbsp;&nbsp; Date :&nbsp;
                {moment.unix(item.published_date).format("DD MMM YYYY")}
                &nbsp;&nbsp;&nbsp;
                <a target="_blank" href={item.url}>
                  Visit
                </a>
              </div>

              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <span>
                  {" "}
                  Ratings :
                  <br />
                  {item.ratings[0].map(rat => {
                    return (
                      <span>
                        <span>
                          {rat.name} : {rat.count} &nbsp;&nbsp;
                        </span>
                      </span>
                    );
                  })}
                </span>
                <br />
                {item.tags.map(tag => {
                  return <span> Tags : {tag} &nbsp;</span>;
                })}
              </div>

              <div class="card-footer text-muted">
                <span>
                  Views : {item.views}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>

                <Link
                  to={"/all-events/" + item._id}
                  className="btn btn-primary"
                >
                  Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default EventCard;
