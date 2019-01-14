import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import * as React from "react";
import BreadCrumb from "./MyBreadCrumb";
import { renderRoutes, RouteConfig } from "react-router-config";
import { BackTop, Layout } from "antd";


const styles = (theme: Theme) =>
  createStyles<"root" | "content">({
    root: {},
    content: {
      background: "#fff",
      margin: 14,
      minHeight: "79vh",
      overflowY: "auto",
      borderRadius: 10
    }
  });

interface Iprops extends WithStyles<typeof styles>, RouteConfig {
  breadcrumbNameMap: object;
  routerDom?: () => React.ReactNode;
}

/**
 * 描述：
 *  中间内容
 * @author 12859
 * @date 2018/12/5-11:02
 */
class MyContent extends React.Component<Iprops> {
  public render() {
    const { classes } = this.props;
    return (
      <Layout.Content className={classes.root}>
        <BreadCrumb breadcrumbNameMap={this.props.breadcrumbNameMap} />
        <BackTop />
        <div className={classes.content}>
          { renderRoutes(this.props.routes)}
            {/*<Switch>*/}
                {/*<Route<RouteProps>*/}
                    {/*exact={true}*/}
                    {/*path={"/mixtable"}*/}
                    {/*component={}*/}
                {/*/>*/}
            {/*</Switch>*/}
        </div>
      </Layout.Content>
    );
  }
}

export default withStyles(styles)(MyContent);
