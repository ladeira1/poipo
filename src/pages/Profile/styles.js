import styled from 'styled-components/native';
import colors from '../../../styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.primaryBlack};
`;
export const DetailContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 10px;
  width: 100%;
`;
export const UploadAvatarButton = styled.TouchableOpacity`
  background-color: ${colors.primaryBlack};
  width: 84px;
  height: 84px;
  border-radius: 42px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
export const UploadText = styled.Text`
  z-index: 2;
  position: absolute;
  font-size: 55px;
  color: ${colors.primaryGray};
  opacity: 0.4;
`;
export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  opacity: 0.9;
`;
export const DetailTextContainer = styled.View`
  justify-content: center;
  flex: 1;
  margin-left: 10px;
  margin-right: 15px;
`;
export const Name = styled.Text`
  font-size: 22px;
  color: ${colors.white};
  font-weight: bold;
  opacity: 0.9;
`;
export const Email = styled.Text`
  font-size: 20px;
  color: ${colors.lightGray};
  font-style: italic;
  opacity: 0.9;
`;
export const DescriptionContainer = styled.View`
  margin: 20px 0 80px 5px;
  width: 95%;
  min-height: 120px;
`;
export const Description = styled.Text`
  border-left-width: ${props => props.text.length === 0? '0' : '3px'};
  border-color: ${colors.secondaryPurple};
  padding-left: 12px;
  font-size: 16px;
  color: ${colors.lightGray};
`;
export const Button = styled.TouchableOpacity`
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.colored? colors.primaryPurple : colors.lightGray};
  width: 80%;
  height: 45px;
  border-radius: 5px;
`;
export const ButtonText = styled.Text`
  font-size: 20px;
  font-style: italic;
  color: ${props => props.color};
`;
export const ModalContainer = styled.KeyboardAvoidingView`
  width: 100%;
  height: 70%;
  background-color: ${colors.primaryBlack};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;
export const ButtonReturn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 15px;
  left: 15px;
`;
export const ModalText = styled.Text`
  font-size: 17px;
  color: ${colors.white};
  align-self: flex-start;
  margin-left: 20px;
`;
export const Input = styled.TextInput`
  width: 90%;
  height: ${props => props.height};
  background-color: ${colors.lightGray};
  border-radius: 10px;
  margin: 10px;
  font-size: 20px;
  padding-left: 10px;
`;