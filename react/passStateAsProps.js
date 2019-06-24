// this is a Parent Stateful Component that renders the child component 
class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot'
        }
    }
    render() {
        return (
            <div>
                <Navbar name={this.state.name} />
            </div>
        );
    }
};

// This is a Child Stateless Component that renders the state as props
class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello, my name is: {this.props.name} </h1>
            </div>
        );
    }
};