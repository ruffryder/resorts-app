import styled from "styled-components";
import defaultImg from "../../images/bg-hero-room.jpg";
const StyledHero = styled.header`
  min-height: 75vh;
  margin-top: -66px;
  background: url(${props => (props.img ? props.img : defaultImg)}) center/cover
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
