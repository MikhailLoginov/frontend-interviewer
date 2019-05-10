/*
 * Interview
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

import juniorQuestions from '../../data/questions/junior';

export default function Interview() {
  return (
    <>
      {juniorQuestions.map(question => (
        <div>
          <p>{question.question}</p>
          <p>{question.answer}</p>
        </div>
      ))}
    </>
  );
}
