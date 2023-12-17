export const quizQuestions_9 = {
  questions: [
    {
      question: 'What is the purpose of the useState hook in React?',
      choices: ['To perform side effects in functional components', 'To manage component state in functional components', 'To handle events in components', 'To create new components'],
      correctAnswer: 'To manage component state in functional components',
    },
    {
      question: 'How do you initialize state using the useState hook?',
      choices: ['By calling useState() with a single value', 'By declaring a state object', 'By passing an object to useState()', 'By calling useState() with an initial value'],
      correctAnswer: 'By calling useState() with an initial value',
    },
    {
      question: 'What does the useState hook return in React?',
      choices: ['The current state value', 'A boolean indicating if the component has mounted', 'The component props', 'The previous state value'],
      correctAnswer: 'The current state value and a function to update it',
    },
    {
      question: 'How do you update state using the useState hook?',
      choices: ['By directly modifying the state variable', 'By calling setState()', 'By using the returned state update function from useState()', 'State cannot be updated in functional components'],
      correctAnswer: 'By using the returned state update function from useState()',
    },
    {
      question: 'What is the initial value passed to the useState hook used for?',
      choices: ['To define the data type of the state', 'To prevent state changes', 'To initialize the state with a default value', 'To manage asynchronous operations'],
      correctAnswer: 'To initialize the state with a default value',
    },
    {
      question: 'What happens when you call the state update function returned by useState multiple times in a single render?',
      choices: ['Each call overrides the previous state', 'React batches the state updates into a single update', 'An error occurs', 'The component re-renders continuously'],
      correctAnswer: 'React batches the state updates into a single update',
    },
    {
      question: 'Can you use the useState hook in class components?',
      choices: ['Yes, but with limited functionality', 'No, it is exclusive to functional components', 'Yes, it behaves the same as in functional components', 'Only with additional configuration'],
      correctAnswer: 'No, it is exclusive to functional components',
    },
    {
      question: 'What is the primary advantage of using the useState hook over class-based state?',
      choices: ['Better performance', 'Simpler syntax and cleaner code', 'Compatibility with older browsers', 'Ability to manage complex state'],
      correctAnswer: 'Simpler syntax and cleaner code',
    },
    {
      question: 'How can you manage multiple state variables using the useState hook?',
      choices: ['By using a single useState() call with multiple values', 'By using separate useState() calls for each variable', 'By creating a custom hook', 'State management is limited to one variable per component'],
      correctAnswer: 'By using separate useState() calls for each variable',
    },
    {
      question: 'What is the recommended practice for initializing state variables with complex values?',
      choices: ['By using an empty object', 'By using a string or number', 'By initializing with null', 'By using a function to calculate the initial state'],
      correctAnswer: 'By using a function to calculate the initial state',
    },
  ],
};
