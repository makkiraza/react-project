import './App';
import { useState } from 'react'

const questions = [
    {
        title: 'What is HTML ' ,
        Options: ['Hyper Text Markup Ln', 'hyper text mkp', 'hyper markup',
    'hyper text markup language'],
    correctAnswer: 'hyper text markup language'
    },
    {
        title: 'what is css',
        Options: ['caat seen seen', 'cut so so', 'cascading stylesheet', 'mujhe nahi pata'],
        correctAnswer:  'cascading stylesheet'
    },
    {
        title: 'what is css',
        Options: ['caat seen seen', 'cut so so', 'cascading stylesheet', 'mujhe nahi pata'],
        correctAnswer:  'cascading stylesheet'
    }
]

function App() {
    const [questionNo, setQuestionNo] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState()
    const [score, setScore] = useState(0)
    const [quizFinish, setQuizFinish] = useState(false)

    function nextQuestion() {
        checkAnswer()

        let templist = questionNo
        setQuestionNo(++templist)
    }

    function updateScore(e) {
        const answer = e.target.value
        setCurrentAnswer(answer)
    }

    function checkAnswer() {
        if (currentAnswer === questions[questionNo].correctAnswer) {
            let tempScore = score
            setScore(++tempScore)
        }
    }

    function finish() {
        checkAnswer()
        setQuizFinish(true)
    }

    function restart() {
        setQuizFinish(false)
        setQuestionNo(0)
        setScore(0)
    }

    const options = questions[questionNo].options

    return (
        <div className="App">
            <header className="App-header">
                {!quizFinish ? <div>
                    <h4>Q{questionNo + 1} {questions[questionNo].title}</h4>

                    {options.map(function (item) {
                        return <div>
                            <input 
                             onChange={updateScore}
                             checked={currentAnswer === item}
                             name={'q' + questionNo} type='radio' value={item} /> {item}
                            </div>}
})

{questionNo < question.length - 1 && <button
    onClick={nextQuestion}
    style={{height: 100, width:200, fontSize:30}}>
    Next
</button>}

    {questionNo === questions.length -1 &&
        <button onClick={finish}>Finish</button>}
    </div> :
    <div>
        Your have corrected {score} answers out of {questions.length} questions
        <button onClick={restart}>Restart</button>
    </div>}


    /* <input name='q1' type='radio' value='hyper text markup language'  />
        hyper text markup language
        <input name='q1' type='radio' value='hyper text markup language' />
         hyper text mkp
        <input name='q1' type='radio' value='hyper text markup language' />
        hyper markup
        <input name='q1' type='radio' value='hyper text markup language' />
        hyper text markup language

    <br /><br /><br /><br />

    <button style={{ height: 100, width: 200, fontsize: 30}}>
    Next
</button> */}
   </header>
</div>
    );
}

export default App;