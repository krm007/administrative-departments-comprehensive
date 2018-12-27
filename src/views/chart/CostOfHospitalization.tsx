import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Chart, Tooltip, Axis, Bar } from "viser-react";
import { IScale } from "viser/es/typed/IScale";

const styles = (theme: Theme) =>
  createStyles({
    root: {
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

class CostOfHospitalization extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    const data = [
      { disease: "急性心肌梗死", value: 8 },
      { disease: "充血性心力衰竭", value: 5 },
      { disease: "脑出血和脑梗死", value: 6 },
      { disease: "创伤性颅脑损伤", value: 12 },
      { disease: "糖尿病视网膜病", value: 8 },
      { disease: "扩张性心肌病", value: 14 },
      { disease: "慢性溃疡性结肠", value: 5 },
      { disease: "老年性骨质疏松", value: 9 },
      { disease: "脊柱骨折后遗症", value: 8 },
      { disease: "椎基底动脉综合", value: 10 }
    ];
    const scale: IScale = {
      dataKey: "value",
      tickInterval: 3
    };

    return (
      <div className={classes.root}>
        <br />
        <p className={classes.pStyle}>{this.props.titleChart}</p>
        <Chart
          forceFit={true}
          height={430}
          // width={650}
          padding={[60]}
          data={data}
          scale={scale}
        >
          <Tooltip showTitle={false} />
          <Axis
            dataKey="value"
            title={{ offset: 40, text: "人均住院费用(万元)" }}
          />
          <Bar position="disease*value" color={"disease"} />
        </Chart>
      </div>
    );
  }
}

export default withStyles(styles)(CostOfHospitalization);
