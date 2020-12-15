import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = (): JSX.Element => {
  return (
    <div className="alignItemCenter">
      <div className="page-container">
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress style={{ color: "50BCFF !important" }} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
