import styled from 'styled-components/native'
import colors from '../../../styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.secondaryGray};
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.primaryWhite
})`
  background-color: transparent;
  margin: 10px;
  font-size: 20px;
  color: ${colors.white};
  flex: 1;
`;
export const Button = styled.TouchableOpacity`
  background-color: ${colors.secondaryPurple};
  margin-right: 10px;
  border-radius: 4px;
  padding: 5px 15px;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${colors.white};
`;