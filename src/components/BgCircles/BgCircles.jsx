import { createPortal } from 'react-dom';
import { Area, Circles, CirclesItem } from './BgCircles.styled';

const bgRoot = document.querySelector('#bg-root');
 const BgCircles = () => {
  return createPortal(
    <Area>
      <Circles>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
        <CirclesItem></CirclesItem>
      </Circles>
    </Area>,
    bgRoot
  );
};
export default BgCircles;