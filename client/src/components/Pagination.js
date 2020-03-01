import React, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav aria-label="..." className="mt-3 mb-3 justify-content-center">
        <ul className="pagination ">
          {this.props.firstPage ? (
            <li className="page-item">
              <span className="page-link" onClick={this.props.clickFunc}>
                {this.props.firstPage}
              </span>
            </li>
          ) : null}
          {this.props.prevPage ? (
            <li className="page-item">
              <span className="page-link" onClick={this.props.clickFunc}>
                {this.props.prevPage}
              </span>
            </li>
          ) : null}
          <li className="page-item active" aria-current="page">
            <span className="page-link" onClick={this.props.clickFunc}>
              {this.props.currPage}
            </span>
          </li>
          {this.props.nextPage ? (
            <li className="page-item">
              <span className="page-link" onClick={this.props.clickFunc}>
                {this.props.nextPage}
              </span>
            </li>
          ) : null}

          {this.props.lastPage ? (
            <li className="page-item">
              <span className="page-link" onClick={this.props.clickFunc}>
                {this.props.lastPage}
              </span>
            </li>
          ) : null}
        </ul>
      </nav>
    );
  }
}
export default Pagination;
