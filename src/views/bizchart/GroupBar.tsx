import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from "bizcharts";
// @ts-ignore
import DataSet from "@antv/data-set";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "40vw",
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
}

class GroupBar extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    const data = [
      {
        label: "精神病",
        狱内发病数: 2800,
        新投犯带病入监数: 2260,
        本季发病数: 2060
      },
      {
        label: "恶性肿瘤",
        狱内发病数: 1800,
        新投犯带病入监数: 1300,
        本季发病数: 960
      },
      {
        label: "糖尿病",
        狱内发病数: 950,
        新投犯带病入监数: 900,
        本季发病数: 2160
      },
      {
        label: "脑卒中",
        狱内发病数: 500,
        新投犯带病入监数: 390,
        本季发病数: 1060
      },
      {
        label: "冠心病",
        狱内发病数: 170,
        新投犯带病入监数: 100,
        本季发病数: 1660
      },
      {
        label: "高血压",
        狱内发病数: 170,
        新投犯带病入监数: 100,
        本季发病数: 160
      }
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
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
