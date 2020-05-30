import PropTypes from "prop-types";
import React from "react";

const Favorites = ({ loading, getFavoritesByUserID }) => {
  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {!getFavoritesByUserID.length ? (
            <p>Lista vazia</p>
          ) : (
            getFavoritesByUserID.map(({ title, _id }) => (
              <div key={_id}>
                <p>Title: {title}</p>
                <button>Remover</button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

Favorites.propTypes = {
  getFavoritesByUserID: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      _id: PropTypes.string,
    })
  ),
  loading: PropTypes.bool,
};

export default Favorites;
