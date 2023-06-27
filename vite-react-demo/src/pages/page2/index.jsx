import { BlueText, RedText } from "rollup-demo"; //npm link一下
import "rollup-demo/es/css/index.css";
const PageTwo = props => {
  return (
    <div>
      <BlueText text="This is a blue text."></BlueText>
      <RedText text="This is a red text."></RedText>
    </div>
  );
};
export default PageTwo;
