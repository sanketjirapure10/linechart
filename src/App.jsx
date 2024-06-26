import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// line chart 
const data = [
  {
    status: true,
    error: false,
    data: {
      combined: [
        {
          date: "2024-01-01",
          pnl: 292.0,
          cumsum: 292.0,
        },
        {
          date: "2024-01-02",
          pnl: 5547.0,
          cumsum: 5839.0,
        },
        {
          date: "2024-01-03",
          pnl: 2348.0,
          cumsum: 8187.0,
        },
        {
          date: "2024-01-04",
          pnl: 1155.0,
          cumsum: 9342.0,
        },
        {
          date: "2024-01-05",
          pnl: 783.8,
          cumsum: 10125.8,
        },
        {
          date: "2024-01-08",
          pnl: 466.2,
          cumsum: 10592.0,
        },
        {
          date: "2024-01-10",
          pnl: -257.0,
          cumsum: 10335.0,
        },
        {
          date: "2024-01-11",
          pnl: 422.5,
          cumsum: 10757.5,
        },
        {
          date: "2024-01-15",
          pnl: -1208.5,
          cumsum: 9549.0,
        },
        {
          date: "2024-01-16",
          pnl: -2496.4,
          cumsum: 7052.6,
        },
        {
          date: "2024-01-17",
          pnl: 5634.8,
          cumsum: 12687.4,
        },
        {
          date: "2024-01-18",
          pnl: 662.5,
          cumsum: 13349.9,
        },
        {
          date: "2024-01-19",
          pnl: 1496.2,
          cumsum: 14846.1,
        },
        {
          date: "2024-01-20",
          pnl: 0.1,
          cumsum: 14846.1,
        },
        {
          date: "2024-01-23",
          pnl: 1428.0,
          cumsum: 16274.1,
        },
        {
          date: "2024-01-24",
          pnl: 3789.0,
          cumsum: 20063.2,
        },
        {
          date: "2024-01-29",
          pnl: 4187.6,
          cumsum: 24250.8,
        },
        {
          date: "2024-01-30",
          pnl: 925.3,
          cumsum: 25176.0,
        },
        {
          date: "2024-01-31",
          pnl: 2179.3,
          cumsum: 27355.3,
        },
        {
          date: "2024-02-01",
          pnl: -3345.9,
          cumsum: 24009.4,
        },
        {
          date: "2024-02-02",
          pnl: -3300.0,
          cumsum: 20709.4,
        },
        {
          date: "2024-02-05",
          pnl: 1346.8,
          cumsum: 22056.1,
        },
        {
          date: "2024-02-06",
          pnl: 329.8,
          cumsum: 22385.9,
        },
        {
          date: "2024-02-07",
          pnl: 2908.7,
          cumsum: 25294.6,
        },
        {
          date: "2024-02-08",
          pnl: 3007.6,
          cumsum: 28302.2,
        },
        {
          date: "2024-02-12",
          pnl: 3362.0,
          cumsum: 31664.2,
        },
        {
          date: "2024-02-13",
          pnl: 3974.5,
          cumsum: 35638.7,
        },
        {
          date: "2024-02-14",
          pnl: 5062.5,
          cumsum: 40701.2,
        },
        {
          date: "2024-02-15",
          pnl: -0.1,
          cumsum: 40701.1,
        },
        {
          date: "2024-02-16",
          pnl: 1924.3,
          cumsum: 42625.4,
        },
        {
          date: "2024-02-19",
          pnl: 1648.8,
          cumsum: 44274.2,
        },
        {
          date: "2024-02-20",
          pnl: 2775.0,
          cumsum: 47049.2,
        },
        {
          date: "2024-02-21",
          pnl: 1308.2,
          cumsum: 48357.4,
        },
        {
          date: "2024-02-22",
          pnl: -4012.5,
          cumsum: 44344.9,
        },
        {
          date: "2024-02-23",
          pnl: 2118.8,
          cumsum: 46463.7,
        },
        {
          date: "2024-02-26",
          pnl: -2458.8,
          cumsum: 44004.9,
        },
        {
          date: "2024-02-27",
          pnl: -1.0,
          cumsum: 44003.9,
        },
        {
          date: "2024-02-28",
          pnl: 5100.2,
          cumsum: 49104.2,
        },
        {
          date: "2024-02-29",
          pnl: -7352.0,
          cumsum: 41752.2,
        },
        {
          date: "2024-03-04",
          pnl: -132.0,
          cumsum: 41620.2,
        },
        {
          date: "2024-03-05",
          pnl: 647.8,
          cumsum: 42267.9,
        },
        {
          date: "2024-03-06",
          pnl: -3880.8,
          cumsum: 38387.2,
        },
        {
          date: "2024-03-07",
          pnl: -2035.0,
          cumsum: 36352.1,
        },
        {
          date: "2024-03-11",
          pnl: 1668.0,
          cumsum: 38020.1,
        },
        {
          date: "2024-03-12",
          pnl: -7483.5,
          cumsum: 30536.7,
        },
        {
          date: "2024-03-13",
          pnl: 4823.0,
          cumsum: 35359.7,
        },
        {
          date: "2024-03-14",
          pnl: 2375.0,
          cumsum: 37734.7,
        },
      ],
      FINNIFTY_MODSS: [
        {
          date: "2024-01-01",
          pnl: 292.0,
          cumsum: 292.0,
        },
        {
          date: "2024-01-02",
          pnl: 2352.0,
          cumsum: 2644.0,
        },
        {
          date: "2024-01-08",
          pnl: 740.0,
          cumsum: 3384.0,
        },
        {
          date: "2024-01-15",
          pnl: -1666.0,
          cumsum: 1718.0,
        },
        {
          date: "2024-01-16",
          pnl: -754.0,
          cumsum: 964.0,
        },
        {
          date: "2024-01-23",
          pnl: 1428.0,
          cumsum: 2392.0,
        },
        {
          date: "2024-01-29",
          pnl: 2084.0,
          cumsum: 4476.0,
        },
        {
          date: "2024-01-30",
          pnl: 2308.0,
          cumsum: 6784.0,
        },
        {
          date: "2024-02-06",
          pnl: 2168.0,
          cumsum: 8952.0,
        },
        {
          date: "2024-02-12",
          pnl: 3362.0,
          cumsum: 12314.0,
        },
        {
          date: "2024-02-13",
          pnl: 1744.0,
          cumsum: 14058.0,
        },
        {
          date: "2024-02-19",
          pnl: 1096.0,
          cumsum: 15154.0,
        },
        {
          date: "2024-02-26",
          pnl: -40.0,
          cumsum: 15114.0,
        },
        {
          date: "2024-03-04",
          pnl: -132.0,
          cumsum: 14982.0,
        },
        {
          date: "2024-03-05",
          pnl: -694.0,
          cumsum: 14288.0,
        },
        {
          date: "2024-03-11",
          pnl: 1668.0,
          cumsum: 15956.0,
        },
        {
          date: "2024-03-12",
          pnl: -5400.0,
          cumsum: 10556.0,
        },
      ],
      BANKNIFTY_MODSS: [
        {
          date: "2024-01-02",
          pnl: 3195.0,
          cumsum: 3195.0,
        },
        {
          date: "2024-01-03",
          pnl: -739.5,
          cumsum: 2455.5,
        },
        {
          date: "2024-01-10",
          pnl: 2320.5,
          cumsum: 4776.0,
        },
        {
          date: "2024-01-16",
          pnl: -1742.2,
          cumsum: 3033.8,
        },
        {
          date: "2024-01-17",
          pnl: 1689.8,
          cumsum: 4723.5,
        },
        {
          date: "2024-01-24",
          pnl: 1674.0,
          cumsum: 6397.5,
        },
        {
          date: "2024-01-30",
          pnl: -1373.2,
          cumsum: 5024.2,
        },
        {
          date: "2024-01-31",
          pnl: 840.0,
          cumsum: 5864.2,
        },
        {
          date: "2024-02-06",
          pnl: -1838.2,
          cumsum: 4026.0,
        },
        {
          date: "2024-02-07",
          pnl: 1719.8,
          cumsum: 5745.8,
        },
        {
          date: "2024-02-13",
          pnl: 2230.5,
          cumsum: 7976.2,
        },
        {
          date: "2024-02-14",
          pnl: 2242.5,
          cumsum: 10218.8,
        },
        {
          date: "2024-02-15",
          pnl: -0.1,
          cumsum: 10218.7,
        },
        {
          date: "2024-02-16",
          pnl: 0.5,
          cumsum: 10219.2,
        },
        {
          date: "2024-02-19",
          pnl: -43.3,
          cumsum: 10176.0,
        },
        {
          date: "2024-02-20",
          pnl: 2775.0,
          cumsum: 12951.0,
        },
        {
          date: "2024-02-21",
          pnl: -1356.8,
          cumsum: 11594.2,
        },
        {
          date: "2024-02-28",
          pnl: 2607.8,
          cumsum: 14202.0,
        },
        {
          date: "2024-02-29",
          pnl: -2922.0,
          cumsum: 11280.0,
        },
        {
          date: "2024-03-05",
          pnl: 1341.8,
          cumsum: 12621.7,
        },
        {
          date: "2024-03-06",
          pnl: 1746.8,
          cumsum: 14368.5,
        },
        {
          date: "2024-03-12",
          pnl: -2083.5,
          cumsum: 12285.0,
        },
        {
          date: "2024-03-13",
          pnl: 685.5,
          cumsum: 12970.5,
        },
      ],
      NIFTY_MODSS: [
        {
          date: "2024-01-03",
          pnl: 3087.5,
          cumsum: 3087.5,
        },
        {
          date: "2024-01-04",
          pnl: 1155.0,
          cumsum: 4242.5,
        },
        {
          date: "2024-01-10",
          pnl: -2577.5,
          cumsum: 1665.0,
        },
        {
          date: "2024-01-11",
          pnl: 422.5,
          cumsum: 2087.5,
        },
        {
          date: "2024-01-16",
          pnl: -0.1,
          cumsum: 2087.3,
        },
        {
          date: "2024-01-17",
          pnl: 3945.0,
          cumsum: 6032.4,
        },
        {
          date: "2024-01-18",
          pnl: 662.5,
          cumsum: 6694.9,
        },
        {
          date: "2024-01-20",
          pnl: 0.1,
          cumsum: 6694.9,
        },
        {
          date: "2024-01-24",
          pnl: 2115.0,
          cumsum: 8809.9,
        },
        {
          date: "2024-01-29",
          pnl: -0.1,
          cumsum: 8809.8,
        },
        {
          date: "2024-01-30",
          pnl: -9.5,
          cumsum: 8800.3,
        },
        {
          date: "2024-01-31",
          pnl: 1339.3,
          cumsum: 10139.6,
        },
        {
          date: "2024-02-01",
          pnl: -3347.9,
          cumsum: 6791.7,
        },
        {
          date: "2024-02-05",
          pnl: -85.8,
          cumsum: 6705.9,
        },
        {
          date: "2024-02-07",
          pnl: 1189.0,
          cumsum: 7894.9,
        },
        {
          date: "2024-02-08",
          pnl: 3007.6,
          cumsum: 10902.5,
        },
        {
          date: "2024-02-14",
          pnl: 2820.0,
          cumsum: 13722.5,
        },
        {
          date: "2024-02-19",
          pnl: -0.2,
          cumsum: 13722.2,
        },
        {
          date: "2024-02-21",
          pnl: 2665.0,
          cumsum: 16387.2,
        },
        {
          date: "2024-02-22",
          pnl: -4012.5,
          cumsum: 12374.8,
        },
        {
          date: "2024-02-28",
          pnl: 2492.5,
          cumsum: 14867.2,
        },
        {
          date: "2024-02-29",
          pnl: -4430.0,
          cumsum: 10437.2,
        },
        {
          date: "2024-03-06",
          pnl: -5627.5,
          cumsum: 4809.8,
        },
        {
          date: "2024-03-07",
          pnl: -2035.0,
          cumsum: 2774.7,
        },
        {
          date: "2024-03-13",
          pnl: 4137.5,
          cumsum: 6912.2,
        },
        {
          date: "2024-03-14",
          pnl: 2375.0,
          cumsum: 9287.2,
        },
      ],
      MIDCPNIFTY_MODSS: [
        {
          date: "2024-01-05",
          pnl: 783.8,
          cumsum: 783.8,
        },
        {
          date: "2024-01-08",
          pnl: -273.8,
          cumsum: 510.0,
        },
        {
          date: "2024-01-15",
          pnl: 457.5,
          cumsum: 967.5,
        },
        {
          date: "2024-01-19",
          pnl: 1496.2,
          cumsum: 2463.8,
        },
        {
          date: "2024-01-29",
          pnl: 2103.8,
          cumsum: 4567.5,
        },
        {
          date: "2024-02-02",
          pnl: -3300.0,
          cumsum: 1267.5,
        },
        {
          date: "2024-02-05",
          pnl: 1432.5,
          cumsum: 2700.0,
        },
        {
          date: "2024-02-16",
          pnl: 1923.8,
          cumsum: 4623.8,
        },
        {
          date: "2024-02-19",
          pnl: 596.2,
          cumsum: 5220.0,
        },
        {
          date: "2024-02-23",
          pnl: 2118.8,
          cumsum: 7338.8,
        },
        {
          date: "2024-02-26",
          pnl: -2418.8,
          cumsum: 4920.0,
        },
      ],
      testStrategy: [
        {
          date: "2024-02-01",
          pnl: 2.0,
          cumsum: 2.0,
        },
        {
          date: "2024-02-27",
          pnl: -1.0,
          cumsum: 1.0,
        },
      ],
    },
    message: "Data received",
  },
];

