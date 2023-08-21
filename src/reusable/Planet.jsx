import classes from "./Planet.module.css";
import MobileBtn from "../navigation/MobileBtn";
import TabletBtn from "../navigation/TabletBtn";

function Planet({
  name,
  imgSrc,
  overview,
  parameters,
  src,
  className,
  classname,
}) {
  return (
    <>
      {window.innerWidth < 768 ? <MobileBtn /> : ""}
      <div className={classes.main}>
        <img className={classname} src={imgSrc} alt={name} />
        <img src={src} className={className} />
        <div
          className={
            window.innerWidth > 768 ? classes["overview-container"] : ""
          }
        >
          <div className={classes["mercury-overview"]}>
            <h4>{name}</h4>
            <p>{overview}</p>
            <span>Source : Wikipedia</span>
          </div>
          {window.innerWidth > 768 ? <TabletBtn /> : ""}
        </div>
        <div className={classes["mercury-parameters"]}>
          {parameters.map((param) => (
            <div key={param.label}>
              <p>{param.label}</p>
              <span>{param.value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Planet;
