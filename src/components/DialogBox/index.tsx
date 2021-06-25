import React, { ReactElement } from "react";
import style from "./dialogbox.module.css";
import Chevron from "../../assets/Chevron.svg";

interface IProps {
  children: JSX.Element | JSX.Element[];
  opened: Boolean;
  toggle: Function;
}

export default function DialogBox({
  children,
  opened,
  toggle,
}: IProps): ReactElement {
  return (
    <>
      {opened ? (
        <>
          <div className={style["dialog-box"]}>
            <div className={style["dialog-box-body"]}>
              {children}
              <div
                onClick={() => {
                  toggle();
                }}
              >
                <img
                  className={style["close-button"]}
                  src={Chevron}
                  alt="hide"
                ></img>
              </div>
            </div>
          </div>
          <div className={style["dialog-box-background"]}></div>
        </>
      ) : null}
    </>
  );
}
