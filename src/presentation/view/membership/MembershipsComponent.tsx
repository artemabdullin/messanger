import Grid from "@material-ui/core/Grid";

import React from "react";

import blueEllipse from "../../../assets/img/blue-ellipse.svg";

import arrowBack from "../../../assets/img/arrow-back.svg";
import apple from "../../../assets/img/apple-with-background.svg";

import MembershipApiRepository from "../../../data/models/membership/MembershipApiRepository";
import Membership from "../../../domain/models/Membership";
import MembershipViewModel from "../view-model/membership/MembershipViewModel";
import MembershipViewModelImpl from "../view-model/membership/MembershipViewModelImpl";
import MembershipItem from "./MembershipItem";
import { Link } from "react-router-dom";

interface Props {
  membershipApiRepository: MembershipApiRepository;
}

interface State {}

export default class MembershipsComponent extends React.Component<
  Props,
  State
> {
  private readonly membershipViewModel: MembershipViewModel;
  constructor(props: Props) {
    super(props);

    this.membershipViewModel = new MembershipViewModelImpl(
      this.props.membershipApiRepository
    );
  }

  public componentDidMount = (): void => {
    this.membershipViewModel.attachView(this);
  };

  public componentWillUnmount = (): void => {
    this.membershipViewModel.detachView(this);
  };

  public onViewModelChanged(): void {}

  public render(): JSX.Element {
    if (!localStorage.getItem("listOfMemberships")) {
      localStorage.setItem("listOfMemberships", "[]");
    }

    const listOfMembershipsFromLocalStorage = JSON.parse(
      localStorage.getItem("listOfMemberships") || ""
    );
    return (
      <div className="alignItemCenter">
        <div className="page-container">
          <Grid container spacing={2}>
            <Grid xs={1}>
              <div
                style={{
                  paddingTop: "20px",
                  textAlign: "end",
                }}
              >
                <img src={arrowBack} alt="arrow back" />
              </div>
            </Grid>
            <Grid xs={9}>
              <div className="page-title">Membership levels</div>{" "}
            </Grid>
            <Grid xs={2}>
              <div className="next-page">
                <button>Next</button>
              </div>{" "}
            </Grid>

            <Grid xs={12}>
              <div className="alignItemCenter" style={{ paddingTop: "33px" }}>
                <img src={apple} alt="apple" />
              </div>
            </Grid>
          </Grid>

          <div className="text-styles">
            Add membership levels by describing the benefits of each. We
            recommend using 1-5 levels.
          </div>

          <div className="add-membership">
            <button>
              <Link to="/create-membership">
                <img src={blueEllipse} alt="add-membership" />
              </Link>
            </button>
          </div>

          {listOfMembershipsFromLocalStorage &&
          listOfMembershipsFromLocalStorage.length >= 1 ? (
            listOfMembershipsFromLocalStorage.map((membership: Membership) => {
              return (
                <MembershipItem
                  key={`membership_item_${membership.name}`}
                  membership={membership}
                />
              );
            })
          ) : (
            <div className="text-gray" style={{ paddingTop: "25px" }}>
              Application doesn't have memberships
            </div>
          )}
        </div>
      </div>
    );
  }
}
