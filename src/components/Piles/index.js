import React from "react";
import uuidv4 from "../../utility/uuidv4";

const Pile = ({ pileOrder, width, margin, focused, straight }) => {
  if (straight === undefined)
    return (
      <div style={{ position: "static" }}>
        {pileOrder &&
          pileOrder.map((e, index) => {
            if (focused === -1 || index + 1 !== focused)
              return (
                <div
                  style={{
                    position: "absolute",
                    margin: `${margin}px`,
                  }}
                  key={uuidv4()}
                  >
                  <img
                    alt="none"
                    className="hand-card"
                    key={e}
                    src={require(`../../card_pics/${e}.png`)}
                    width={`${width}px`}
                    style={{
                      transform: `rotateZ(${
                        (index - pileOrder.length / 2 - 1) * 8
                      }deg)`,
                      transformOrigin: "bottom left",
                    }}
                  ></img>
                </div>
              );
            else
              return (
                <div
                  style={{
                    position: "absolute",
                    margin: `${margin}px`,
                  }}
                >
                  <img
                    alt="none"
                    className="hand-card-focused"
                    key={e}
                    src={require(`../../card_pics/${e}.png`)}
                    width={`${width}px`}
                    style={{
                      transform: `rotateZ(${
                        (index - pileOrder.length / 2 - 1) * 8
                      }deg)`,
                      transformOrigin: "bottom left",
                    }}
                  ></img>
                </div>
              );
          })}
      </div>
    );
  else
    return (
      <div style={{ position: "static" }}>
        {pileOrder &&
          pileOrder.map((e, index) => {
            if (focused === -1 || index + 1 !== focused)
              return (
                <div
                  style={{
                    position: "absolute",
                    margin: `${margin}px`,
                  }}
                  key={uuidv4()}
                >
                  <img
                    alt="none"
                    className="hand-card"
                    key={e}
                    src={require(`../../card_pics/${e}.png`)}
                    width={`${width}px`}
                    style={{
                      transform: `translateX(${
                        (index - pileOrder.length / 2 - 1) * 20
                      }px)`,
                      transformOrigin: "bottom left",
                    }}
                  ></img>
                </div>
              );
            else
              return (
                <div
                  style={{
                    position: "absolute",
                    margin: `${margin}px`,
                  }}
                >
                  <img
                    alt="none"
                    className="hand-card-focused"
                    key={e}
                    src={require(`../../card_pics/${e}.png`)}
                    width={`${width}px`}
                    style={{
                      transform: `translateX(${
                        (index - pileOrder.length / 2 - 1) * 20
                      }px)`,
                      transformOrigin: "bottom left",
                    }}
                  ></img>
                </div>
              );
          })}
      </div>
    );
};

export default Pile;
