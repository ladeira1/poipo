import styled from 'styled-components/native';
import colors from '../../../styles/colors'

export const Container = styled.View`
  flex: 1;
  padding-top: 15px;
  background-color: ${colors.primaryGray};
`;
export const InputArea = styled.View`
  flex-direction: row;
  margin: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${colors.primaryWhite};
  align-items: center;
`;
export const Input = styled.TextInput`
  width: 90%;
  background-color: ${colors.primaryWhite};
  height: 40px;
  padding-left: 8px;
`;
export const List = styled.FlatList`
  flex: 1;
`;