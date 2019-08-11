import React from 'react';
import './search.component.css';
import  Data  from '../display.data/display.data.jsx';
import { Button } from 'reactstrap';
import { Nav, NavItem } from 'reactstrap';




class Search extends React.Component {




  constructor(props){
    super(props);

    this.state = {
      verbs:[],
      nouns:[],
      noun:[],
      verb:'',
      input:'',
      isLoading:false,
      display:'',
      error:''


    };
    this.searcWord=this.searcWord.bind(this);
  }

  searcWord(){
    {this.setState({display:'block'})}


    const input1=this.refs.input.value;
    {this.setState({input:input1},()=>{
      var url=("https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/"+`${this.state.input}`);
      var targetUrl=(`https://cors-anywhere.herokuapp.com/`+url);
      fetch(targetUrl,{
        headers:{
      "Accept": "application/json",
      "app_id": "2a411632",
      "app_key": "cc26ebe024b253a4d25536d67b239808"
      }
      })
      .then(response => response.json())
      .then(users => {users.results.map(((data)=>{


            this.setState({noun:data.lexicalEntries[0],verb:data.lexicalEntries[1]})
            {this.state.noun.entries.map((entries)=>(
              entries.senses.map((data,index)=>(
                data.definitions.map(definitions=>(

                  this.setState({nouns:[...this.state.nouns,definitions],isLoading:this.state.isLoading})
                ))

              ))
            ))}

            {this.state.verb.entries.map((entries)=>(
              entries.senses.map((data,index)=>(
                data.definitions.map(definitions=>(
                  this.setState({verbs:[...this.state.verbs,definitions],isLoading:this.state.isLoading})
                ))

              ))
            ))}


      }))})
      .catch(e=>(
        this.setState({verbs:[...this.state.verbs,'No exact matches found for '+this.state.input]})
      ))
    })}







}






  render(){
    const { searchFilter }=this.state;
    console.log(searchFilter);
    return(
      <div>
        <header className="Search-header">
        <Nav>
          <NavItem>


            <div className='app_title'><span>Dicitionary</span></div>
            </NavItem>
          <NavItem>
            <input className='search_bar' type='text' ref='input'  placeholder="Search Phase or Word" />
          </NavItem>
         <NavItem>
            <Button onClick={this.searcWord}>Submit</Button>
          </NavItem>

        </Nav>
          </header>

          <Data noun={this.state.nouns} verb={this.state.verbs} isLoading={this.state.isLoading} display={this.state.display}/>
      </div>
    );
  }
}

export default Search;
