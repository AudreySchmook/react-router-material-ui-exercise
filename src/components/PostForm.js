import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';



class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      author: '',
      title: '',
      body: ''
    };
    console.log ("props")
    this.state = this.defaultState
  }

  componentWillReceiveProps() {
    console.log("received props")
  }

  handleAuthorChange = (event) => {
    this.setState({author: event.target.value});
  }

  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  }

  handleBodyChange = (event) => {
    this.setState({body: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // take our post in state and pass it up to the parent component
    //this.props.addPost(this.state)
    //this.setState(this.defaultState)
    //this.props.history.push("/posts")
    fetch('http://10.206.25.26:8080/posts', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
     .then(() => {
       this.setState(this.defaultState)
       this.props.history.push("/posts")
     })

  }

  render() {

    const formStyle = {
      margin: '10px',
    };

    const textFieldStyle = {
      marginLeft: '10px'
    }

    return (
      <Paper style={formStyle} zDepth={3}>
      <form onSubmit={this.handleSubmit}>
        <Divider />
          <TextField 
          floatingLabelText="Title" 
          hintText="The Title"
          type="text" 
          value={this.state.title} 
          onChange={this.handleTitleChange}
          underlineShow={false}
          fullWidth={true}
          style={textFieldStyle}
          />
        <Divider />
          <TextField 
          floatingLabelText="Author" 
          hintText="Your Name"
          type="text" 
          value={this.state.author} 
          onChange={this.handleAuthorChange}
          underlineShow={false}
          fullWidth={true}
          style={textFieldStyle}
          />
         <Divider />
          <TextField 
          floatingLabelText="Body" 
          hintText="The Blog Post"
          type="text" 
          value={this.state.body} 
          onChange={this.handleBodyChange}
          underlineShow={false}
          fullWidth={true}
          style={textFieldStyle}
          multiLine={true}
          rows={10}
          />
         <Divider />
          <RaisedButton 
          type="submit" 
          label="Submit" 
          primary={true} 
          fullWidth={true}
          />
      </form>
      </Paper>
    );
  }
}

export default PostForm;
