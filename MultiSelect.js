import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

const MultiSelect = (props)=>{

    const [Options, setOptions] = useState([""]);
    const [Question , setQuestionInArray] = useState("")
    // const [OptionArray, setOptionInArray] = useState([]);

    const setOptionInArray = (value, index)=>{
         Options[index] = value;
         setOptions([...Options]);
    }
  
//   const PublishBtn = ()=>{
//       console.log(Question, Options);
//   }

    const Addoption = (optionIndex)=>{
        if(Options.length < 4){
            const newOPtions = [...Options, ""];
            const newOptionIndex = optionIndex + 1;
           let CurrentNewOPtionIndex =  newOPtions.length - 1;
           while(newOptionIndex !== CurrentNewOPtionIndex){
               newOPtions[CurrentNewOPtionIndex] = newOPtions[CurrentNewOPtionIndex - 1];
               CurrentNewOPtionIndex--;
               newOPtions[CurrentNewOPtionIndex] = ""
           }
            setOptions([...Options, ""]);
        }
    }

    const RemoveOption = (index)=>{
        if(Options.length > 1){
            Options.splice(index, 1);
            setOptions([...Options]);
        }
    }

    const AddPublishBtnDisable = ()=>{
      return  Question.trim() === "" || Options.find((opt)=> opt.trim() === "") !== undefined;
    }

    return (
        <div className = "w-25" style ={{marginLeft: 38 +'%'}}>
        <InputGroup className = "mt-3 mb-3">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Your Question" value = {Question} onChange = {(e)=>setQuestionInArray(e.target.value)}/>
      </InputGroup>
      <p className = "optionText">Options</p>
    {
        Options.map((option, optionIndex)=>{
          return  <InputGroup className = "mb-3" key = {optionIndex}>
        <Input placeholder={`Option ${optionIndex + 1}`} value = {Options[optionIndex]} onChange = {(e)=>setOptionInArray(e.target.value, optionIndex)}/>
        <InputGroupAddon addonType="append">
          <Button onClick = {()=>Addoption(optionIndex)} disabled = {Options.length === 4}>+</Button>
          <Button onClick = {()=>RemoveOption(optionIndex)} disabled = {Options.length === 1}>-</Button>
        </InputGroupAddon>
      </InputGroup>
        })
    }
      {Options.length === 4 ? 
        <div>
          <Button className = "Survey-main-btn" 
          disabled = {AddPublishBtnDisable()} 
          onClick = {()=>props.AddQuetionAndAnswerINArray({Question: Question, option: Options})}>Add Question</Button>
          <Button className = "Survey-main-btn" onClick = {()=>props.PublishAllQuestion({Question: Question, option: Options})} 
          disabled = {AddPublishBtnDisable()}>Publish</Button>
      </div> : null
      }
        </div>
    )
}
export default MultiSelect;