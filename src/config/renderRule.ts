/**
 * 设置带有合计的单元格
 * @param value
 * @param index
 * @param col
 */
export const renderSumTitle = (value:any,index:any,col?:any) => {
    if(col){
        return {
            children: value,
            props: {
                colSpan: col,
            },
        };
    }
    return `${ index + 1}`
};
/**
 * 设置可能会被列合并的单元格
 * @param value
 * @param row
 * @param index
 */
export const renderContent = (value:any,row:any,index:any) =>{
    const obj = {
        children: value,
        props: {
            colSpan:1
        },
    };
    if (value === null || value === "") {
        obj.props.colSpan = 0;
    }
    return obj;
};
/**
 * 设置会被行合并的单元格
 * @param value
 * @param row
 */
export const renderRowConbine = (value:any,row:any) => {
    const obj = {
        children: value,
        props: {
            rowSpan: ""
        },
    };
    // if (index === 0) {
    obj.props.rowSpan = row.num;
    // }
    return obj;
};