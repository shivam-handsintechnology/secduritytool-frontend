import styled from 'styled-components';

const CheckboxWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 15px;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const CheckboxButton = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 14px;
  background-color: #ccc;
  border-radius: 20px;
  margin-right: 10px;
  transition: background-color 0.2s ease-in-out;

  ${CheckboxInput}:checked ~ & {
    background-color: #2196f3;
  }
`;

const CheckboxKnob = styled.span`
  position: absolute;
  top: -2px;
  left: -6px;
  display: inline-block;
  vertical-align: middle;
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: margin-left 0.2s ease-in-out;

  ${CheckboxInput}:checked ~ ${CheckboxButton} & {
    margin-left: 18px;
  }
`;

function Checkbox(props) {
  return (
    <CheckboxWrapper>
      <CheckboxInput id={props.id} {...props} />
      <CheckboxButton htmlFor={props.id}>
        <CheckboxKnob />
      </CheckboxButton>
    </CheckboxWrapper>
  );
}

export default Checkbox;
