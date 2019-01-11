import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts";
// @ts-ignore
import DataSet from "@antv/data-set";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
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
  chartData?:any[];
  barXAxis?:any[]
}

class GroupBar extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;

    const ds = new DataSet();
    const dv = ds.createView().source(this.props.chartData);
    dv.transform({
      type: "fold",
      // fields: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug."], // x展开字段集
      fields:this.props.barXAxis,
      key: "xAxis", // key字段
      value: "yAxis" // value字段
    });
    return (
      <div className={classes.root}>
        <br />
        <p className={classes.pStyle}>{this.props.titleChart}</p>
        <Chart
          height={400}
          data={dv}
          forceFit={true}
          background={{ fill: "rgb(245,250,255)", fillOpacity: 0.6 }}
        >
          <Axis name="xAxis" />
          <Axis name="yAxis" />
          <Legend />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="interval"
            position="xAxis*yAxis"
            color={"name"}
            adjust={[
              {
                type: "dodge",
                marginRatio: 1 / 32
              }
            ]}
          />
        </Chart>
      </div>
    );
  }
}

export default withStyles(styles)(GroupBar);
