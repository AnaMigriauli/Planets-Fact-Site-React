import classes from "./Planet.module.css";

function Planet({ name, imgSrc, overview, mercuryParam, src, className }) {
  // const { name, imgSrc, overview, mercuryParam } = props;
  return (
    <>
      <img className={classes.mercury} src={imgSrc} alt={name} />
      <img src={src} className={className} />
      <div className={classes["mercury-overview"]}>
        <h4>{name}</h4>
        <p>{overview}</p>
        <span>Source : Wikipedia</span>
      </div>
      <div className={classes["mercury-parameters"]}>
        {mercuryParam.map((param) => (
          <div key={param.label}>
            <p>{param.label}</p>
            <span>{param.value}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Planet;