const processData = (data) => {
  let results = {};

  for (const key in data[0].data) {
    const dataset = data[0].data[key];
    const flattenedData = dataset.map((entry) => ({ ...entry, dataset: key }));
    results = { ...results, [key]: flattenedData };
  }

  return results;
};
const App = () => {
  const processedData = processData(data);
  const {
    combined,
    FINNIFTY_MODSS,
    BANKNIFTY_MODSS,
    NIFTY_MODSS,
    MIDCPNIFTY_MODSS,
    testStrategy,
  } = processedData;

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "lightgray",
          borderRadius: "2px",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <div
          className="container"
          style={{ backgroundColor: "white", borderRadius: "8px" }}
        >
          <div className="row">
            <div className="col-md-8 ">
              <h1>Drowdown Periods</h1>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  width={800}
                  height={400}
                  data={combined}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="date" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="cumsum" stroke="#8884d8" />
                </LineChart>
                <div
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "52%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "30px",
                    fontWeight: "normal",
                    color: "lightgray",
                    pointerEvents: "none",
                  }}
                >
                  MaticAlgos
                </div>
              </ResponsiveContainer>
            </div>
            <div className="col-md-4 ">
              <h1>Table Data</h1>
              <DataTable
                combined={combined}
                FINNIFTY_MODSS={FINNIFTY_MODSS}
                BANKNIFTY_MODSS={BANKNIFTY_MODSS}
                NIFTY_MODSS={NIFTY_MODSS}
                MIDCPNIFTY_MODSS={MIDCPNIFTY_MODSS}
                testStrategy={testStrategy}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DataTable = ({
  combined,
  FINNIFTY_MODSS,
  BANKNIFTY_MODSS,
  NIFTY_MODSS,
  MIDCPNIFTY_MODSS,
  testStrategy,
}) => {
  const datasets = {
    combined,
    FINNIFTY_MODSS,
    BANKNIFTY_MODSS,
    NIFTY_MODSS,
    MIDCPNIFTY_MODSS,
    testStrategy,
  };

  const calculateDaysCount = (dataset) => {
    const dates = dataset.map((entry) => entry.date);
    const uniqueDates = [...new Set(dates)];
    return uniqueDates.length;
  };

  const calculateStartDate = (dataset) => {
    return dataset.length > 0 ? dataset[0].date : "-";
  };

  const calculateEndDate = (dataset) => {
    return dataset.length > 0 ? dataset[dataset.length - 1].date : "-";
  };

  const calculateCumulativeSumCount = (dataset) => {
    return dataset.length > 0 ? -dataset[dataset.length - 1].cumsum : "-";
  };

  return (
    <table style={{ borderCollapse: "collapse", borderRadius: "20px" }}>
      <thead>
        <tr style={{ backgroundColor: "lightgray" }}>
          <th style={{ border: "1px solid black" }}>Peroid</th>
          <th style={{ border: "1px solid black" }}>Max DD</th>
          <th style={{ border: "1px solid black" }}>Days</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(datasets).map((key) => (
          <tr
            key={key}
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            <td style={{ border: "1px solid black " }}>
              {calculateStartDate(datasets[key])} to{" "}
              {calculateEndDate(datasets[key])}
            </td>
            <td style={{ border: "1px solid black", color: "red" }}>
              {calculateCumulativeSumCount(datasets[key]).toFixed(2)}
            </td>
            <td style={{ border: "1px solid black", borderRadius: "20PX" }}>
              {calculateDaysCount(datasets[key])}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="footercss">
        <tr style={{ border: "1px solid black" }}>
          <td
            colSpan="5"
            style={{ textAlign: "center", border: "1px solid black" }}
          >
            Table Footer
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default App;
