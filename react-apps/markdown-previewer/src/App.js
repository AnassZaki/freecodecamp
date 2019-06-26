import React, { useState } from "react";
import "./App.css";
import marked from "marked";

const placeholder = `## What is Markdown?
see [Wikipedia](https://en.wikipedia.org/wiki/Markdown)

> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".

----
## usage
1. Write markdown text in this textarea.
2. Click 'HTML Preview' button.

----
## markdown brief reference
# headers

*emphasis*

**strong**

* list

>block quote
code (4 spaces indent)
[links](https://wikipedia.org)

----
## source
* [markdown-js](https://github.com/evilstreak/markdown-js)

`;

marked.setOptions({
  breaks: true
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <body>
        <div className="container">
          <GetInput
            input={this.state.inputValue}
            handleChange={this.handleChange}
          />
          <RenderInput input={this.state.inputValue} />
        </div>
      </body>
    );
  }
}

class GetInput extends React.Component {
  render() {
    return (
      <div>
        <h3>Markdown</h3>
        <textarea
          id="editor"
          value={this.props.input}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

function RenderInput({input}) {
  return (
    <div>
      <h3>Preview</h3>
      <section
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(input) }}
      />
    </div>
  );
}

export default App;
