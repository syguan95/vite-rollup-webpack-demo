import { BlueText, RedText } from "webpack-demo"; //npm link一下
import "webpack-demo/dist/css/index.css";
const PageOne = props => {
  console.log(import.meta.env.VITE_SHARE, import.meta.env.VITE_ENV);
  return (
    <div>
      <BlueText text="This is a blue text."></BlueText>
      <RedText text="This is a red text."></RedText>
    </div>
  );
};
export default PageOne;
