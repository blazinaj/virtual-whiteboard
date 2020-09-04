/**
 * Accesses user account functions like:
 * Functionality for:
 *  - Login as Guest
 *  - Login as known user
 *  - Logout
 *  - Account Settings
 *  - Friends
 *  - View Saved boards
 * @param props
 */
export const useAccount = (props) => {

  /**
   * Logging in as a guest user will create a User object in the database,
   * and allows the user to perform most application actions.
   * This object is also stored to localStorage
   * @param nickname
   */
  const loginAsGuest = (nickname = "guest") => {

  };

  /**
   * Creates a cognito account with an email, username, and password
   */
  const createAccount = () => {

  };

  /**
   * Logs into a cognito account
   */
  const loginAsKnownUser = () => {

  };

  /**
   * Logging out as a guest user will erase all boards
   */
  const logout = () => {

  };

  return {
    loginAsKnownUser,
    createAccount,
    loginAsGuest,
    logout
  }

};