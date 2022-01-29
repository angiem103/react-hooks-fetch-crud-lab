import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onQuestionDelete, onCorrectAnswerChange}) {



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question =>  <QuestionItem question={question} key={question.id} onQuestionDelete={onQuestionDelete} onCorrectAnswerChange={onCorrectAnswerChange}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;
