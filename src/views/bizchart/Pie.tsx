import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from "bizcharts";
// @ts-ignore
import DataSet from "@antv/data-set";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      border: "1px rgba(200, 226, 250, 1) solid",
      margin:"auto"
    },
    pStyle: {
      color: "rgb(60,142,217)",
      marginLeft: "2vw"
    }
  });

interface Iprops extends WithStyles<typeof styles> {
  titleChart?: string;
  chartData?:any[];

}

class Pie extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    const { DataView } = DataSet;
    const dv = new DataView();
    dv.source(this.props.chartData).transform({
      type: "percent",
      field: "count",
      dimension: "item",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: (val: any) => {
          val = val * 100 + "%";
          return val;
        }
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
          padding={[60, 60, 60, 30]}
          forceFit={true}
          background={{
            fill: "rgb(245,250,255)",
            fillOpacity: 0.6,
            stroke: "rgb(219,236,252)"
          }}
        >
          <Coord type="theta" radius={0.75} />
          <Axis name="percent" />
          <Legend position="right" offsetY={-400 / 2 + 250} offsetX={-100} />
          <Tooltip
            showTitle={false}
            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
          />
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = (percent * 100).toFixed(2) + "%";
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          >
            <Label
              content={[
                "item*percent",
                (item, percent) => {
                  percent = (percent * 100).toFixed(2) + "%";
                  return item + ":" + percent;
                }
              ]}
            />
          </Geom>
        </Chart>
      </div>
    );
  }
}

export default withStyles(styles)(Pie);
