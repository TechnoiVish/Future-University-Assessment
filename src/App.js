import "./App.css";
import TodoRow from "./Components/TodoRow/TodoRow.tsx";
import BigButton from "./Components/Buttons/BigButton.tsx";
import React, { Component } from "react";

class App extends Component {
  state = {
    items: [],
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleAdd = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  };
  handleDelete = (id) => {
    console.log("deleted", id);
    const Olditems = [...this.state.items];
    console.log("Olditems", Olditems);
    const items = Olditems.filter((element, i) => {
      return i !== id;
    });
    this.setState({ items: items });
  };
  render() {
    return (
      <div className="container m-auto mt-[100px] w-[450px] min-h-[550px] rounded-[10px] bg-white ">
        <h2 className="text-black text-[25px] font-bold ml-6 pt-[30px]">
          Todo
        </h2>
        <div className="m-auto w-[25rem]  mt-5">
          <input
            type="text"
            placeholder="Add task here..."
            value={this.state.text}
            onChange={this.handleChange}
            className=" w-[310px] select-none rounded-lg bg-gray-300 py-3 mr-4 px-5 text-start align-middle font-sans text-sm font-bold  text-black transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          />

          <BigButton getData={this.handleAdd} />
<hr className="mt-3 h-0.5 w-full bg-gray-400"/>
          {this.state.items.map((value, i) => {
            return (
              <>
                <TodoRow
                  key={i}
                  id={i}
                  value={value}
                  sendData={this.handleDelete}
                />
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
