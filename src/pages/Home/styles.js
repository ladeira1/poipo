import styled from 'styled-components/native'
import colors from '../../../styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryBlack};
`;
export const ListPosts = styled.FlatList`
  flex: 1;
`;
export const ButtonPost = styled.TouchableOpacity`
  background-color: ${colors.primaryBlack};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 6%;
  right: 6%;
`;
