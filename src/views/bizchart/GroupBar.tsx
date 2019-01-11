import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from "bizcharts";
// @ts-ignore
import DataSet from "@antv/data-set";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin:"auto",
      width: "100%",
      border: "1px rgba(200, 226, 250, 1) solid",
      // textAlign: "center"
    },
    pStyle: {
      color: "rgb(60,142,217)",
      marginLeft: "2vw"
    }
  });

interface Iprops extends WithStyles<typeof styles> {
  titleChart?: string;
  chartData?:any[]
}

class GroupBar extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;

    const ds = new DataSet();
    const dv = ds.createView().source(this.props.chartData);
    dv.transform({
      type: "fold",
      fields: ["狱内发病数", "新投犯带病入监数", "本季发病数"],// x展开字段集
      key: "type", // key字段
      value: "value" // value字段
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
          <Legend />
          <Coord transpose={true} scale={[1, -1]} />
          <Axis
            name="label"
            label={{
              offset: 12
            }}
          />
          <Axis name="value" position={"right"} />
          <Tooltip />
          <Geom
            type="interval"
            position="label*value"
            color={"type"}
            adjust={[
              {
                type: "dodge",
                marginRatio: 0 // 数值范围为 0 至 1，用于调整分组中各个柱子的间距
              }
            ]}
          />
        </Chart>
      </div>
    );
  }
}

export default withStyles(styles)(GroupBar);
