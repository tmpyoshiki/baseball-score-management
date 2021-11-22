import SSRTemplate from "../common/template/SSRTemplate";
import Main from "./component/Main";

const SSR = (): JSX.Element => {
  return <SSRTemplate mainComponent={<Main />} />;
};

export default SSR;
