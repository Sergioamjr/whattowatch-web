import React from "react";
import Favorites from "../../pages/Favorites";
import useQueryUserFavorites from "../../hooks/useQueryUserFavorites";

const FavoritesContainer: React.FC = (props) => {
  const userFavoriteData = useQueryUserFavorites();

  return <Favorites {...props} {...userFavoriteData} />;
};

export default FavoritesContainer;
