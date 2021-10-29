import { createContext, useState } from 'react';

// creates an inital context
// context is a JS object
// variable is capitalized as the object contains a react component.
// createContext takes an argument of any type or value which is the initial value of the context- inital value of the application or "component wide state"
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  // Only reason we are adding these functions to the inital context here is to provide auto-completion in the IDE later. These do not do anything at this moment.
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

// a regular component but has the job of providing values to all the components that are interested in listening to the values- all components that need values from the context

// Is also responsible for updating the context values

// We use the react function useState() to listen to the FavoritesContext value and update the FavoritesContextProvider prop... this means that all components that are listening to the FavoritesContextProvider will also be re-evaluated as their state will change as well.
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    // instead of passing a new value to the state update function, pass a function. This function will be executed for you by react and will automatically receive the previous state snapshot, and you should then return the updated state from there.
    // This is the best way of updating state if your new state depends on a previous state value (such as pushing to an array)
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  // As above, the useState setter function will auto receive the previous snapshot, so we call it, and filter out the meetupId that is passed to removeFavoriteHander.
  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  // evaluates if the given meetupId is present in the userFavorites array. Basically tells you if a meetup is favorited. Does not mutate state.
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  // these are the values that will be exposed to all interested components via props.
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  // add the context variable to the value of the FavoritesContext.provider, as well as add {props.children} in between the tags to allow it to wrap other components.
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

// exporting both the FavoritesContext as DEFAULT (the inital context above) as well as the FavoritesContextProvider component, as both will need to be accessed outside of the file.

export default FavoritesContext;
// We now wrap the Favorites Context Component around all components that are interested in accessing these values.

// favorites page will be interested
// nav bar will be interested (to show how many favorites there are)
// all meetups page meetup components will be interested, because we have the "To Favorites" button on each one.
