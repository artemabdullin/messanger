import React from "react";

import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import arrowBack from "../../../assets/img/arrow-back.svg";
import apple from "../../../assets/img/apple-with-background.svg";

import MembershipApiRepository from "../../../data/models/membership/MembershipApiRepository";
import Input from "../../ui/input/Input";
import MembershipViewModel from "../view-model/membership/MembershipViewModel";
import MembershipViewModelImpl from "../view-model/membership/MembershipViewModelImpl";

interface Props {
  membershipApiRepository: MembershipApiRepository;
}

interface State {
  name: string;
  description: string;
  price?: number;

  isShowNameError: boolean;
  isShowDescriptionError: boolean;
  isShowPriceError: boolean;
}

export default class CreateMembershipComponent extends React.Component<
  Props,
  State
> {
  private readonly membershipViewModel: MembershipViewModel;
  constructor(props: Props) {
    super(props);

    this.membershipViewModel = new MembershipViewModelImpl(
      this.props.membershipApiRepository
    );

    this.state = {
      name: "",
      description: "",
      price: undefined,

      isShowNameError: false,
      isShowDescriptionError: false,
      isShowPriceError: false,
    };
  }

  public componentDidMount = (): void => {
    this.membershipViewModel.attachView(this);
  };

  public componentWillUnmount = (): void => {
    this.membershipViewModel.detachView(this);
  };

  public onViewModelChanged = (): void => {};

  public render(): JSX.Element {
    const { name, description, price } = this.state;

    const isValidFieldsForCreateMembership = (): boolean => {
      let isValid = true;

      if (!name) {
        this.setState({ isShowNameError: true });
        isValid = false;
      }

      if (!description) {
        this.setState({ isShowDescriptionError: true });

        isValid = false;
      }

      if (!price) {
        this.setState({ isShowPriceError: true });
        isValid = false;
      }

      return isValid;
    };

    const {
      isShowNameError,
      isShowPriceError,
      isShowDescriptionError,
    } = this.state;

    return (
      <div className="alignItemCenter">
        <div className="page-container">
          <Grid container spacing={2}>
            <Grid xs={1}>
              <div style={{ paddingTop: "20px", textAlign: "end" }}>
                <Link to="/">
                  <img src={arrowBack} alt="arrow back" />
                </Link>
              </div>
            </Grid>
            <Grid xs={9}>
              <div className="page-title">New membership level</div>{" "}
            </Grid>
            <Grid xs={2}>
              <div className="next-page">
                <button
                  onClick={(): void => {
                    if (isValidFieldsForCreateMembership()) {
                      this.membershipViewModel.createNewMembershipLevel({
                        name,
                        description,
                        price: price as number,
                      });
                    }
                  }}
                >
                  Save
                </button>
              </div>{" "}
            </Grid>

            <Grid xs={12}>
              <div className="alignItemCenter" style={{ paddingTop: "33px" }}>
                <img src={apple} alt="apple" />
              </div>
            </Grid>
          </Grid>

          <div style={{ paddingTop: "20px" }}>
            <label className="d-block">Name</label>
            <Input
              className={`${isShowNameError ? "error-border" : ""}`}
              value={name}
              onChange={(e): void => {
                this.setState({ isShowNameError: false });
                this.setState({ name: e.currentTarget.value });
              }}
              placeholder="name"
            />
          </div>

          <div style={{ paddingTop: "22px" }}>
            <label className="d-block">Description</label>
            <textarea
              className={`${
                isShowDescriptionError ? "error-border" : ""
              } page-textarea`}
              onChange={(e): void => {
                this.setState({ isShowDescriptionError: false });
                this.setState({ description: e.currentTarget.value });
              }}
              value={description}
              placeholder="description"
            />
          </div>
          <div style={{ paddingTop: "16px" }}>
            <label className="d-block">Price per month</label>
            <Input
              className={`${isShowPriceError ? "error-border" : ""}`}
              value={price}
              placeholder="$"
              type="number"
              onChange={(e): void => {
                this.setState({ isShowPriceError: false });
                this.setState({ price: Number(e.currentTarget.value) });
              }}
            />
          </div>
          <div className="text-styles">
            Specify a price per month from $1 to $1000. From 5% to 50% of all
            payments of participants will go to your balance.
          </div>
        </div>
      </div>
    );
  }
}
