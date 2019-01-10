import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
// @ts-ignore
import DataSet from "@antv/data-set";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "38vw",
      border: "1px rgba(200, 226, 250, 1) solid"
      // textAlign: "center"
    },
    pStyle: {
      color: "rgb(60,142,217)",
      marginLeft: "2vw"
    }
  });

interface Iprops extends WithStyles<typeof styles> {
  titleChart?: string;
}

class Line extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    const data = [
      {
        item: "2014",
        one: 7,
        two: 3,
        three: 5
      },
      {
        item: "2015",
        one: 6,
        two: 4,
        three: 5
      },
      {
        item: "2016",
        one: 9,
        two: 5,
        three: 5
      },
      {
        item: "2017",
        one: 14,
        two: 8,
        three: 5
      },
      {
        item: "2018",
        one: 18,
        two: 11,
        three: 5
      }
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["one", "two", "three"], // x展开字段集
      key: "year", // key字段
      value: "temperature" // value字段
    });
    const cols = {
      item: {
        range: [0, 1]
      }
    };
    return (
      <div className={classes.root}>
        <br />
        <p className={classes.pStyle}>{this.props.titleChart}</p>
        <Chart
          height={400}
          data={dv}
          scale={cols}
          forceFit={true}
          background={{ fill: "rgb(245,250,255)", fillOpacity: 0.6 }}
        >
          <Legend />
          <Axis name="item" />
          <Axis
            name="temperature"
            label={{
              formatter: val => `${val}`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="item*temperature"
            size={2}
            color={"year"}
            shape={"smooth"}
          />
          <Geom
            type="point"
            position="item*temperature"
            size={4}
            shape={"circle"}
            color={"year"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    );
  }
}

export default withStyles(styles)(Line);
