import React from "react";

class GrabPoster extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-xs-8">
          <h1>React Axios Example</h1>
          {this.state.users.map(user => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GrabPoster;
