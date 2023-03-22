import { FormEvent, KeyboardEvent, useState } from 'react'

import { Header } from '../components/Header'
import { Tweet } from '../components/Tweet'
import { Separator } from '../components/Separator'

import './Status.css'
import { PaperPlaneRight } from 'phosphor-react'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo ...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();
    if (newAnswer)
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium est similique dolorum assumenda dolor, deserunt perspiciatis dolorem mollitia doloribus rerum facilis at ea consequatur. Ad, neque. Iure, sed libero!" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/felipeferreira23.png" alt="Felipe Ferreira" />
          <textarea 
            id="tweet" 
            placeholder="What's happening?" 
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Tweet</span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}