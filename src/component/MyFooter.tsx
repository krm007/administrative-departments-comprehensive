import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import { Layout } from "antd";

const styles = (theme: Theme) =>
  createStyles<"root">({
    root: {
      textAlign: "center"
    }
  });

interface Iprops extends WithStyles<typeof styles> {}

/**
 * 描述：
 *  底部信息
 * @author 12859
 * @date 2018/12/5-11:02
 */
class MyFooter extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    return (
      <Layout.Footer className={classes.root}>
        技术支持：亿阳信通股份有限公司
      </Layout.Footer>
    );
  }
}

export default withStyles(styles)(MyFooter);
