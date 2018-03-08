import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    const { activeBook } = this.props;
    if (!activeBook.title) {
      return <div>Select a book to get started.</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{`Title: ${activeBook.title}`}</div>
        <div>{`Pages: ${activeBook.pages}`}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ activeBook }) => ({
  activeBook
});
export default connect(mapStateToProps)(BookDetail);
