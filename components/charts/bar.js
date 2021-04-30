import { useState } from "react";
import { db } from "../../firebaseConfig";
import { Bar } from "react-chartjs-2";

export default function BarGraph(props) {
  const [data, setData] = useState({
    val: [],
    label: [],
    color: [],
  });

  db.collection("1A Data")
    .doc(props.datatype)
    .onSnapshot(
      async (snapshot) => {
        let data = {
          val: [],
          label: [],
          color: [],
          title: "",
          xAxes: "",
          yAxes: "",
        };
        await snapshot.data().x.values.forEach((element) => {
          data.val.push(element.value);
          data.label.push(element.index);
          data.color.push(element.color);
        });
        data.title = snapshot.data().title;
        data.xAxis = snapshot.data().x.label;
        data.yAxis = snapshot.data().y.label;
        setData(data);
      },
      (err) => {
        console.log("Error fetching firebase snapshot! " + err);
      }
    );

    if (data.color[0] === undefined){ 
      data.color = "rgb(255, 99, 132)"
    }

  return (
    <div>
      
      <div className="chart">
        <Bar
          data={{
            labels: data.label,
            datasets: [
              {
                label: "# of Students",
                data: data.val,
                backgroundColor: data.color,
                borderColor: data.color,
                hoverBackgroundColor: "#ffffff",
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            legend: { display: false },
            title: {
              display: true,
              text: data.title,
              fontColor: "#ffffff",
              fontSize: 15,
            },
            scales: {
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: data.xAxis,
                    fontColor: "#ffffff",
                    fontSize: 15,
                  },
                  ticks: {
                    fontColor: "#ffffff",
                  },
                },
              ],
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: data.yAxis,
                    fontColor: "#ffffff",
                    fontSize: 15,
                  },
                  ticks: {
                    beginAtZero: true,
                    fontColor: "#ffffff",
                  },
                },
              ],
            },
          }}
          height={props.height ? props.height : "100%"}
          width={props.width ? props.width : "100%"}
        />
      </div>
    </div>
  );
}
