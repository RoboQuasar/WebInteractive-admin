import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as QuestionMark} from 'icons/question.svg';

import styles from './styles.module.scss';

const Question = (props) => {
  return (
    <div className={styles.questionField}>
    <QuestionMark className={`${styles.question} ${props.questClass}`} id={props.id}/>

    <p className={styles.questionText}>{props.hintMessage}</p>
  </div>
  );
};

Question.propTypes = {
  hintMessage:PropTypes.string,
  id: PropTypes.string,
  questClass: PropTypes.node,
}

export default Question;
