import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then(questions =>  setQuestions(questions))

  },[])

  function handleSubmit(formData){
    setQuestions([...questions, formData])
  }

  function handleDelete(deletedQuestion){
    const updatedQuestions = questions.filter((question) => {
      return question.id !== deletedQuestion.id
    }
    )

    setQuestions(updatedQuestions)
  }

  function handleCorrectAnswerChange(updatedQuestion){
   const updatedQuestions = questions.map((question) => {
     if(question.id === updatedQuestion.id){
       return updatedQuestion
     } else {
       return question
     }
   })

   setQuestions(updatedQuestions)
  }
  


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onFormSubmit={handleSubmit}/> : <QuestionList questions={questions} onQuestionDelete={handleDelete} onCorrectAnswerChange={handleCorrectAnswerChange}/>}
    </main>
  );
}

export default App;
