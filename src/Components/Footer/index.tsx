import { IFooter } from "./data";
import { Footer as Layout } from "./Layout";


export const Footer = (props: IFooter) => {

  const layoutProps = {
    ...props,
  };

  return <Layout {...layoutProps} />;
};
