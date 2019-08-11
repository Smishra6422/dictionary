import React from 'react';
import './display.data.css';
import { Spinner } from 'reactstrap';



class Data extends React.Component {

  noun(){
    var count=0;

    {

      this.setState({display:this.props.noun})
    }


  }

  verb(){

    {
      this.setState({display:this.props.verb})
  }

  }
  constructor(props){
    super(props);

    this.state = {
      display:[]
    };

    this.noun=this.noun.bind(this);
    this.verb=this.verb.bind(this);
  }

  render(){
    var count=0;
    return(

        <div style={{display:this.props.display}} className='datas'>
        <div className='buttons'>
        <div><a  onClick={this.noun}>Noun</a></div>
      <div>  <a  onClick={this.verb}>Verb</a></div>

        </div>
        {this.state.display.map((data,id)=>(
          <p key={id}>{++count}{'.  '}{data}</p>

        ))}


        </div>

    );
  }
}

export default Data;
