import react from 'react';


const Confirm = (props)=>{
    return (<>
        {props.QuestionAnswer.map((questonAnswer, idx)=>{
            {/* console.log(questonAnswer); */}
            return questonAnswer.option.length > 3 ? <MultiSelect questonAnswer = {questonAnswer} key = {idx}/> :
                     <SingleSelect questonAnswer = {questonAnswer} key = {idx}/>
        })}
        <button className = "Survey-main-btn" onClick = {()=>props.confirmbtn()}>Confirm</button>
    </>)
}

export default Confirm;

const MultiSelect = (props)=>{
    return (<>
    <p>{props.questonAnswer.Question}</p>
    {props.questonAnswer.option.map((option, idx)=>{
        return (<>
            <input type = "checkbox" name = "multiselect" id = {idx} className = "cnf-multi"/>
             <label htmlFor = "multiselect" className = "cnf-multi-option">{option}</label><br/>
            </>)
    })}
    
    </>)
}
const SingleSelect = (props)=>{
    return (<>
    <p>{props.questonAnswer.Question}</p>
    {props.questonAnswer.option.map((option)=>{
        return (<>
            <input type = "radio" name = "singleSelect" className = "cnfsingle"/>
             <label htmlFor = "singleSelect" className = "cnf-single-option">{option}</label><br/>
            </>)
               
    })}
    </>)
}