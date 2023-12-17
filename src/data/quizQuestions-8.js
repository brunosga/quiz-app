export const quizQuestions_8 = {
  questions: [
    {
      question: 'What is the purpose of the useEffect hook in React?',
      choices: ['To manage component state', 'To handle events in components', 'To perform side effects in functional components', 'To create new components'],
      correctAnswer: 'To perform side effects in functional components',
    },
    {
      question: 'When does the useEffect hook run in a React functional component by default?',
      choices: ['Before the component is mounted', 'After every component update', 'Only once after the initial render', 'Only when state changes'],
      correctAnswer: 'After every component update',
    },
    {
      question: 'How can you replicate componentDidMount with useEffect hook?',
      choices: ['Use useEffect with an empty dependency array', 'Use useEffect with a dependency array containing props', 'Use useEffect without any dependency array', 'Use useEffect without a function'],
      correctAnswer: 'Use useEffect with an empty dependency array',
    },
    {
      question: 'What is the purpose of providing dependencies in the dependency array of useEffect?',
      choices: ['To define the order of component rendering', 'To specify the state that triggers the effect', 'To manage the lifecycle of the component', 'To control the useEffect execution frequency'],
      correctAnswer: 'To control the useEffect execution frequency',
    },
    {
      question: 'How can you perform cleanup in useEffect hook?',
      choices: ['By using the return statement in the effect function', 'By using useEffectCleanup()', 'By passing a cleanup function as an argument to useEffect', 'Cleanup is not possible in useEffect'],
      correctAnswer: 'By using the return statement in the effect function',
    },
    {
      question: 'What is the purpose of passing dependencies to useEffect?',
      choices: ['To prevent side effects', 'To avoid running the effect on every render', 'To increase component performance', 'To eliminate the need for cleanup'],
      correctAnswer: 'To avoid running the effect on every render',
    },
    {
      question: 'What will happen if you don’t specify dependencies in the useEffect dependency array?',
      choices: ['The effect will run after every render', 'The effect will not run', 'An error will occur', 'The component will re-render continuously'],
      correctAnswer: 'The effect will run after every render',
    },
    {
      question: 'What does the second argument (dependency array) of useEffect hook represent?',
      choices: ['The state that triggers the effect', 'The number of times the effect should run', 'The initial state of the component', 'The dependencies that the effect relies on'],
      correctAnswer: 'The dependencies that the effect relies on',
    },
    {
      question: 'How do you prevent an effect from running on every render?',
      choices: ['By providing an empty dependency array', 'By not using useEffect', 'By using useEffectCleanup()', 'By using a timeout in useEffect'],
      correctAnswer: 'By providing an empty dependency array',
    },
    {
      question: 'What should be considered when using the useEffect hook with asynchronous code?',
      choices: ['Async code should not be used in useEffect', 'Use cleanup functions with async/await', 'Handling of asynchronous actions and cleanup inside useEffect', 'Using Promises instead of async/await'],
      correctAnswer: 'Handling of asynchronous actions and cleanup inside useEffect',
    },
  ],
};
