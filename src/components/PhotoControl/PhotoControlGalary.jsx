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
import Switch from "@material-ui/core/Switch";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      image1Checked: false,
      image2Checked: false,
      image3Checked: false,
      photos: [],
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
            right_side: img.photo.right_side,
            license: img.photo.license,
            license_b: img.photo.license_b,
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
    return (
      <TableContainer component={Paper} className="cars-photo-table">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
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
                <Switch
                  className="mark-switch"
                  checked={this.props.image1}
                  onChange={this.props.switchChange}
                  name="image1"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                {/* <input type="checkbox" name="image1" checked={this.state.image1Checked} /> */}
              </TableCell>
              <TableCell component="th" align="center">
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

  carSalonPhotos = (rows) => {
    return (
      <TableContainer component={Paper} className="cars-photo-table">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>

              <TableCell align="center">В. Права</TableCell>
              <TableCell align="center">В. Права В</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" align="center">
                <Switch
                  className="mark-switch"
                  checked={this.props.image3}
                  onChange={this.props.switchChange}
                  name="image3"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                {/* <input type="checkbox" name="image2" className='error-checkbox' /> */}
              </TableCell>
              <TableCell component="th" align="center" scope="row">
                <img src={rows.salon_a} alt="" />
              </TableCell>
              <TableCell align="center">
                <img src={rows.salon_b} alt="" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  carTexPassportPhotos = (rows) => {
    return (
      <TableContainer component={Paper} className="cars-photo-table">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>

              <TableCell align="center">Тех. Паспорт A</TableCell>
              <TableCell align="center">Тех. Паспорт B</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" align="center">
                <Switch
                  className="mark-switch"
                  checked={this.props.image2}
                  onChange={this.props.switchChange}
                  name="image2"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                {/* <input type="checkbox" name="image2" className='error-checkbox' /> */}
              </TableCell>
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
    const { switchChange, image1, image2, image3 } = this.props;
    const images = [
      {
        original: this.state.front,
        thumbnail: this.state.front,
      },
      {
        original: this.state.back,
        thumbnail: this.state.back,
      },
      {
        original: this.state.left_side,
        thumbnail: this.state.left_side,
      },
      {
        original: this.state.right_side,
        thumbnail: this.state.right_side,
      },
      {
        original: this.state.salon_a,
        thumbnail: this.state.salon_a,
      },
      {
        original: this.state.salon_b,
        thumbnail: this.state.salon_b,
      },
      {
        original: this.state.tech_pass,
        thumbnail: this.state.tech_pass,
      },
      {
        original: this.state.tech_pass_b,
        thumbnail: this.state.tech_pass_b,
      },
      {
        original: this.state.license,
        thumbnail: this.state.license,
      },
      {
        original: this.state.license_b,
        thumbnail: this.state.license_b,
      },
    ];
    return (
      <div className="image-gallery-header">
        <ImageGallery
          items={images}
          lazyLoad={true}
          showBullets={true}
          disableThumbnailScroll={true}
        />
        <div>{this.carPhotosTable(this.state)}</div>
        <div className="tex-passport-img-section">
          {this.carTexPassportPhotos(this.state)}
          {this.carSalonPhotos(this.state)}
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
