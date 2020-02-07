import React from 'react';
import { connect } from 'react-redux';
import { Dispatch as ReduxDispatch } from 'redux';
import { toggleVisibility, TVisAction } from '../../../../actions';
import './VisOptions.scss';

type Dispatch = ReduxDispatch<TVisAction>;
interface DispatchProps {
  toggleVisibility: () => void;
}

const VisibilityOptions: React.FC<DispatchProps> = ({ toggleVisibility }) => (
  <div
    className="visibility-options"
    onClick={toggleVisibility}
  >
    Toggle Completed
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleVisibility: () => dispatch(toggleVisibility())
});

export default connect<{}, DispatchProps>(
  null,
  mapDispatchToProps
)(VisibilityOptions);
