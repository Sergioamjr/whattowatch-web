import React from "react";
import Favorites from "pages/Favorites";
import useQueryUserFavorites from "hooks/useQueryUserFavorites";
import { FixMeLater } from "types/common";

const FavoritesContainer = (props: FixMeLater): JSX.Element => {
  const userFavoriteData = useQueryUserFavorites();

  return <Favorites {...props} {...userFavoriteData} />;
};

export default FavoritesContainer;
