// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

// Hooks / Libs:
import { useState } from "react";

// Context:
// import { GlobalProvider } from "../context/global/GlobalProvider";

// Components:
import { Question } from "../components/Question/Question";

// Perguntas:
const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];


export const Desafio1 = () => {
    const [step, setStep] = useState(0); 
    const [hits, setHits] = useState(0); 
    const [responseCurrent, setResponseCurrent] = useState(null); 


    function handleNextQuestion(e) {
        e.preventDefault();
        console.log('vai')

        if(responseCurrent) {
            if(responseCurrent == perguntas[step].resposta) {
                setHits(prev => prev + 1);
            }

            setStep(prev => prev + 1);
            setResponseCurrent(null);
        }
    }

    return (
        <div className="Desafio1">
            {step >= perguntas.length ? (
                <p>Você acertou: {hits} de {perguntas.length}</p>
            ) : (
                <Question 
                dataQuestion={perguntas[step]} 
                setResponseCurrent={setResponseCurrent}
                handleNextQuestion={handleNextQuestion} 
                />
            )}
        </div>
    )
}


// SOLUÇÂO DO CURSO

// App.js 
// import React from 'react';
// import Radio from './Form/Radio';

// const perguntas = [
//   {
//     pergunta: 'Qual método é utilizado para criar componentes?',
//     options: [
//       'React.makeComponent()',
//       'React.createComponent()',
//       'React.createElement()',
//     ],
//     resposta: 'React.createElement()',
//     id: 'p1',
//   },
//   {
//     pergunta: 'Como importamos um componente externo?',
//     options: [
//       'import Component from "./Component"',
//       'require("./Component")',
//       'import "./Component"',
//     ],
//     resposta: 'import Component from "./Component"',
//     id: 'p2',
//   },
//   {
//     pergunta: 'Qual hook não é nativo?',
//     options: ['useEffect()', 'useFetch()', 'useCallback()'],
//     resposta: 'useFetch()',
//     id: 'p3',
//   },
//   {
//     pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
//     options: ['set', 'get', 'use'],
//     resposta: 'use',
//     id: 'p4',
//   },
// ];

// const App = () => {
//   const [respostas, setRespostas] = React.useState({
//     p1: '',
//     p2: '',
//     p3: '',
//     p4: '',
//   }); AQUI PODERIA USAR O REDUCE PARA TRATAR ESTE OBJETO INICIAL
//   const [slide, setSlide] = React.useState(0);
//   const [resultado, setResultado] = React.useState(null);

//   function handleChange({ target }) {
//     setRespostas({ ...respostas, [target.id]: target.value });
//   }

//   function resultadoFinal() {
//     const corretas = perguntas.filter(
//       ({ id, resposta }) => respostas[id] === resposta,
//     );
//     setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
//   }

//   function handleClick() {
//     if (slide < perguntas.length - 1) {
//       setSlide(slide + 1);
//     } else {
//       setSlide(slide + 1);
//       resultadoFinal();
//     }
//   }

//   return (
//     <form onSubmit={(event) => event.preventDefault()}>
//       {perguntas.map((pergunta, index) => (
//         <Radio
//           active={slide === index}
//           key={pergunta.id}
//           value={respostas[pergunta.id]}
//           onChange={handleChange}
//           {...pergunta}
//         />
//       ))}
//       {resultado ? (
//         <p>{resultado}</p>
//       ) : (
//         <button onClick={handleClick}>Próxima</button>
//       )}
//     </form>
//   );
// };

// export default App;



// Radio.js
// import React from 'react';

// const Radio = ({ pergunta, options, onChange, value, id, active }) => {
//   if (active === false) return null;
//   return (
//     <fieldset
//       style={{
//         padding: '2rem',
//         marginBottom: '1rem',
//         border: '2px solid #eee',
//       }}
//     >
//       <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
//       {options.map((option) => (
//         <label
//           key={option}
//           style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
//         >
//           <input
//             type="radio"
//             id={id}
//             checked={value === option}
//             value={option}
//             onChange={onChange}
//           />
//           {option}
//         </label>
//       ))}
//     </fieldset>
//   );
// };

// export default Radio;
