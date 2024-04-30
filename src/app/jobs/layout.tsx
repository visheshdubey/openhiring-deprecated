import React from "react";

type Props = {};

const JobLayout = (
  props: Readonly<{
    children: React.ReactNode;
  }>
) => {
  return <div>{props.children}</div>;
};

export default JobLayout;
