import styled from 'styled-components/native'
import colors from '../../../styles/colors'

export const Container = styled.SafeAreaView`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryBlack};
  border-bottom-color: ${colors.lightGray};
  border-bottom-width: 1px;
  padding-top: 15px;
`;
export const Title = styled.Text`
  font-style: italic;
  font-size: 34px;
  font-weight: bold;
  color: ${colors.primaryPurple};
  padding-bottom: 15px;
`;