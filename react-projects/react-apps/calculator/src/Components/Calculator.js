import React from "react";
import "./_Calculator.scss";

// Calculator buttons

const Button = props => {
  return (
    <button
      className={`calculator__btn ${props.extraClass}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  extraClass: ""
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operatorA: "",
      operatorB: "",
      operator: null,
      history: []
    };
  }

  //	Numeric function

  handleNumber = (e, number) => {
    e.target.blur();

    if (this.state.operator === "=") {
      this.setState({
        operatorA: parseFloat(number).toString(),
        operator: null,
        history: []
      });
    } else if (!this.state.operator) {
      this.setState({
        operatorA: parseFloat(this.state.operatorA + number).toString()
      });
    } else {
      this.setState({
        operatorB: parseFloat(this.state.operatorB + number).toString()
      });
    }
  };

  //	Operator function

  handleOperator = (e, operator) => {
    e.target.blur();

    if (this.state.operatorA === "") {
      return;
    }

    if (this.state.operator === null) {
      this.setState({
        operator: operator
      });
    } else if (this.state.operator === "=") {
      this.setState({
        operator: operator
      });
    } else {
      let plusResult;
      let opA = parseFloat(this.state.operatorA);
      let opB =
        this.state.operatorB !== "" ? parseFloat(this.state.operatorB) : 0;

      switch (this.state.operator) {
        case "+":
          plusResult = opA + opB;
          break;

        case "-":
          plusResult = opA - opB;
          break;

        case "*":
          plusResult = opA * opB;
          break;

        case "/":
          plusResult = opA / opB;
          break;

        default:
          break;
      }

      this.setState({
        operator: operator,
        operatorA: plusResult.toString(),
        operatorB: ""
      });
    }
  };

  //	Result function

  handleDecimal = e => {
    e.target.blur();

    if (this.state.operatorA === "") {
      return;
    }

    if (this.state.operatorB === "") {
      this.setState({ operatorA: this.state.operatorA.concat(".") });
    } else {
      this.setState({ operatorB: this.state.operatorB.concat(".") });
    }
  };

  //	Result function

  handleResult = (e, operator) => {
    e.target.blur();

    if (this.state.operatorB === "") {
      return;
    }

    const opA = parseFloat(this.state.operatorA);
    const opB = parseFloat(this.state.operatorB);
    let finalResult;

    switch (this.state.operator) {
      case "+":
        finalResult = Math.round((opA + opB) * 100) / 100;
        break;

      case "-":
        finalResult = Math.round((opA - opB) * 100) / 100;
        break;

      case "*":
        finalResult = Math.round(opA * opB * 100) / 100;
        break;

      case "/":
        finalResult = Math.round((opA / opB) * 100) / 100;
        break;

      default:
        break;
    }

    this.setState({
      operatorA: finalResult.toString(),
      operatorB: "",
      operator: operator
    });
  };

  handleOnChange = e => {
    // Only for keyUp fix
  };

  handleKeyUp = e => {
    let value = e.key;
    const regexNumber = /^[0-9\b]+$/;

    if (regexNumber.test(value)) {
      if (this.state.operator === "=") {
        this.setState({
          operatorA: value,
          operator: null,
          history: []
        });
      } else {
        this.state.operatorB === ""
          ? this.setState({ operatorA: this.state.operatorA + value })
          : this.setState({ operatorB: this.state.operatorB + value });
      }
    }
  };

  //	Reset function

  handleReset = (e, operator) => {
    e.target.blur();

    this.setState({
      operatorA: "",
      operatorB: "",
      operator: null
    });
  };

  render() {
    let result = "0";
    console.log(this.state);

    if (this.state.operatorB !== "") {
      result = parseFloat(this.state.operatorB).toString();
    } else if (this.state.operatorA !== "") {
      result = parseFloat(this.state.operatorA).toString();
    } else {
      result = parseFloat(result).toString();
    }

    return (
      <div className="calculator">
        <input
          className="calculator__result"
          type="text"
          value={result}
          onChange={e => this.handleOnChange(e)}
          onKeyUp={e => this.handleKeyUp(e)}
        />

        <Button onClick={e => this.handleNumber(e, 1)}>1</Button>
        <Button onClick={e => this.handleNumber(e, 2)}>2</Button>
        <Button onClick={e => this.handleNumber(e, 3)}>3</Button>
        <Button
          onClick={e => this.handleOperator(e, "+")}
          extraClass="calculator__btn--operator"
        >
          +
        </Button>

        <Button onClick={e => this.handleNumber(e, 4)}>4</Button>
        <Button onClick={e => this.handleNumber(e, 5)}>5</Button>
        <Button onClick={e => this.handleNumber(e, 6)}>6</Button>
        <Button
          onClick={e => this.handleOperator(e, "-")}
          extraClass="calculator__btn--operator"
        >
          -
        </Button>

        <Button onClick={e => this.handleNumber(e, 7)}>7</Button>
        <Button onClick={e => this.handleNumber(e, 8)}>8</Button>
        <Button onClick={e => this.handleNumber(e, 9)}>9</Button>
        <Button
          onClick={e => this.handleOperator(e, "*")}
          extraClass="calculator__btn--operator"
        >
          *
        </Button>

        <Button
          onClick={e => this.handleNumber(e, 0)}
          extraClass="calculator__btn--cero"
        >
          0
        </Button>
        <Button onClick={e => this.handleDecimal(e)}>.</Button>
        <Button
          onClick={e => this.handleOperator(e, "/")}
          extraClass="calculator__btn--operator"
        >
          /
        </Button>

        <Button
          onClick={e => this.handleReset(e)}
          extraClass="calculator__btn--reset"
        >
          C
        </Button>
        <Button
          onClick={e => this.handleResult(e, "=")}
          extraClass="calculator__btn--equal"
        >
          =
        </Button>
      </div>
    );
  }
}

export default Calculator;
