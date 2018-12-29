import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { WithStyles } from "@material-ui/core/styles/withStyles";
import { Breadcrumb } from "antd";
import * as React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

const styles = (theme: Theme) =>
    createStyles<"root">({
        root: {
            background: "#f0f2f5",
            height: "40px",
            padding: 10
        }
    });

interface Iprops extends RouteComponentProps<any>, WithStyles<typeof styles> {
    breadcrumbNameMap: object;
}
interface Istate {
    AppPathSnippets: any[];
    breadcrumbItems: any;
    location: any;
}
class MyBreadCrumb extends React.Component<Iprops, Istate> {
    public componentWillMount() {
        this.getPath();
    }

    public componentWillReceiveProps() {
        this.getPath();
    }
    public getPath = () => {
        //
        const pathSnippets = this.props.history.location.pathname
            .split("/")
            .filter(i => i);
        this.setState({
            AppPathSnippets: pathSnippets
        });
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
            if (this.props.breadcrumbNameMap[url]) {
                return (
                    <Breadcrumb.Item key={url}>
                        <Link to={url} key={url + index}>
                            {this.props.breadcrumbNameMap[url]}
                        </Link>
                    </Breadcrumb.Item>
                );
            } else {
                return <Breadcrumb.Item key={index} />;
            }
        });
        this.setState({
            breadcrumbItems: [
                <Breadcrumb.Item key="home">
                    当前位置：
                    <Link to="/">主页</Link>
                </Breadcrumb.Item>
            ].concat(extraBreadcrumbItems)
        });
    };
    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Breadcrumb>{this.state.breadcrumbItems}</Breadcrumb>
            </div>
        );
    }
}

export default withStyles(styles)(withRouter(MyBreadCrumb));