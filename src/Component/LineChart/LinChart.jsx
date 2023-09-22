import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LinChart = () => {
  const mathMark = [
    {
      "name": "Student 1",
      "math_mark": 85,
      "physics_mark": 90,
      "chemistry_mark": 78
    },
    {
      "name": "Student 2",
      "math_mark": 78,
      "physics_mark": 85,
      "chemistry_mark": 92
    },
    {
      "name": "Student 3",
      "math_mark": 92,
      "physics_mark": 88,
      "chemistry_mark": 75
    },
    {
      "name": "Student 4",
      "math_mark": 68,
      "physics_mark": 70,
      "chemistry_mark": 65
    },
    {
      "name": "Student 5",
      "math_mark": 75,
      "physics_mark": 82,
      "chemistry_mark": 70
    },
    {
      "name": "Student 6",
      "math_mark": 89,
      "physics_mark": 93,
      "chemistry_mark": 85
    },
    {
      "name": "Student 7",
      "math_mark": 95,
      "physics_mark": 96,
      "chemistry_mark": 90
    },
    {
      "name": "Student 8",
      "math_mark": 72,
      "physics_mark": 78,
      "chemistry_mark": 72
    },
    {
      "name": "Student 9",
      "math_mark": 88,
      "physics_mark": 90,
      "chemistry_mark": 86
    },
    {
      "name": "Student 10",
      "math_mark": 80,
      "physics_mark": 85,
      "chemistry_mark": 75
    }
  ];





  return (
    <div>
      <LChart width={1000} height={500} data={mathMark}>

        <XAxis dataKey="name" />
        <YAxis dataKey='math_mark'></YAxis>
        <Line stroke='red' dataKey="math_mark"></Line>
        <Line stroke='blue' dataKey='physics_mark'> </Line>
        <Line stroke='black' dataKey={'chemistry_mark'}   ></Line>
      </LChart>

    </div>
  );
};

export default LinChart;