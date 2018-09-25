import React, { Component } from 'react';

class filterableselectbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openSelectBox: false,
      filteredOptions: this.props.options,
      selectedItem: "",
    }
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setSelectBox = this.setSelectBox.bind(this);

  }

  setSelectBox(node) {
    this.filterableselectbox = node;
  }


  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(e) {
    if (this.filterableselectbox && !this.filterableselectbox.contains(e.target)) {
      this.setState({
        openSelectBox: false
      })
    }
  }

  filterList = (e) => {
    var txt = e.target.value.toUpperCase();

    this.setState({ openSelectBox: true }, () => {
      const filteredOptions = this.props.options.map(option => {
        if (option.indexOf(txt) !== -1) {
          return option;
        }
      })
      this.setState({ filteredOptions, selectedItem: txt });
    });
  }

  openSelectBox = () => {
    this.setState(prevState => ({
      openSelectBox: !prevState.openSelectBox
    }))
  }


  handleSelectItem = (item) => {
    this.setState({ selectedItem: item, openSelectBox: false }, () => {
      this.props.onSelect(item);
    })
  }

  render() {

    return (
      <div ref={this.setSelectBox} className="filterableselectbox">
        <div onClick={this.openSelectBox.bind(this)}>
          <input type="text"
            placeholder={this.props.placeholder}
            value={this.state.selectedItem}
            onChange={this.filterList.bind(this)}>
          </input>
        </div>
        {this.state.openSelectBox && <ul className="filterableselectbox-list">
          {this.state.filteredOptions.map((item) => (
            item !== undefined &&
            <li key={item}
              onClick={() => this.handleSelectItem(item)}
              className="filterableselectbox-list-item">{item}</li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default filterableselectbox;
