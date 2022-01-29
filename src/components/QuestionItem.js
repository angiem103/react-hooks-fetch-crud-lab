import React from "react";

function QuestionItem({ question, onQuestionDelete, onCorrectAnswerChange }) {

  const { id, prompt, answers, correctIndex } = question;

  function deleteQuestion(){
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => onQuestionDelete(question))
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleCorrectAnswerChange(event) {

    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
        },
      body: JSON.stringify({
        correctIndex : event.target.value   
        })
      })
    .then(r => r.json())
    .then(updatedQuestion => onCorrectAnswerChange(updatedQuestion))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleCorrectAnswerChange}>{options}</select>
      </label>
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
