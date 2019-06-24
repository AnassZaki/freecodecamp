class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const newMessages = [...this.state.messages, this.state.input];
    this.setState({
      messages: newMessages,
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange}/><br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map(msg => <li>{msg}</li>)}
        </ul>
      </div>
    );
  }
};
