// pour traiter un type d'action spécifique on importe l'action type
import { LOGIN, savePseudo } from 'src/actions';
import axios from 'axios';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      axios.post('http://localhost:3001/login', {
        email: state.email,
        password: state.password,
      })
        .then((response) => {
          console.log(`response`, response);
          console.log(`savePseudo`, savePseudo(response.data.pseudo));
          const savePseudoAction = savePseudo(response.data.pseudo);
          store.dispatch(savePseudoAction);
        })
        .catch((error) => console.log(`error`, error));
      break;
    }
    default:
      next(action);
  }
};

export default auth;
