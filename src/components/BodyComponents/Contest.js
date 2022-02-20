import React, { PureComponent } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./Contest.css";
import share from "../../assets/images/share.png";

let userData = [
  {
    id: 1,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 2,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 3,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 4,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 5,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 6,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 7,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 8,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
  {
    id: 9,
    contestId: "Contest ID",
    contestStatus: "10/100",
  },
];

class Contest extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
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
    // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    const data = userData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      orgtableData: userData,
      tableData: slice,
      // });
    });
  }

  render() {
    return (
      <>
        {/* Main section  */}
        <div id="main">
          <div className="contest-container">
            <form id="req-contest" className="req-contest">
              <label className="contest_id-title" htmlFor="contest_id">
                Request Contest
              </label>
              <br />
              <input type="text" name="contest_id" id="contest_id" value="" />
              <br />
              <input type="sumbit" value="Next" className="submit" />
            </form>
          </div>

          {/* Referal history table  */}
          <h2 className="table-title">Contest History</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Serial No.</th>
                <th scope="col">Contest ID</th>
                <th scope="col">Contest Status</th>
                <th scope="col">Share</th>
              </tr>
            </thead>
            <tbody className="page-data">
              {this.state.tableData.map((tdata, i) => (
                <tr>
                  <td>{tdata.id}</td>
                  <td>{tdata.contestId}</td>
                  <td>{tdata.contestStatus}</td>
                  <td>
                    <img
                      src={share}
                      alt="share-icon"
                      style={{ width: 25, height: 25, cursor: "pointer" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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

export default Contest;
