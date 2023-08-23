import { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";

function Navigation({
  navigation,
  list,
  btn,
  border,
  overview,
  structure,
  surface,
  background,
  numberOne,
  numberTwo,
  numberthree,
  number,
}) {
  const { active, setActive } = useContext(NavigationContext);

  const handleTabClick = (tab) => {
    setActive(tab);
  };

  return (
    <>
      <div className={navigation}>
        <ul className={list}>
          <li>
            <button
              className={btn}
              style={
                active === "overview"
                  ? {
                      borderBottom: `4px solid var(${border})`,
                      color: " var(--white)",
                      background: `var(${background})`,
                    }
                  : {}
              }
              onClick={() => {
                handleTabClick("overview");
              }}
            >
              <span className={number}>{numberOne}</span>
              {overview}
            </button>
          </li>
          <li>
            <button
              className={btn}
              style={
                active === "structure"
                  ? {
                      borderBottom: `4px solid var(${border})`,
                      color: " var(--white)",
                      background: `var(${background})`,
                    }
                  : {}
              }
              onClick={() => {
                handleTabClick("structure");
              }}
            >
              <span className={number}>{numberTwo}</span>
              {structure}
            </button>
          </li>
          <li>
            <button
              className={btn}
              style={
                active === "surface"
                  ? {
                      borderBottom: `4px solid var(${border})`,
                      color: " var(--white)",
                      background: `var(${background})`,
                    }
                  : {}
              }
              onClick={() => {
                handleTabClick("surface");
              }}
            >
              <span className={number}>{numberthree}</span>
              {surface}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navigation;
