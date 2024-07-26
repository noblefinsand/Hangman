import { JsxElement } from "typescript";
import styles from "./Drawing.module.css";
import { useState } from "react";
import Letters from "./Letters";

const Drawing: React.FC = () => {
  const [showRope, setShowRope] = useState<boolean>(false);
  const [showHead, setShowHead] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [showLeftArm, setShowLeftArm] = useState(false);
  const [showRightArm, setShowRightArm] = useState(false);
  const [showLeftLeg, setShowLeftLeg] = useState(false);
  const [showRightLeg, setShowRightLeg] = useState(false);

  const drawingRope = (): JSX.Element => {
    return (
      <div
        id="stick-rope"
        style={{
          background: "black",
          height: "30px",
          width: "5px",
        }}
      ></div>
    );
  };

  const drawingHead = (): JSX.Element => {
    return (
      <div
        id="stick-head"
        style={{
          borderRadius: "100%",
          height: "50px",
          width: "50px",
          alignSelf: "center",
          background: "black",
        }}
      ></div>
    );
  };

  const drawingNeck = (): JSX.Element => {
    return (
      <div
        id="stick-neck"
        style={{
          height: "10px",
          background: "black",
          width: "5px",
          alignSelf: "center",
        }}
      ></div>
    );
  };

  const drawingBody = (): JSX.Element => {
    return (
      <div
        id="stick-body"
        style={{
          height: "70px",
          background: "black",
          width: "5px",
        }}
      ></div>
    );
  };

  const drawingLeftArm = (): JSX.Element => {
    return (
      <div
        id="stick-left-arm"
        style={{
          height: "50px",
          border: "2px solid black",
          transform: "rotate(45deg)",
          transformOrigin: "top right",
        }}
      ></div>
    );
  };

  const drawingRightArm = (): JSX.Element => {
    return (
      <div
        id="stick-right-arm"
        style={{
          height: "50px",
          border: "2px solid black",
          transform: "rotate(-45deg)",
          transformOrigin: "top left",
        }}
      ></div>
    );
  };

  const drawingLeftLeg = (): JSX.Element => {
    return (
      <div
        id="stick-left-leg"
        style={{
          height: "50px",
          border: "2px solid black",
          transform: "rotate(45deg)",
          transformOrigin: "top right",
        }}
      ></div>
    );
  };

  const drawingRightLeg = (): JSX.Element => {
    return (
      <div
        id="stick-right-leg"
        style={{
          height: "50px",
          border: "2px solid black",
          transform: "rotate(-45deg)",
          transformOrigin: "top left",
        }}
      ></div>
    );
  };

  return (
    <>
      <div className={styles.flex_container}>
        <div
          style={{
            background: "black",
            width: "5px",
            height: "400px",
          }}
        ></div>
        <div
          style={{
            background: "black",
            height: "5px",
            width: "250px",
          }}
        ></div>
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            width: "50px",
            height: "100%",
            borderTop: "5px solid black",
            alignItems: "center",
          }}
        >
          {showRope && drawingRope()}
          {showHead && drawingHead()}
          {showBody && drawingNeck()}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {showLeftArm && drawingLeftArm()}

            {showBody && drawingBody()}

            {showRightArm && drawingRightArm()}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {showLeftLeg && drawingLeftLeg()}
            {showRightLeg && drawingRightLeg()}
          </div>
        </div>
      </div>
      <Letters
        setShowRope={setShowRope}
        setShowHead={setShowHead}
        setShowBody={setShowBody}
        setShowLeftArm={setShowLeftArm}
        setShowRightArm={setShowRightArm}
        setShowLeftLeg={setShowLeftLeg}
        setShowRightLeg={setShowRightLeg}
      />
    </>
  );
};

export default Drawing;
