import React from "react";
import { LoaderWrapper, Loader } from "./LoaderElements";

const Loading = ({ page }) => {
  console.log(page);
  return (
    <LoaderWrapper>
      <Loader bg={page} />
    </LoaderWrapper>
  );
};

export default Loading;
