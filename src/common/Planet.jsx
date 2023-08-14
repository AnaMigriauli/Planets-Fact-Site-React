import classes from "./Planet.module.css";

function Planet({
  name,
  imgSrc,
  overview,
  parameters,
  src,
  className,
  classname,
}) {
  // const { name, imgSrc, overview, mercuryParam } = props;
  return (
    <>
      <img className={classname} src={imgSrc} alt={name} />
      <img src={src} className={className} />
      <div className={classes["mercury-overview"]}>
        <h4>{name}</h4>
        <p>{overview}</p>
        <span>Source : Wikipedia</span>
      </div>
      <div className={classes["mercury-parameters"]}>
        {parameters.map((param) => (
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
