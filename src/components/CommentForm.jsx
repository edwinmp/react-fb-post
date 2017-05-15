import React from 'react';
import faker from 'faker';
import '../index.css';

const newComment = [];
class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      lcomments: newComment,
    };
  }

  Enter() {
    if (event.keyCode === 13) {
      this.Submit();
    }
  }

  Submit() {
    const commentText = document.getElementById('comment').value;
    const image = document.getElementById('image').src;
    const comment = {};
    comment.name = faker.name.findName();
    comment.image = image;
    comment.text = commentText;
    const realComments = JSON.parse(localStorage.getItem('lcomments')) || [];
    realComments.push(comment);
    localStorage.setItem('lcomments', JSON.stringify(realComments));
    this.setState({ lcomments: newComment });
  }

  ShowComments() {
    const ncomment = localStorage.getItem('lcomments');
    const realComments = JSON.parse(ncomment);
    if (realComments !== null) {
      return (
            realComments.map((comment, index) => (
              <div id="maincomment">
                <span>
                  <img src={faker.image.avatar()} alt="profilepic" height="32" width="32" />
                  <div key={index} id="commentright">
                    {comment.name}&nbsp;{comment.text}
                  </div>
                </span>
              </div>
            ),
            )
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12" id="commentForm">
            {this.ShowComments()}
          </div>
        </div>
        <div id="commentArea">
          <form onSubmit={this.Submit} id="commentBox">
            <img alt="face" src={faker.image.avatar()} className="side" height="32" width="32" />
            &nbsp;
            <input type="text" placeholder="Write a comment" id="comment" onKeyDown={this.Enter} />
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
