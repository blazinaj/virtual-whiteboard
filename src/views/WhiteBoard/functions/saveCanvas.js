import {api} from "../../../functions/api";
import {updateCanvas} from "../../../graphql/mutations";

/**
 * Updates the canvas object in the database
 * @param canvas
 */
export const saveCanvas = (canvas) => {
  api(updateCanvas, { input: canvas })
    .then(updatedCanvas => {
      console.log('canvas updated!')
    })
    .catch(err => console.log('error creating: ', err))
};