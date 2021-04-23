import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

import NavigationLink from 'components/NavigationLink';
import avatar from '../../images/Avatar.jpg'

class RightMainBar extends React.Component {

  componentDidMount(){
    fetch(
      "https://web-interactive.herokuapp.com/user-info",
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        credentials: 'include',

      }
    ).then((result) => {
      if (result.ok) {
        console.log("Все прошло успешно");
      }
      else {
        console.log("результат не получен");
        return result.json();
      }
    }, (error) => {
      console.log("все пропало!" + error);
    }
    ).then((data) => {
      if (data) {
        console.log(data);
      }
    }
    )


    // fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
    // .then(response => response.json())
    // .then(commits => alert(commits[0].author.login));
  }


  render() {
    return (
      <ul className={styles.loginBarList}>
        <li className={styles.avatarList}>
          <img alt="avatar" src={avatar} className={styles.avatar}></img>
        </li>

        <li className={styles.name}>
          Имя
      </li>

        <li className={styles.secondName}>
          Фамилия
      </li>

        <li className={styles.rate}>
          Тариф
      </li>

        <li className={styles.remainder}>
          Остаток срока <br />подписки
      </li>

        <li className={styles.profileLink}>
          <NavigationLink className={styles.rightMainLink} hrefLink="/profile">
            Мой профиль
        </NavigationLink>
        </li>

        <li>
          <NavigationLink className={styles.rightMainLink} hrefLink="/">
            Выйти
        </NavigationLink>
        </li>
      </ul>
    );
  }
}

RightMainBar.propTypes = {
  children: PropTypes.node,
}

export default RightMainBar;
