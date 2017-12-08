import React, { Component } from 'react';

class CharacterInfo extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      birth_year: 0,
      gender: '',
      height: 0,
      mass: 0,
      hair: '',
      eyes: '',
      skin: ''
    };
  }

    componentDidMount() {
      this.setState({
        name: this.props.name,
        birth_year: this.props.birth_year,
        gender: this.props.gender,
        height: this.props.height,
        mass: this.props.mass,
        hair: this.props.hair_color,
        eyes: this.props.eye_color,
        skin: this.props.skin_color
      });
    }
  

  render() {
    return(
      <div>
          <div className="character-info">
          {this.state.birth_year}
          </div>
      </div>
    );
  }
}

export default CharacterInfo;