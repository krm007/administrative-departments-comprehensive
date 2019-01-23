/**
 * 将url转换成路径list
 * @param url
 * @returns {string[]}
 */
export function urlToList(url) {
    const urllist = url.split('/').filter(i=>i);
    return urllist.map((urlItem, index) =>`/${urllist.slice(0,index+1).join('/')}`)
}

/**
 * 格式化行合并数据
 * @param value
 * @param name
 * @returns {*}
 * @constructor
 */
export function FormatData(value, name) {
    const objs = {};
    let k;
    const arr1 = [];
    // 统计每个重复字段出现的次数
    for (let i = 0, len = value.length; i < len; i++) {
        k = value[i][name];
        if (objs[k]) {
            objs[k]++;
        }
        else {
            objs[k] = 1;
        }
    }
    // 将出现相同字段的次数记录，与首次出现位置对应
    // objs[o]记录了相同字段重复出现的总次数，拼装成与元数据对应的位置以在columns备用
    // eg:[3,0,0,4,0,0,0,3,0,0,3,0,0]
    for (let o of Object.keys(objs)) {
        for (let i = 0; i < objs[o]; i++) {
            if (i === 0) {
                arr1.push(objs[o])
            } else {
                arr1.push(0)
            }
        }
    }
    // 将记录了需要重复的数组元素追加到原数据中
    arr1.forEach((r, index) => {
        // @ts-ignore
        value[index].num = r;
        // @ts-ignore
        value[index].key = index
    });
    return value
}