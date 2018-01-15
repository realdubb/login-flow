import axios from 'axios';

/**
 * Fake remote server, using bcrypt and localStorage to persist data across page
 * reloads
 * @type {Object}
 */
var api = {
  /**
   * Populates the users var, similar to seeding a database in the real world
   */
  init() {
    this.host = 'http://localhost:3001';
  },

  /**
   * Pretends to log a user in
   *
   * @param {string} username The username of the user to log in
   * @param {string} password The password of the user to register
   * @param {?callback} callback Called after a user is logged in
   */
  login(username, password, callback) {
    let data = { username, password};
    data = JSON.stringify(data);
    return axios({
      method: 'post',
      url: `${this.host}/login`,
      data,
      headers: {
        Accept: 'text/json',
        'Content-type': 'application/json',
      },
    })
    .then(response => console.log(response))
    .catch(e => console.log(e));

  },
  /**
   * Pretends to register a user
   *
   * @param {string} username The username of the user to register
   * @param {string} password The password of the user to register
   * @param {?callback} callback Called after a user is registered
   */
  register(username, password, callback) {
    let data = { email: username, password};
    data = JSON.stringify(data);
    return axios({
      method: 'post',
      url: `${this.host}/signup`,
      data,
      headers: {
        Accept: 'text/json',
        'Content-type': 'application/json',
      },
    })
    .then(response => console.log(response))
    .catch(e => console.log(e));
  },
  /**
   * Pretends to log a user out
   * @param  {Function} callback Called after the user was logged out
   */
  logout(callback) {
    localStorage.removeItem('token');
  },
}

api.init();

module.exports = api;
