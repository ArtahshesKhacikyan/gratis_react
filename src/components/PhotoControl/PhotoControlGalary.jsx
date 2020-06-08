/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Carousel } from "react-responsive-carousel";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class PhotoControlGalary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectidUserData: {},
      back: "",
      front: "",
      left_side: "",
      license: "",
      license_b: "",
      right_side: "",
      salon_a: "",
      salon_b: "",
      tech_pass: "",
      tech_pass_b: "",
    };
  }

  componentDidMount = () => {
    if (this.props.getPhotoCantrolDataResponse) {
      let _selectedUserData = this.props.getPhotoCantrolDataResponse.data.filter(
        (data) => {
          return data.id === this.props.selectUserId;
        }
      );
      if (_selectedUserData) {
        _selectedUserData.map((img) =>
          this.setState({
            front: img.photo.front,
            back: img.photo.back,
            left_side: img.photo.left_side,
            license: img.photo.license,
            license_b: img.photo.license_b,
            right_side: img.photo.right_side,
            salon_a: img.photo.salon_a,
            salon_b: img.photo.salon_b,
            tech_pass: img.photo.tech_pass,
            tech_pass_b: img.photo.tech_pass_b,
          })
        );
      }

      this.setState({ selectidUserData: _selectedUserData });
    }
  };

  carPhotosTable = (rows) => {
    console.log("-----r---", rows);
    return (
      <TableContainer component={Paper} className="cars-photo-table">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Перед</TableCell>
              <TableCell align="center">Вид Сзади</TableCell>
              <TableCell align="center">Левый бок</TableCell>
              <TableCell align="center">Правый бок</TableCell>
              <TableCell align="center">Салон А</TableCell>
              <TableCell align="center">Салон B</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" align="center" scope="row">
                <img src={rows.front} alt="" />
              </TableCell>
              <TableCell align="center">
                <img src={rows.back} alt="" />
              </TableCell>
              <TableCell align="center">
                <img src={rows.back} alt="" />
              </TableCell>
              <TableCell align="center">
                <img src={rows.back} alt="" />
              </TableCell>
              <TableCell align="center">
                <img src={rows.back} alt="" />
              </TableCell>
              <TableCell align="center">
                <img src={rows.back} alt="" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  carTexPassportPhotos = (rows) => {
    console.log("-----r---", rows);
    return (
      <TableContainer component={Paper} className="cars-photo-table">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Тех. Паспорт A</TableCell>
              <TableCell align="center">Тех. Паспорт B</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" align="center" scope="row">
                <img src={rows.tech_pass} alt="" />
              </TableCell>
              <TableCell align="center">
                <img src={rows.tech_pass_b} alt="" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  render() {
    console.log("This props", this.state.images);
    return (
      <div className="image-gallery-header">
        <Carousel>
          <div>
            <img src={this.state.front} />
            <p className="legend"> Перед</p>
          </div>
          <div>
            <img src={this.state.back} />
            <p className="legend">Вид Сзади </p>
          </div>
          <div>
            <img src={this.state.left_side} />
            <p className="legend"> Левый бок</p>
          </div>
          <div>
            <img src={this.state.right_side} />
            <p className="legend">Правый бок</p>
          </div>
          <div>
            <img src={this.state.salon_a} />
            <p className="legend">Салон А</p>
          </div>
          <div>
            <img src={this.state.salon_b} />
            <p className="legend">Салон B</p>
          </div>
          <div>
            <img src={this.state.tech_pass} />
            <p className="legend">Тех. Паспорт</p>
          </div>
          <div>
            <img src={this.state.tech_pass_b} />
            <p className="legend">Тех. Паспорт B</p>
          </div>
          <div>
            <img src={this.state.license} />
            <p className="legend"> В. Права</p>
          </div>
          <div>
            <img src={this.state.license_b} />
            <p className="legend">В. Права B</p>
          </div>
        </Carousel>
        <div>{this.carPhotosTable(this.state)}</div>
        <div className='tex-passport-img-section'>
          {this.carTexPassportPhotos(this.state)}
          {this.carTexPassportPhotos(this.state)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    getPhotoCantrolDataResponse: state.photoControl.getPhotoCantrolDataResponse,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoControlGalary);
