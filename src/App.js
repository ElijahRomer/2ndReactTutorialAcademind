import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  //localhost:3000/
  return (
    <Layout>
      {/* switch tells the router to only render one route */}
      {/* React Router Dom uses RegEx to match paths so it can render multiple views, however if you only want a route to render the path is an exact match, add the exact attribute to opening tag of the Route component in question. */}
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>

        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>

        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
