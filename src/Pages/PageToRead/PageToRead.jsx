import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";



const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
  {
    name: "Book 1",
    uv: 180,
  },
  {
    name: "Book 2",
    uv: 328,
  },
  {
    name: "Book 3",
    uv: 281,
  },
  {
    name: "Book  4",
    uv: 224,
  },
  {
    name: "Book 5",
    uv: 224,
  },
  {
    name: "Book  6",
    uv: 224,
  },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  return (
    <div className=" w-[1260px] my-20  mx-auto flex justify-center">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}

App.demoUrl = "https://codesandbox.io/s/bar-chart-with-customized-shape-dusth";
