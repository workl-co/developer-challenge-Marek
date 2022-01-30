import './App.css';
import Navbar from './Navbar';
import Question from './Question';
import questions from './../data/questions.json';

const enabledQuestions = questions.filter(question => question.enabled === true);

function App() {
  return (
    <div className="App">
      <Navbar />
      {enabledQuestions.map((question) => {
        return <Question data={question.title} key={question.id} />
      })}
    </div>
  );
}

export default App;