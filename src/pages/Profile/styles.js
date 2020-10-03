import styled from 'styled-components/native';
import colors from '../../../styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.primaryGray};
`;
export const UploadAvatarButton = styled.TouchableOpacity`
  margin-top: 20%;
  background-color: ${colors.primaryBlack};
  width: 165px;
  height: 165px;
  border-radius: 90px;
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
  width: 160px;
  height: 160px;
  border-radius: 80px;
  opacity: 0.9;
`;
export const Name = styled.Text`
  margin: 20px 20px 10px 20px;
  font-size: 28px;
  color: ${colors.secondaryPurple};
  font-weight: bold;
  opacity: 0.9;
`;
export const Email = styled.Text`
  margin: 2px 20px;
  font-size: 20px;
  color: ${colors.secondaryPurple};
  font-style: italic;
  opacity: 0.9;
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
  color: ${colors.primaryBlack};
`;