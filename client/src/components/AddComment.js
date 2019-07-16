import React from 'react';
import { connect } from 'react-redux';
import { MDBBtn } from 'mdbreact';

class AddComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      name: '',
      email: '',
      userId: this.props.userId
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  onHandleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onHandleSubmit(e) {
    e.preventDefault();
    if (!this.state.text) return;
    if (this.props.userId) {
      this.props.addComment({ text: this.state.text });
      this.setState({
        text: ''
      });
    } else {
      if (!this.state.email) return;
      if (!this.state.name) return;
      this.props.addCommentWithNewUserData(
        {
          name: this.state.name,
          email: this.state.email
        },
        {
          text: this.state.text
        }
      );
      this.setState({
        text: '',
        name: '',
        email: ''
      });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <input
            onChange={e => this.onHandleChange(e)}
            type="text"
            name="text"
            value={this.state.text}
            className="form-control"
            placeholder="Type your Comment"
          />
          {!this.state.userId ? (
            <input
              onChange={e => this.onHandleChange(e)}
              type="text"
              name="name"
              value={this.state.name}
              className="form-control"
              placeholder="Name"
            />
          ) : null}
          {!this.state.userId ? (
            <input
              onChange={e => this.onHandleChange(e)}
              type="email"
              name="email"
              value={this.state.email}
              className="form-control"
              placeholder="Email Address"
            />
          ) : null}

          <div className="text-center">
            <MDBBtn type="submit" color="primary">
              Add Comment
            </MDBBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(AddComment);
