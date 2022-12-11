import React, { useEffect, useState } from "react";
import "./App.css";
import cardsData from "./cardsData";
import {
  ButtonLight,
  CardHolderThirdStep,
  CustomBtn,
  FavoriteNumberSpan,
  Intro,
  IntroSub,
  StepOneDisplayCards,
} from "./Components.styled";
import Card from "./components/Card";
import Spinner from "./components/Loader";
import NumberList from "./components/Numbers";
import Pile from "./components/Piles";
import {
  STEP_1_INTRO_HEADER,
  STEP_1_INTRO_SUB,
  STEP_2_INTRO_HEADER,
  STEP_2_INTRO_SUB,
  STEP_3_INTRO_HEADER,
  STEP_3_INTRO_SUB,
  STEP_6_FINAL,
  STEP_6_HEADER,
  STEP_6_INTRO_SUB,
  YOUR_CARD_IS,
} from "./config/constants";
import uuidv4 from "./utility/uuidv4";

let aDeckOfCards = Array.from({ length: 52 }, (_, i) => i + 1);

/**
 * Utility function to mix all cards randomly
 * @param {*} cards
 * @returns Mixed cards
 */
const shuffle = (cards) => {
  for (let i = cards?.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
};

/**
 * Number to it's base3 representation
 * @param {*} favNr
 * @returns Array base3
 */
const numToBaseThree = (favNr) => {
  let cardNumbers = [];
  let pileLimit = 9;
  for (let i = 0; i < 3; i++) {
    cardNumbers.push(Math.floor(favNr / pileLimit));
    favNr = favNr - Math.floor(favNr / pileLimit) * pileLimit;
    pileLimit = pileLimit / 3;
  }
  cardNumbers.reverse();
  return cardNumbers;
};

const App = () => {
  const [state, setState] = useState({
    currentStep: 1,
    favoriteNumber: 0,
    cardsToSplit: 27,
    slot1: [],
    slot2: [],
    slot3: [],
  });

  const [spinner, setSpinner] = useState(true);
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    aDeckOfCards = shuffle(aDeckOfCards);
    aDeckOfCards = aDeckOfCards.slice(0, 27);
  }, []);

  const selectDeck = (e) => {
    let arr = numToBaseThree(state.favoriteNumber - 1);
    let stateNum = state.currentStep - 3;
    let index = arr[stateNum];
    if (index === 0) {
      if (e === 1)
        aDeckOfCards = [...state.slot1, ...state.slot2, ...state.slot3];
      else if (e === 2)
        aDeckOfCards = [...state.slot2, ...state.slot1, ...state.slot3];
      else aDeckOfCards = [...state.slot3, ...state.slot2, ...state.slot1];
    } else if (index === 1) {
      if (e === 1)
        aDeckOfCards = [...state.slot2, ...state.slot1, ...state.slot3];
      else if (e === 2)
        aDeckOfCards = [...state.slot1, ...state.slot2, ...state.slot3];
      else aDeckOfCards = [...state.slot2, ...state.slot3, ...state.slot1];
    } else {
      if (e === 1)
        aDeckOfCards = [...state.slot3, ...state.slot2, ...state.slot1];
      else if (e === 2)
        aDeckOfCards = [...state.slot3, ...state.slot1, ...state.slot2];
      else aDeckOfCards = [...state.slot1, ...state.slot2, ...state.slot3];
    }
    let s1 = [],
      s2 = [],
      s3 = [];
    for (let i = 0; i < 27; i++) {
      i % 3 === 0
        ? s1.push(aDeckOfCards[i])
        : i % 3 === 1
        ? s2.push(aDeckOfCards[i])
        : s3.push(aDeckOfCards[i]);
    }

    setState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep + 1,
      slot1: s1,
      slot2: s2,
      slot3: s3,
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        {(() => {
          if (state.currentStep === 1) {
            return (
              <>
                <Intro>{STEP_1_INTRO_HEADER}</Intro>
                <IntroSub>{STEP_1_INTRO_SUB}</IntroSub>
                <CustomBtn
                  onClick={() => {
                    setState({ currentStep: 2 });
                  }}
                >
                  Next >>>{" "}
                </CustomBtn>
              </>
            );
          }
          if (state.currentStep === 2) {
            return (
              <>
                <Intro>{STEP_2_INTRO_HEADER}</Intro>
                <IntroSub>{STEP_2_INTRO_SUB}</IntroSub>
                <StepOneDisplayCards>
                  {Array.from({ length: 27 }, (_, i) => i + 1).map((number) => (
                    <NumberList
                      key={uuidv4()}
                      number={number}
                      onClick={() => {
                        setState({
                          currentStep: 3,
                          favoriteNumber: number,
                          slot1: aDeckOfCards.slice(0, 9),
                          slot2: aDeckOfCards.slice(9, 18),
                          slot3: aDeckOfCards.slice(18, 27),
                        });
                      }}
                    />
                  ))}
                </StepOneDisplayCards>
              </>
            );
          }
          if (
            state.currentStep === 3 ||
            state.currentStep === 4 ||
            state.currentStep === 5
          ) {
            return (
              <>
                <Intro>{STEP_3_INTRO_HEADER}</Intro>
                <IntroSub>
                  {STEP_3_INTRO_SUB}:{" "}
                  <FavoriteNumberSpan>
                    {state.favoriteNumber}
                  </FavoriteNumberSpan>
                </IntroSub>
                <CardHolderThirdStep>
                  {[1, 2, 3].map((e) => {
                    let d =
                      e === 1
                        ? state.slot1
                        : e === 2
                        ? state.slot2
                        : state.slot3;
                    return (
                      <div>
                        <div style={{ width: "200px", height: "200px" }}>
                          <Pile
                            pileOrder={d}
                            width={150}
                            margin={100}
                            focused={-1}
                            straight={1}
                            key={uuidv4()}
                          />
                        </div>
                        <div
                          style={{
                            marginTop: "170px",
                            marginLeft: "100px",
                            marginBottom: "10px",
                            position: "relative",
                          }}
                        >
                          <ButtonLight
                            onClick={() => {
                              selectDeck(e);
                            }}
                          >
                            In this slot
                          </ButtonLight>
                        </div>
                      </div>
                    );
                  })}
                </CardHolderThirdStep>
              </>
            );
          }
          if (state.currentStep === 6) {
            setTimeout(() => {
              setSpinner(false);
            }, 3000);

            return (
              <>
                <Intro>{STEP_6_HEADER}</Intro>
                <IntroSub>{STEP_6_INTRO_SUB}</IntroSub>
                {spinner && (
                  <div style={{ paddingTop: "60px" }}>
                    <Spinner />
                  </div>
                )}
                {showGif && !spinner && (
                  <div>
                    <img
                      src="https://i.giphy.com/media/2bYewTk7K2No1NvcuK/giphy.webp"
                      alt="brain_loader--gif"
                    />
                  </div>
                )}
                {showGif && !spinner && <Intro>{STEP_6_FINAL}</Intro>}

                <CustomBtn
                  onClick={() => {
                    setState((prevState) => ({
                      ...prevState,
                      currentStep: prevState.currentStep + 1,
                    }));
                  }}
                >
                  Next >>>{" "}
                </CustomBtn>
              </>
            );
          }

          if (state.currentStep === 7) {
            return (
              <>
                <Intro>{YOUR_CARD_IS}</Intro>
                <div>
                  <img
                    src={require(`./card_pics/${
                      aDeckOfCards[state.favoriteNumber - 1]
                    }.png`)}
                    width="250px"
                    height="400px"
                    alt="none"
                  ></img>
                </div>
                <div>Here are some custom created branded cards :)</div>
                <StepOneDisplayCards>
                  {cardsData &&
                    cardsData.length &&
                    cardsData.map((card) => (
                      <Card textWithSymbol={card?.value} key={uuidv4()} />
                    ))}
                </StepOneDisplayCards>
              </>
            );
          }
        })()}
      </header>
    </div>
  );
};

export default App;
