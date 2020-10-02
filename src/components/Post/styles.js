import styled from 'styled-components/native'
import colors from '../../../styles/colors'

export const Container = styled.View`
  margin: 4px 2%;
  background-color: ${colors.secondaryGray};
  padding: 11px;
  border-radius: 8px;
  box-shadow: 1px 1px 3px rgba(18, 18, 18, 0.2);
  elevation: 3;
`;
export const Header = styled.TouchableOpacity`  
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;
export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 6px;
`;
export const Name = styled.Text`
  color: ${colors.primaryWhite};
  font-size: 19px;
  font-weight: bold;
`;
export const MessageView = styled.View`

`;
export const Message = styled.Text`
  color: ${colors.primaryWhite};
`;
export const ActionsView = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;
export const LikeButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 45px;
  margin-top: 12px;
  align-items: center;
  justify-content: flex-start;
`;
export const Like = styled.Text`
  color: ${colors.red};
  margin: 0 6px;
`;
export const TimeText = styled.Text`
  margin-right: 6px;
  color: ${colors.lightGray};
`;