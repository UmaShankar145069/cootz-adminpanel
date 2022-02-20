import React, { PureComponent } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./Referal.css";
import star from "../../assets/images/Star.png";
import copy from "../../assets/images/copy.png";

let referData = [
  {
    id: 1,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 2,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 3,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 4,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 5,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 6,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 7,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 8,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 9,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 10,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 11,
    username: "username",
    referal: "Referal Level",
  },
  {
    id: 12,
    username: "username",
    referal: "Referal Level",
  },
];

class Referal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      referalNo: 200,
      referalID: "qwe345fr",
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handleClick() {
    // code for copying the referal id
    let copyText = document.querySelector(".copy-text");
    copyText.querySelector("button").addEventListener("click", function () {
      let input = copyText.querySelector("input.text");
      input.select();
      document.execCommand("copy");
      copyText.classList.add("active");
      window.getSelection().removeAllRanges();
      setTimeout(function () {
        copyText.classList.remove("active");
      }, 2500);
    });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // axios
    //     .get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => {
    const data = referData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      orgtableData: referData,
      tableData: slice,
    });
    // })
  }

  render() {
    return (
      <>
        {/* Main section  */}
        <div id="main">
          <div className="referal-container">
            <div className="referal">
              <div className="data one">
                <h3>Number of referals done</h3>
                <span>{this.state.referalNo}</span>
              </div>
            </div>
            <div className="referal">
              <div className="data two">
                <h3>Number of successful referals</h3>
                <span>{this.state.referalNo}</span>
                <span className="level">
                  <span className="star-container">
                    <img src={star} alt="star-icon" />
                  </span>
                  <span className="text">LEVEL 1</span>
                </span>
              </div>
            </div>
            <div className="referal">
              <div className="data three">
                <h3>Number of paid referals</h3>
                <span>{this.state.referalNo}</span>
                <span className="level">
                  <span className="star-container">
                    <img src={star} alt="star-icon" />
                  </span>
                  <span className="text">LEVEL 2</span>
                </span>
              </div>
            </div>
            <div className="referal">
              <div className="data four">
                <h3 id="referal-id">Refer Now</h3>
                <div className="copy-text">
                  <input
                    type="text"
                    className="text"
                    value={this.state.referalID}
                  />
                  <button
                    className="copy"
                    title="copy"
                    onClick={() => this.handleClick()}
                  >
                    <img src={copy} alt="copy-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Referal history table */}
          <h2 className="table-title">Referal History</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Serial No.</th>
                <th scope="col">Username</th>
                <th scope="col">Referal Level</th>
              </tr>
            </thead>
            <tbody className="page-data">
              {this.state.tableData.map((tdata, i) => (
                <tr>
                  <td>{tdata.id}</td>
                  <td>{tdata.username}</td>
                  <td>{tdata.referal}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination  */}
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </div>
      </>
    );
  }
}

export default Referal;
