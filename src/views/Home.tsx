import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import Background_1 from "../images/index/01.png";
import Background_2 from "../images/index/02.png";
import Background_3 from "../images/index/03.png";
import Background_4 from "../images/index/04.png";
import Background_5 from "../images/index/05.png";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "98%",
      marginTop:"20px",
      margin: "auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
      // border: "1px red solid"
    },
    smallDiv: {
      marginTop: "10px",
      width: "31%",
      height: "250px",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      // border: "1px blue solid"
    }
  });

interface Iprops extends WithStyles<typeof styles> {}

/**
 * 描述：
 *  首页展示内容
 * @author 12859
 * @date 2018/12/5-17:26
 */
class Home extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div
          className={classes.smallDiv}
          style={{ backgroundImage: `url(${Background_1})` }}
        >
          {}
        </div>
        <div
          className={classes.smallDiv}
          style={{ backgroundImage: `url(${Background_2})` }}
        >
          {}
        </div>
        <div
          className={classes.smallDiv}
          style={{ backgroundImage: `url(${Background_3})` }}
        >
          {}
        </div>
        <div
          className={classes.smallDiv}
          style={{ backgroundImage: `url(${Background_4})` }}
        >
          {}
        </div>
        <div
          className={classes.smallDiv}
          style={{ backgroundImage: `url(${Background_5})` }}
        >
          {}
        </div>
        <div className={classes.smallDiv}>{}</div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
