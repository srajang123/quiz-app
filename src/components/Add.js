import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
export default class Add extends Component
{
  render=()=>{
    console.log(this.props);
    return(
      <div className='adds'>
      <TextField title='title' floatingLabelText='Enter Question: ' value={this.props.newq.question.title} onChange={this.props.change}/><br/>
      <TextField title='a' floatingLabelText='Option A: ' value={this.props.newq.question.options.a} onChange={this.props.change}/><br/>
      <TextField title='b' floatingLabelText='Option B: ' value={this.props.newq.question.options.b} onChange={this.props.change}/><br/>
      <TextField title='c' floatingLabelText='Option C: ' value={this.props.newq.question.options.c} onChange={this.props.change}/><br/>
      <TextField title='d' floatingLabelText='Option D: ' value={this.props.newq.question.options.d} onChange={this.props.change}/><br/>
      <SelectField title='ans' floatingLabelText='Correct Option' value={this.props.newq.question.ans} onChange={this.props.SelChange}>
        <MenuItem value='a' primaryText='A' key='a'/>
        <MenuItem value='b' primaryText='B' key='b'/>
        <MenuItem value='c' primaryText='C' key='c'/>
        <MenuItem value='d' primaryText='D' key='d'/>
      </SelectField><br/>
      <RaisedButton label='ADD QUESTION' onClick={this.props.add} className='button'/><br/>
      <RaisedButton label='SUBMIT' onClick={this.props.submit} className='button'/>
      </div>
    )
  }
}
