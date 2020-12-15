import MembershipApiRepositoryImpl from "./data/api/membership/MembershipApiRepositoryImpl";
import { Router, Route } from "react-router-dom";
import BrowserHistoryHelper from "./utils/BrowserHistoryRouter";
import React, { lazy, Suspense } from "react";
import Loading from "./presentation/ui/loading/Loading";

const App = (): JSX.Element => {
  const membershipApiRepository = new MembershipApiRepositoryImpl();

  const MembershipsComponent = lazy(
    () => import("./presentation/view/membership/MembershipsComponent")
  );
  const CreateMembershipComponent = lazy(
    () => import("./presentation/view/membership/CreateMembershipComponent")
  );
  return (
    <Router history={BrowserHistoryHelper.getHistory()}>
      <div className="App">
        <Route exact path="/">
          <Suspense fallback={<Loading />}>
            <MembershipsComponent
              membershipApiRepository={membershipApiRepository}
            />
          </Suspense>
        </Route>

        <Route exact path="/create-membership">
          <Suspense fallback={<Loading />}>
            <CreateMembershipComponent
              membershipApiRepository={membershipApiRepository}
            />
          </Suspense>
        </Route>
      </div>
    </Router>
  );
};

export default App;
