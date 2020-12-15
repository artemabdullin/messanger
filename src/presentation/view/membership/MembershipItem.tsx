import Grid from "@material-ui/core/Grid";

import arrowDown from "../../../assets/img/arrow-down.svg";
import star from "../../../assets/img/star.svg";
import whiteEllipse from "../../../assets/img/white-ellipse.svg";

import Membership from "../../../domain/models/Membership";

interface Props {
  membership: Membership;
}

const MembershipItem = (props: Props): JSX.Element => {
  const { name, description, price } = props.membership;
  return (
    <div style={{ paddingTop: "25px" }}>
      <Grid container spacing={2}>
        <Grid xs={2}>
          <div className="alignItemCenter" style={{ paddingTop: "10px" }}>
            <img src={whiteEllipse} alt="white ellipse" />
          </div>
        </Grid>

        <Grid xs={9}>
          <div style={{ paddingTop: "10px" }}>
            <div className="d-flex">
              <div>{name}</div>
              <div
                className="text-gray"
                style={{ paddingLeft: "4px", paddingTop: "2px" }}
              >
                ${price} per month
              </div>
              <div
                className="text-gray"
                style={{ paddingLeft: "4px", paddingTop: "4px" }}
              >
                <img src={star} alt="star" />
              </div>
            </div>

            <div className="text-gray">{description}</div>
          </div>
        </Grid>

        <Grid xs={1}>
          <div style={{ paddingTop: "10px" }}>
            <img src={arrowDown} alt="apple" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MembershipItem;
