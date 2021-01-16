import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MultiSelect from './MultiSelect';
import SingleSelect from './SingleSelect';
import Confirm from './Confirm';

const CreateSurvey = ()=>{
    const [dropdownOpen, setOpen] = useState(false);
    const [dropDownText, setDropDownText] = useState("Select Quetion Type");
    const [Question, setQuestion] = useState([]);
    const [ShowConfirmbtn, setShowConfirmBtn] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const AddQuetionAndAnswerINArray = (questionAnswerArray) =>{
      Question.push(questionAnswerArray);
      setQuestion(Question);
      setDropDownText("Select Quetion Type")
      // console.log(Question);
  }
 
  const PublishAllQuestion = (questionAnswerArray)=>{
    Question.push(questionAnswerArray);
    setQuestion(Question);
    setShowConfirmBtn(true);
    setDropDownText("Select Quetion Type")
      // console.log(Question);
  }
  const confirmbtn = ()=>{
    setShowConfirmBtn(false);
  }

   return (
       <>
    {!ShowConfirmbtn ?<ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>
      {dropDownText}
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem onClick = {()=>setDropDownText("Multi Select Question")}>Multi Select Question</DropdownItem>
      <DropdownItem onClick = {()=>setDropDownText("Single Select Question")}>Single Select Question</DropdownItem>
    </DropdownMenu>
  </ButtonDropdown>: <Confirm QuestionAnswer = {Question} confirmbtn = {confirmbtn}/>}

 {dropDownText === "Multi Select Question" ? <MultiSelect 
 AddQuetionAndAnswerINArray = {AddQuetionAndAnswerINArray} PublishAllQuestion = {PublishAllQuestion}/> : null}
 {dropDownText === "Single Select Question" ? <SingleSelect
     AddQuetionAndAnswerINArray = {AddQuetionAndAnswerINArray} PublishAllQuestion = {PublishAllQuestion}
 /> : null}
   
   </>
   )
}
export default CreateSurvey;