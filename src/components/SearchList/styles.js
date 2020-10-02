import styled from 'styled-components/native'
import colors from '../../../styles/colors'

export const Container = styled.TouchableOpacity`
  margin: 5px 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${colors.primaryBlack};
`;
export const Text = styled.Text`
  font-size: 17px;
  color: ${colors.primaryWhite};
`;