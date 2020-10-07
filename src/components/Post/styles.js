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
  color: ${colors.primaryPurple};
  margin: 0 6px;
`;
export const TimeText = styled.Text`
  margin-right: 6px;
  color: ${colors.lightGray};
`;
export const ModalContainer = styled.KeyboardAvoidingView`
  width: 100%;
  height: 60%;
  background-color: ${colors.primaryBlack};
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding-top: 20%;
`;
export const ButtonReturn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 15px;
  left: 15px;
`;
export const ButtonText = styled.Text`
  font-size: 20px;
  font-style: italic;
  color: ${colors.white};
`;
export const ButtonDelete = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 15px;
`;
export const ModalText = styled.Text`
  font-size: 15px;
  color: ${colors.white};
  align-self: flex-start;
  margin-left: 20px;
`;
export const Input = styled.TextInput`
  width: 90%;
  height: 100px;
  background-color: ${colors.lightGray};
  border-radius: 5px;
  margin: 10px;
  font-size: 16px;
  padding-left: 10px;
  margin-bottom: 15%;
`;
export const Button = styled.TouchableOpacity`
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primaryPurple};
  width: 80%;
  height: 45px;
  border-radius: 5px;
`;