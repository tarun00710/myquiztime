import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";
import { ScoreContext } from "../Context/ScoreCon";
import { userSignInContext } from "../Context/SignInContext";
import { Quizzes, Options } from "../Context/QuizDataContext";
import { updateScore } from "../Predisptach/Predispatch";
import Particles from "react-tsparticles";

const QuizGame = () => {
  const {quiz} = useContext(DataContext);
  const { quizResponse, dispatch} = useContext(ScoreContext);
  const {userData} = useContext(userSignInContext)
  const { topic } = useParams();
  const { questionNo, totalQuestion, score } = quizResponse;
  const [highlight, setHighlight] = useState(false);
  const [disable, setdisable] = useState({
    next: false,
  });
  const navigate = useNavigate();
  // const particlesInit:any = (main:any) => {
  //   console.log(main);

  //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // };
  // const particlesLoaded:any = (container: any) => {
  //   console.log(container);
  // };

  const defaultColors = [
    "bg-gray-light",
    "bg-gray-light",
    "bg-gray-light",
    "bg-gray-light",
  ];
  const [color, setColor] = useState(defaultColors);

  const quizData = quiz.filter((ele: Quizzes) => {
    return ele.topic === topic;
  });

  const questionHandler = (e: any) => {
    setHighlight(false);
    setColor([...defaultColors]);
    if (e.target.name === "next") {
      if (questionNo < totalQuestion ) {
        if (questionNo === totalQuestion - 1) {
          setdisable({
            next: true,
          });
        }
       
        dispatch({ type: "INCREMENT_QUESTION" });
      }
    }
  };

  const optionHandler = async (
    e: any,
    option: Options,
    i: any,
    pts: any,
    options: Options[],
    negativePts: number
  ) => {
    setHighlight(true);
    if (option.isRight === true) {
      setColor((color) => {
        color[i] = "bg-green";
        return [...color];
      });
      dispatch({ type: "CORRECT", payload: pts });
    } else {
      let rightIndex: any;
      options.map((opt, i) => {
        if (opt.isRight === true) rightIndex = i;
        return opt;
      });
      dispatch({ type: "INCORRECT", payload: negativePts });
      setColor((color) => {
        color[i] = "bg-red";
        color[rightIndex] = "bg-green";
        return [...color];
      });
    }
  };

  const AllQues = quizData[0]?.questions;
  
  const { question, negativePts, options, pts } = AllQues[questionNo-1];
  const bg_id = quizData[0].q_id
  return ( 
    <div
      className={`bg-${bg_id} bg-fixed bg-center bg-cover bg-no-repeat h-screen bg-opacity-50"`}
    >
      {/* <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          detect_on:"canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 8,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 200,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1080,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    /> */}
      <h2 className="text-orange font-bold ml-2.5 "> Score : {score}</h2>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="text-white bg-blend-overlay text-xl font-bold bg-orange bg-opacity-50 rounded-xl p-1.5">{question}</div>
        <div className="flex flex-col w-1/2">
          {options.map((option, i) => (
            <>
              <ul>
                <li>
                  <button
                    disabled={highlight}
                    onClick={(e) =>
                      optionHandler(e, option, i, pts, options, negativePts)
                    }
                    className={`text-white p-3 min-w-full mt-3 rounded-md ${color[i]}`}
                  >
                    {option.option}
                  </button>
                </li>
              </ul>
            </>
          ))}
        </div>
        <div className="flex flex-row justify-between w-1/2 items-center">
          <button
            name="next"
            disabled={disable.next}
            onClick={(e) => questionHandler(e)}
            className="btn bg-orange text-white px-4 py-2 font-bold bg disabled:opacity-50 rounded-2xl mt-3 mr-2"
          >
            Next
          </button>
          {questionNo === 5 ? (
            <button
              name="next"
              onClick={() => {
                updateScore(score,topic,userData._id,dispatch)
                navigate("/quizEnd")
              }}
              className="btn bg-orange text-white px-4 py-2 font-bold bg disabled:opacity-50 rounded-2xl mt-3 mr-2"
            >
              Finish
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
