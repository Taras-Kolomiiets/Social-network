import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode() {
    console.log(this);
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode() {
    this.setState({ editMode: false });
    this.props.updateUserStatus(this.state.status);
  }

  onStatusChange(e) {
    this.setState({
      status: e.target.value,
    });
  }

  componentDidUpdate(prewProps, prewState) {
    if (prewProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status || "Hello!!!"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange.bind(this)}
              autoFocus={true}
              onBlur={this.deactivateEditMode.bind(this)}
              value={this.state.status}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
