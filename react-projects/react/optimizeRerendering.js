class OnlyEvens extends React.Component {
    constructor(props) {
        super(props);
    }
    // We can call shouldComponentUpdate() when child components receive new state or props,
    // and declare specifically if the components should update or not. 
    // it takes nextProps and nextState as parameters.
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');
        if (nextProps.value % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    /* This method is a useful way to optimize performance. 
    For example, the default behavior is that our component re-renders when it receives new props, even if the props haven't changed. 
    We can use shouldComponentUpdate() to prevent this by comparing the props. 
    The method must return a boolean value that tells React whether or not to update the component. 
    We can compare the current props (this.props) to the next props (nextProps) to determine if we need to update or not, 
    and return true or false accordingly.*/

    componentWillReceiveProps(nextProps) {
        console.log('Receiving new props...');
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render() {
        return <h1>{this.props.value}</h1>
    }
};

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.addValue = this.addValue.bind(this);
    }
    addValue() {
        this.setState({
            value: this.state.value + 1
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.addValue}>Add</button>
                <OnlyEvens value={this.state.value} />
            </div>
        );
    }
};