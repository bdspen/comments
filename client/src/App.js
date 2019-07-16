import React from 'react';
import CommentList from './containers/CommentList';
import AddComment from './containers/AddComment';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

function App() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="12">
          <CommentList />
        </MDBCol>
      </MDBRow>
      <hr />
      <MDBRow>
        <MDBCol size="12">
          <AddComment />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
