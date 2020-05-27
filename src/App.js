import React,{Component,Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import Add from './components/Add';
import View from './components/View';

export default class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      ques:[],
      newq:{
        array:[],
        question:{
          title:'',
          options:{
            a:'',
            b:'',
            c:'',
            d:''
          },
          ans:'a'
        }
      }
    }
  }
  change=(e)=>{
    let question=this.state.newq.question;
    switch(e.target.title)
    {
      case 'title':question.title=e.target.value
                  break;
      case 'a':question.options.a=e.target.value
                  break;
      case 'b':question.options.b=e.target.value
                  break;
      case 'c':question.options.c=e.target.value
                  break;
      case 'd':question.options.d=e.target.value
                  break;
      case 'ans':question.ans=e.target.value
                  break;
      default:
    }
    this.setState({
      newq:{
        array:this.state.newq.array,
        question:question
      }
    })
  }
  SelChange=(e,k,v)=>{
    let el={
      target:{
        title:'ans',
        value:v
      }
    }
    this.change(el);
  }
  submit=()=>{
    let quests=this.state.ques,add=this.state.newq.array;
    add.forEach(el=>{
      quests.push(el);
    });
    this.setState({
      ques:quests,
      newq:{
        array:[],
        question:{
          title:'',
          options:{
            a:'',
            b:'',
            c:'',
            d:''
          },
          ans:'a'
        }
      }
    });
    document.location.href='/view';
  }
  add=()=>{
    let adds=this.state.newq;
    adds.array.push(adds.question);
    adds.question={
      title:'',
      options:{
        a:'',
        b:'',
        c:'',
        d:''
      },
      ans:'a'
    };
    this.setState({
      newq:adds
    });
    console.log(this.state);
  }
  componentDidMount=()=>{
    document.title='QUIZ APP';
  }
  render=()=>{
    return(
      <MuiThemeProvider>
          <Fragment>
            <div>
              <Header/>
              <Router>
                <Switch>
                  <Route path='/add' render={()=><Add newq={this.state.newq} change={this.change} submit={this.submit} add={this.add} SelChange={this.SelChange}/>}/>
                  <Route path='/view' render={()=><View/>}/>
                  <Redirect to='/add'/>
                </Switch>
              </Router>
            </div>
            </Fragment>
        </MuiThemeProvider>
    )
  }
}
