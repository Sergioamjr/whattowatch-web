import React, { useEffect, useState } from "react";
import Template from "components/Template";
import useAppStore from "hooks/useAppStore";

const SingleMovie: React.FC = () => {
  const { setCachedMovie, cachedMovie } = useAppStore();
  const [movie] = useState(cachedMovie);
  useEffect(() => {
    return () => setCachedMovie({});
  }, []);

  console.log(movie);
  return (
    <Template>
      <p>SingleMovie</p>
    </Template>
  );
};

export default SingleMovie;
