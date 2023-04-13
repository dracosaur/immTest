import { IForm } from "./data";
import { Form as Layout } from "./Layout";
import React from "react";


export const Form = (props: IForm) => {

  const layoutProps = {
    ...props,
  };

  return <Layout {...layoutProps} />;
};
