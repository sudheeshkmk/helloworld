import PropTypes from 'prop-types';
import { Input, Label } from '@pega/cosmos-react-core';

import StyledSkmCustomCustomSearchBoxWrapper from './styles';

const SkmCustomCustomSearchBox = props => {
  const { getPConnect, value, placeholder, disabled, readOnly, required, label, testId } = props;

  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const propName = pConn?.getStateProps()?.value;

  const handleOnChange = event => {
    const { value: updatedValue } = event.target;
    actions.updateFieldValue(propName, updatedValue);
  };

  return (
    <StyledSkmCustomCustomSearchBoxWrapper>
      <Label>{label}</Label>
      <Input
        type='text'
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        onChange={handleOnChange}
        testId={testId}
      />
    </StyledSkmCustomCustomSearchBoxWrapper>
  );
};

SkmCustomCustomSearchBox.defaultProps = {
  value: '',
  placeholder: '',
  disabled: false,
  readOnly: false,
  required: false,
  testId: null
};

SkmCustomCustomSearchBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  getPConnect: PropTypes.func.isRequired,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  testId: PropTypes.string
};

export default SkmCustomCustomSearchBox;
