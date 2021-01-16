import React, {useState} from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

const SingleSelect = (props)=>{

    const [Options, setOptions] = useState(["", ""]);
    const [Question , setQuestion] = useState("");

    const setOptionInArray = (value, index)=>{
        Options[index] = value;
        setOptions([...Options]);
   }

//    const PublishBtn = ()=>{
//     console.log(Question, Options);
// }

    const AddPublishBtnDisable = ()=>{
        return  Question.trim() === "" || Options.find((opt)=> opt.trim() === "") !== undefined;
      }
    return (
        <div className = "w-25" style ={{marginLeft: 38 +'%'}}>
        <InputGroup className = "mt-3 mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Your Question" value = {Question} onChange = {(e)=>setQuestion(e.target.value)} />
      </InputGroup>
      <p className = "optionText">Options</p>
        <InputGroup className = "mb-3">
        <Input placeholder="Option 1" value = {Options[0]} onChange = {(e)=> setOptionInArray(e.target.value, 0)} />
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <Input placeholder="Option 2" value = {Options[1]} onChange = {(e)=> setOptionInArray(e.target.value, 1)}/>
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <div>
          <Button className = "Survey-main-btn" 
          disabled = {AddPublishBtnDisable()} 
          onClick = {()=>props.AddQuetionAndAnswerINArray({Question: Question, option: Options})}>Add Question</Button>
          <Button className = "Survey-main-btn" onClick = {()=>props.PublishAllQuestion({Question: Question, option: Options})} disabled = {AddPublishBtnDisable()}>Publish</Button>
      </div>
        </div>
    )
}
export default SingleSelect;