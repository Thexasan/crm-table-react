import { InputNumber } from "antd";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [lest, setLest] = useState([
    {
      id: 1,
      name: "Hasan",
      dayBook: [
        {
          id: 1,
          dayType: 1,
          date: "2023-01-05",
          att: false,
          score: 0,
        },
        {
          id: 2,
          dayType: 1,
          date: "2023-01-06",
          att: false,
          score: 0,
        },
        {
          id: 3,
          dayType: 1,
          date: "2023-01-07",
          att: false,
          score: 0,
        },
        {
          id: 4,
          dayType: 1,
          date: "2023-01-08",
          att: false,
          score: 0,
        },
        {
          id: 5,
          dayType: 1,
          date: "2023-01-09",
          att: false,
          score: 0,
        },
        {
          id: 6,
          dayType: 2,
          date: "2023-01-10",
          att: false,
          score: 0,
        },
      ],
    },
    {
      id: 2,
      name: "Jamol",
      dayBook: [
        {
          id: 1,
          dayType: 1,
          date: "2023-01-05",
          att: false,
          score: 0,
        },
        {
          id: 2,
          dayType: 1,
          date: "2023-01-06",
          att: false,
          score: 0,
        },
        {
          id: 3,
          dayType: 1,
          date: "2023-01-07",
          att: false,
          score: 0,
        },
        {
          id: 4,
          dayType: 1,
          date: "2023-01-08",
          att: false,
          score: 0,
        },
        {
          id: 5,
          dayType: 1,
          date: "2023-01-09",
          att: false,
          score: 0,
        },
        {
          id: 6,
          dayType: 2,
          date: "2023-01-10",
          att: false,
          score: 0,
        },
      ],
    },
    {
      id: 3,
      name: "Rahim",
      dayBook: [
        {
          id: 1,
          dayType: 1,
          date: "2023-01-05",
          att: false,
          score: 0,
        },
        {
          id: 2,
          dayType: 1,
          date: "2023-01-06",
          att: false,
          score: 0,
        },
        {
          id: 3,
          dayType: 1,
          date: "2023-01-07",
          att: false,
          score: 0,
        },
        {
          id: 4,
          dayType: 1,
          date: "2023-01-08",
          att: false,
          score: 0,
        },
        {
          id: 5,
          dayType: 1,
          date: "2023-01-09",
          att: false,
          score: 0,
        },
        {
          id: 6,
          dayType: 2,
          date: "2023-01-10",
          att: false,
          score: 0,
        },
      ],
    },
  ]);

  const getBgClass = (val) => {
    if (val >= 90 && val <= 100) {
      return "bg-green-500";
    } else if (val >= 80 && val <= 89) {
      return "bg-orange-500";
    } else {
      return "bg-red-500";
    }
  };

  const handleScoreChange = (userId, dayId, score) => {
    const update = [...lest];
    let user = update.find((user) => user.id === userId);
    user.dayBook = user.dayBook.map((day) => {
      if (day.id === dayId) {
        day.score = score;
      }
      return day;
    });
    setLest(update);
  };
  const handleAttChange = (userId, dayId, att) => {
    const update = [...lest];
    let user = update.find((user) => user.id === userId);
    user.dayBook = user.dayBook.map((day) => {
      if (day.id === dayId) {
        day.att = att;
      }
      return day;
    });
    setLest(update);
  };

  return (
    <>
      <table className="w-[100%]  mt-[100px]">
        <thead>
          {lest.length > 0 && (
            <tr className="flex justify-center gap-1  items-start grid-cols-7">
              <th className="bg-[#d8d8d8d8]  rounded-[20px_0px_0px_0px] px-16 py-[27px]">
                React 6
              </th>
              {lest[0].dayBook.map((day) => {
                if (day.dayType === 2) {
                  return (
                    <th
                      key={day.id}
                      className="flex items-center col-span-1 gap-[5px] flex-col"
                    >
                      <h1 className=" px-16 py-2 rounded-[0px_20px_0px_0px] bg-[#d8d8d8d8]">
                        {" "}
                        End of week
                      </h1>
                      <div className="flex items-center gap-[5px] ">
                        <div className="bg-[#d8d8d8d8]  text-[16px] font-[400] px-4 py-1">
                          Att
                        </div>
                        <div className="bg-[#d8d8d8d8]  text-[16px] font-[400] px-6 py-1">
                          Exam
                        </div>
                        <div className="bg-[#d8d8d8d8]  text-[16px] font-[400] px-4 py-1">
                          Sum
                        </div>
                      </div>
                    </th>
                  );
                }
                return (
                  <th
                    className="flex items-center gap-[5px] flex-col"
                    key={day.id}
                  >
                    <h1 className="px-16 py-2 bg-[#d8d8d8d8]">
                      {day.date.split("-").reverse().join(".")}
                    </h1>
                    <div className="flex gap-[5px] ">
                      <div className="bg-[#d8d8d8d8]  text-[16px] font-[400] px-8 py-1">
                        Att
                      </div>
                      <div className="bg-[#d8d8d8d8]  text-[16px] font-[400]  px-8 py-1">
                        Score
                      </div>
                    </div>
                  </th>
                );
              })}
            </tr>
          )}
        </thead>
        <tbody>
          {lest.map((elem) => {
            let val = elem.dayBook.reduce((acc, curr) => {
              return acc + (curr.dayType === 2 ? 0 : curr.att) + curr.score;
            }, 0);

            return (
              <tr className="grid my-5 grid-cols-7 items-start" key={elem.id}>
                <td className="text-center">
                  {elem.id}. {elem.name}
                </td>
                {elem.dayBook.map((day) => {
                  if (day.dayType === 2) {
                    return (
                      <td
                        key={day.id}
                        className="text-center items-center flex justify-start gap-10"
                      >
                        <input type="checkbox" />

                        <InputNumber
                          defaultValue={0}
                          style={{ width: "25%" }}
                          onChange={(val) => {
                            handleScoreChange(elem.id, day.id, val);
                          }}
                        />
                        <div
                          className={` py-1 px-3 rounded-[20%] text-white ${getBgClass(
                            val
                          )}`}
                        >
                          {val}
                        </div>
                      </td>
                    );
                  }
                  return (
                    <td
                      className="text-center flex justify-around"
                      key={day.id}
                    >
                      <input
                        type="checkbox"
                        checked={day.att}
                        onChange={(e) =>
                          handleAttChange(elem.id, day.id, e.target.checked)
                        }
                      />
                      <select
                        value={day.score}
                        onChange={(e) =>
                          handleScoreChange(
                            elem.id,
                            day.id,
                            parseInt(e.target.value)
                          )
                        }
                        className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default App;
