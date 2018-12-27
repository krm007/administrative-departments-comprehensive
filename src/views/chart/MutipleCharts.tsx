import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import CostOfHospitalization from "./CostOfHospitalization";
import DischargePatientDisease from "./DischargePatientDisease";
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;
const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {
        width:"40vw",
    }
  });
interface Istate{
    tabPosition?:any
}
interface Iprops extends WithStyles<typeof styles> {

}

class MutipleCharts extends React.Component<Iprops,Istate> {
    constructor(props:Iprops){
        super(props);
        this.state={
            tabPosition:"top"
        }
    }
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
          <Tabs type={"card"}>
              <TabPane tab="门诊" key="1"><DischargePatientDisease titleChart={"门诊-病人医药费用构成"} /></TabPane>
              <TabPane tab="住院" key="2"><DischargePatientDisease titleChart={"住院-医药费用构成22"} /></TabPane>
          </Tabs>
        <br />
        <CostOfHospitalization titleChart={"病种住院费用TOP10"} />
      </div>
    );
  }
}

export default withStyles(styles)(MutipleCharts);
