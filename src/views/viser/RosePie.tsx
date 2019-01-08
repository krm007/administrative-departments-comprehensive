import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Chart, Coord, registerShape, Tooltip, Pie, Legend } from "viser-react";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      // border: "1px red solid",
      width: "40vw",
      height: 500,
      background: "rgba(245, 250, 255, 1)",
      border: "1px rgba(200, 226, 250, 1) solid"
    },
    pStyle: {
      color: "rgb(60,142,217)",
      marginLeft: "2vw"
    }
  });

interface Iprops extends WithStyles<typeof styles> {
  titleChart?: string;
}

const data = [
  {
    type: "剖宫产",
    value: 40
  },
  {
    type: "乳腺手术",
    value: 15
  },
  {
    type: "阴道分娩",
    value: 25
  },
  {
    type: "其他",
    value: 20
  }
];

let max = 0;
data.forEach(obj => {
  if (obj.value > max) {
    max = obj.value;
  }
});
// 自定义 other 的图形，增加两条线
registerShape("interval", "sliceShape", {
  draw: function draw(cfg: any, container: any) {
    const points = cfg.points;
    const origin = cfg.origin._origin;
    const percent = origin.value / max;
    const xWidth = points[2].x - points[1].x;
    const width = xWidth * percent;
    let path = [];
    path.push(["M", points[0].x, points[0].y]);
    path.push(["L", points[1].x, points[1].y]);
    path.push(["L", points[0].x + width, points[2].y]);
    path.push(["L", points[0].x + width, points[3].y]);
    path.push("Z");
    path = this.parsePath(path);
    return container.addShape("path", {
      attrs: {
        fill: cfg.color,
        path: `${path}`
      }
    });
  }
});

class RosePie extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <br />
        <p className={classes.pStyle}>{this.props.titleChart}</p>
        <Chart forceFit={true} height={300} data={data} padding={[5]}>
          <Tooltip showTitle={false} />
          <Legend dataKey="type" show={false} />
          <Coord type="theta" radius={0.8} />
          <Pie position="value" color="type" shape="sliceShape" label="type" />
        </Chart>
      </div>
    );
  }
}

export default withStyles(styles)(RosePie);
