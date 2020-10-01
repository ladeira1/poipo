import styled from 'styled-components/native'
import colors from '../../../styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryGray};
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  color: ${colors.primaryPurple};
  font-size: 55px;
  font-weight: bold;
  font-style: italic;
`;
export const Input = styled.TextInput`
  width: 80%;
  background-color: ${colors.primaryWhite};
  padding: 10px;
  margin-top: 10px;
  border-radius: 7px;
  font-size: 17px;
`;
export const Button = styled.TouchableOpacity`
  width: 80%;
  background-color: ${colors.secondaryPurple};
  margin-top: 10px;
  padding: 10px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 20px;
`;
export const SignUpButton = styled.TouchableOpacity`
  width: 70%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 2px;
`;
export const Text = styled.Text`
  color: ${colors.primaryWhite};
  font-size: 15px;
`;
export const SignUpText = styled.Text`
  color: ${colors.primaryPurple};
  font-size: 15px;
  font-weight: bold;
`;