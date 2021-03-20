

//хотел сделать знако вопроса через компонент, но наткнулся на проблему стилизации окна регистрации.\
//сделал знак вопроса через ::after



import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as QuestionMark} from 'icons/question.svg';
//import NavigationLink from 'components/NavigationLink';

import styles from './styles.module.scss';

const Question = (props) => {
  return (
      <QuestionMark className={`${styles.question} ${props.questClass}`}id={props.id}/>
  );
};

Question.propTypes = {
  id: PropTypes.string,
  questClass: PropTypes.node,
}

export default Question;
