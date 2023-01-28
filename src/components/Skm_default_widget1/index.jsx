import PropTypes from 'prop-types';
import { Input, Label } from '@pega/cosmos-react-core';

import StyledSkmDefaultWidget1Wrapper from './styles';

const SkmDefaultWidget1 = props => {
  const { getPConnect, value, placeholder, disabled, readOnly, required, label, testId } = props;

  const pConn = getPConnect();
  const actions = pConn.getActionsApi();
  const propName = pConn?.getStateProps()?.value;

  const handleOnChange = event => {
    const { value: updatedValue } = event.target;
    actions.updateFieldValue(propName, updatedValue);
    alert('hello');
  };

  return (
    <StyledSkmDefaultWidget1Wrapper>
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
    </StyledSkmDefaultWidget1Wrapper>
  );
};

SkmDefaultWidget1.defaultProps = {
  value: '',
  placeholder: 'Enter some text',
  disabled: false,
  readOnly: false,
  required: false,
  testId: null
};

SkmDefaultWidget1.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  getPConnect: PropTypes.func.isRequired,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  testId: PropTypes.string
};

export default SkmDefaultWidget1;
