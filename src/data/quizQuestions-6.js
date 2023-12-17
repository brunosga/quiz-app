export const quizQuestions_6 = {
  questions: [
    {
      question: 'What is React state?',
      choices: ['Data that is accessible across all components', 'Data that is immutable and cannot change', 'Internal data specific to a component that can change over time', 'Data passed from parent to child components'],
      correctAnswer: 'Internal data specific to a component that can change over time',
    },
    {
      question: 'How can you initialize state in a React component?',
      choices: ['Using the this.state property', 'Using the setState() method', 'Using the useState() hook', 'By directly assigning a value'],
      correctAnswer: 'Using the useState() hook',
    },
    {
      question: 'Which hook is used to introduce state in functional components?',
      choices: ['useEffect()', 'useReducer()', 'useState()', 'useContext()'],
      correctAnswer: 'useState()',
    },
    {
      question: 'What does the useState() hook return in React?',
      choices: ['The current state value and a function to update it', 'A boolean indicating if the component has mounted', 'The component props', 'The previous state value'],
      correctAnswer: 'The current state value and a function to update it',
    },
    {
      question: 'How do you update the state in a functional component using useState() hook?',
      choices: ['By directly modifying the state variable', 'By using the setState() method', 'By calling the state update function returned by useState()', 'State cannot be updated in functional components'],
      correctAnswer: 'By calling the state update function returned by useState()',
    },
    {
      question: 'What is the purpose of the useEffect() hook in React?',
      choices: ['To handle component state changes', 'To manage context within a component', 'To perform side effects in functional components', 'To create new components'],
      correctAnswer: 'To perform side effects in functional components',
    },
    {
      question: 'When does the useEffect() hook run in React components by default?',
      choices: ['Before rendering the component', 'After every component update', 'Only once after the initial render', 'Only when state changes'],
      correctAnswer: 'Only once after the initial render',
    },
    {
      question: 'What is the cleanup function used in the useEffect() hook for?',
      choices: ['To reset the component state', 'To unsubscribe or clean up resources', 'To update the DOM', 'To initialize state'],
      correctAnswer: 'To unsubscribe or clean up resources',
    },
    {
      question: 'Which hook is used for handling complex state logic in React?',
      choices: ['useState()', 'useEffect()', 'useReducer()', 'useContext()'],
      correctAnswer: 'useReducer()',
    },
    {
      question: 'What is the primary difference between useState() and useReducer() in React?',
      choices: ['useState() is used for functional components, useReducer() for class components', 'useState() is simpler for managing local component state, useReducer() is more complex but suited for managing state transitions', 'useState() can handle complex state logic, useReducer() is used for simple state changes', 'useState() is a built-in hook, useReducer() is not supported in React'],
      correctAnswer: 'useState() is simpler for managing local component state, useReducer() is more complex but suited for managing state transitions',
    },
  ],
};
