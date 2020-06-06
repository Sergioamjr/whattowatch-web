import React from "react";
import Favorites from "pages/Favorites";
import useQueryUserFavorites from "hooks/useQueryUserFavorites";

const FavoritesContainer = (props): JSX.Element => {
  const userFavoriteData = useQueryUserFavorites();

  return <Favorites {...props} {...userFavoriteData} />;
};

export default FavoritesContainer;
