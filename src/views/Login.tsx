import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {}
  });

interface Iprops extends WithStyles<typeof styles> {}

/**
 * 描述：
 *  登录页面
 * @author 12859
 * @date 2018/12/5-11:14
 */
class Login extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    return <div className={classes.root}>Login</div>;
  }
}

export default withStyles(styles)(Login);
