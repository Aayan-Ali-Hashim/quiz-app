// Question Types
// 1. MCQs | Multiple Choice | single

export const quiz = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: 'To find how often the substring appears in the given string. What built in function we use ? ',
        choices: ['max( )', 'count( )', 'min( )', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'count( )',
      },
      {
        question: "What will be the output of the code below?  list = ['a', 'b', 'c', 'd', 'e']  print list[10:] ",
        choices: ['IndexError', '[ ]', 'Syntax Error', 'Indentation Error'],
        type: 'MCQs',
        correctAnswer: '[ ]',
      },
      {
        question:
          'How would you reverse the string "Hello World" ?',
        choices: ['"Hello World[:1]"', '"Hello World[::-1]"', '"Hello World[4]"', 'None of the above'],
        type: 'MCQs',
        correctAnswer: '"Hello World[::-1]"',
      },
      {
        question: 'How to take arguments as type dictionary ?',
        choices: ['def my_function(*kid):', 'def my_function(**kid):', 'def my_function(kid):', 'All of the above'],
        type: 'MCQs',
        correctAnswer: 'def my_function(**kid):',
      },
    ],
  }