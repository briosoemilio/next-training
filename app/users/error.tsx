"use client"
import React, { useEffect } from "react";

const ErrorUsers = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h2>Something went wrong! </h2>;
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default ErrorUsers;
