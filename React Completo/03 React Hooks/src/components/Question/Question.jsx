import { Button } from "../Button/Button"


export const Question = ({ dataQuestion, setResponseCurrent, handleNextQuestion }) => {

    return (
        <form className="Question" onSubmit={handleNextQuestion}>
            <fieldset>
                <legend>{dataQuestion.pergunta}</legend>

                {dataQuestion.options.map((opt) => (
                    <label key={opt} style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <input 
                        type="radio" 
                        name="question" 
                        onChange={() => setResponseCurrent(opt)}
                        required
                        />
                        <span>{opt}</span>
                    </label>
                ))}
            </fieldset>

            <Button style={{marginTop: '1rem'}}>
                Próxima
            </Button>
        </form>
    )
}