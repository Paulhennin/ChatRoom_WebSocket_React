import { connect } from 'react-redux';
import Field from 'src/components/Field';
import { changeValue } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    value: state[ownProps.name],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeValue: (value) => {
    // modification de state => dispatch d'action
    // ici on veut passer la value jusqu'à notre reducer
    // => on la passe à l'action creator
    const action = changeValue(value, ownProps.name);
    // console.log('je veux modifier la valeur de email ou password dans le state', action);
    dispatch(action);

    // en une ligne
    // dispatch(changeValue());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
