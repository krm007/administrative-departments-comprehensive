import {BocoMixtable} from "../typings/CommonData";

const MixTableDataConfig: Map<string, BocoMixtable[]> = new Map<string, BocoMixtable[]>([
        [
            "StatisticalMonitor",
            [
                {
                    kind: "医疗效率",
                    name: "出院病人占用总床日数（床日)",
                    explain: "报告期内所有出院人数的住院床日之总和。包括正常分娩、未产出院、住院经检查无病出院、未治出院及健康人进行人工流产或绝育手术后正常出院者的住院床日数。（累加指标）",
                    sign: "cybrzyzcrs"
                }, {
                kind: "医疗效率",
                name: "平均住院日（日)",
                explain: "报告期内每一出院者平均住院时间的长短，是一个评价医疗效益和效率、医疗质量和技术水平的比较硬性的综合指标。等于“出院者占用总床日数”与“出院人数”之比",
                sign: "pjzyr"
            }, {
                kind: "医疗效率",
                name: "病床使用率（%）",
                explain: "报告期末反映机构每天使用床位与实有床位的比率，即实际占用的总床日数与实际开放的总床日数之比",
                sign: "bcsyl"
            }, {
                kind: "医疗服务",
                name: "总诊疗人次数（人次）",
                explain: "报告期末某地区所有诊疗活动的总人次，包括医疗卫生机构的门诊、急诊、出诊、单项健康检查、健康咨询指导人次。",
                sign: "zzlrcs"
            }, {
                kind: "医疗服务",
                name: "出院人数（人次）",
                explain: "报告期未所有住院后出院的人数，包括治愈、好转、未愈、死亡及其他人数",
                sign: "cyrs"
            }, {
                kind: "医疗服务",
                name: "实有床位数（张）",
                explain: "报告期末固定实有床位数，包括正规床、简易床、监护床、超过半年的加床、正在消毒和修理床位、因扩建或大修而停用的床位。不包括产科新生儿床、接产室待产床、库存床、观察床、临时加床和病人家属陪侍床。",
                sign: "sycws"
            }, {
                kind: "合理用药",
                name: "药品收入占医疗收入比例（%）",
                explain: "报告期末内药品收入与医疗收入的占比",
                sign: "ypsrzylsrbl"
            }, {
                kind: "合理用药",
                name: "门诊和住院药品中基本药物收入（千元）",
                explain: "报告期末内基本药物收入",
                sign: "mzhzyypzjbywsr"
            }, {
                kind: "合理用药",
                name: "门诊和住院基本药物使用率（%）",
                explain: "报告期末内基本药物收入与药品收入的占比",
                sign: "mzhzyjbywsyl"
            }, {
                kind: "费用负担",
                name: "门诊病人次均医药费用（元）",
                explain: "报告期末内门诊病人平均每次就诊医药费用，简称次均门诊费用。",
                sign: "mzbrcjyyfy"
            }, {
                kind: "费用负担",
                name: "门诊病人次均医药费用同比增长率（%）",
                explain: "去年同比增长率",
                sign: "mzbrcjyyfytbzzl"
            }, {
                kind: "费用负担",
                name: "住院病人均医药费用（元）",
                explain: "报告期末内出院者平均每次住院医药费用，简称次均住院费用。",
                sign: "zybrjyyfy"
            }, {
                kind: "费用负担",
                name: "出院病人占用总床日数（床日)",
                explain: "报告期内所有出院人数后正常出院者的住院床日数。（累加指标）",
                sign: "cybrzyzcrs"
            }, {
                kind: "医疗收入",
                name: "门诊收入（千元）",
                explain: "报告期末为门诊病人提供医疗服务所取得的收入，包括挂号收入、诊察收入、检查收入、化验收入、治疗收入、手术收入、卫生材料收入、药品收入、药事服务费收入、其他门诊收入等",
                sign: "cybrzyzcrs"
            }, {
                kind: "医疗收入",
                name: "住院收入（千元）",
                explain: "报告期末内为住院病人提供医疗服务所取得的收入，包括床位收入、诊察收入、检查收入、化验收入、治疗收入、手术收入、护理收入、卫生材料收入、药品收入、药事服务费收入、其他住院收入等",
                sign: "zysr"
            }, {
                kind: "医疗收入",
                name: "门诊药品收入（千元）",
                explain: "报告期末为门诊病人提供药品所取得的收入",
                sign: "mzypsr"
            }, {
                kind: "医疗收入",
                name: "住院药品收入（千元）",
                explain: "报告期末为住院病人提供药品所取得的收入",
                sign: "zyypsr"
            }, {
                kind: "卫生人力资源配置",
                name: "在岗职工数（人）",
                explain: "报告期末内单位支付工资的人员数",
                sign: "zgzgrs"
            }, {
                kind: "卫生人力资源配置",
                name: "编制内人员数（人）",
                explain: "报告期末内单位支付工资的人员数",
                sign: "bznrys"
            }, {
                kind: "卫生人力资源配置",
                name: "卫生技术人员数（人）",
                explain: "报告期末医疗卫生机构中执业医师、执业助理医师、注册护士、药师(士)、检验及影像技师(士)、卫生监督员和见习医(药、护、技)师(士)等卫生专业人员之和。",
                sign: "wsjsrys"
            }, {
                kind: "卫生人力资源配置",
                name: "执业医师人数（人）",
                explain: "报告期末医疗卫生机构中取得医师执业证书且实际从事医疗、妇幼保健、疾病防治等工作的执业医师。",
                sign: "zyysrs"
            }, {
                kind: "卫生人力资源配置",
                name: "执业助理医师数（人）",
                explain: "报告期末医疗卫生机构中取得医师执业证书且实际从事医疗、妇幼保健、疾病防治等工作的执业助理医师数",
                sign: "zyzlysrs"
            }, {
                kind: "卫生人力资源配置",
                name: "注册为全科医学专业的人数",
                explain: "报告期末医疗卫生机构中取得医师执业证书且执业范围为“全科医学专业”的执业（助理）医师数，以及基层医疗卫生机构取得全科医生转岗培训、骨干培训、岗位培训和住院医师规范化（全科医生）培训合格证的执业(助理)医师数之和。",
                sign: "zcwqkyxzyrs"
            }, {
                kind: "卫生人力资源配置",
                name: "注册护士数（人）",
                explain: "报告期末医疗卫生机构中取得注册护士证书且实际从事护理工作的人员之和不包括从事管理工作的注册护士",
                sign: "zchss"
            }, {
                kind: "卫生人力资源配置",
                name: "高级人数（人）",
                explain: "报告期末医疗卫生机构中取得高级职称（主任/副主任级）的人数",
                sign: "gjrs"
            }, {
                kind: "卫生人力资源配置",
                name: "中级人数（人）",
                explain: "报告期末医疗卫生机构中取得中级职称（主治/主管）的人数",
                sign: "zjrs"
            }, {
                kind: "卫生人力资源配置",
                name: "初级人数（人）",
                explain: "报告期末医疗卫生机构中师级/助理/士级的人数",
                sign: "cjrs"
            }, {
                kind: "卫生人力资源配置",
                name: "待聘人员数（人）",
                explain: "报告期末医疗卫生机构中待聘人员数",
                sign: "dprs"
            }
            ]
        ], [
            "OperationMonitor",
            [
                {
                    kind: "资产运营",
                    name: "流动比率(%)",
                    explain: "报告期末反映医院的短期偿债能力，流动资产与流动负债占比",
                    sign: "ldbl"
                }, {
                kind: "资产运营",
                name: "速动比率(%)",
                explain: "报告期末速动资产（货币资金+应收医疗款+其他应收款）与流动负债的比率",
                sign: "sdbl"
            }, {
                kind: "资产运营",
                name: "每百元固定资产医疗收入(元)",
                explain: "报告期末医疗收入除以固定资产均值{（年末+年初）/2}（百元)",
                sign: "mbygdzcylsr"
            }, {
                kind: "资产运营",
                name: "每百元业务收入的业务支出（元）",
                explain: "报告期末业务收入除以业务支出（百元）",
                sign: "mbyywsrywzc"
            }, {
                kind: "资产运营",
                name: "资产负债率（%）",
                explain: "报告期末负债总额与资产总额占比",
                sign: "zcfzl"
            }, {
                kind: "资产运营",
                name: "固定资产总值（千元）",
                explain: "报告期末固定资产总值（千元）",
                sign: "gdzczz"
            }, {
                kind: "资产运营",
                name: "医疗收入中药品收入（千元）",
                explain: "报告期末药品收入",
                sign: "ylsrzypsr"
            }, {
                kind: "资产运营",
                name: "医用材料收入比率（%）",
                explain: "报告期末医用材料收入与医疗收入占比",
                sign: "yyclsrbl"
            }, {
                kind: "资产运营",
                name: "医疗收入中检查化验收入（千元）",
                explain: "报告期末检查化验收入",
                sign: "ylsrzjchysr"
            }, {
                kind: "工作负荷",
                name: "年门诊人次（人次）",
                explain: "报告期末门诊人次",
                sign: "nmzrc"
            }, {
                kind: "工作负荷",
                name: "健康体检人次（人次）",
                explain: "报告期末健康体检人次",
                sign: "jktjtc"
            }, {
                kind: "工作负荷",
                name: "年急诊人次（人次）",
                explain: "报告期末急诊人次",
                sign: "njzrc"
            }, {
                kind: "工作负荷",
                name: "留观人次（人次）",
                explain: "报告期末留观人次",
                sign: "lgrc"
            }, {
                kind: "工作负荷",
                name: "年住院患者入院例数（例数）",
                explain: "报告期末住院患者入院例数",
                sign: "nzyhzryls"
            }, {
                kind: "工作负荷",
                name: "出院例数（例数）",
                explain: "报告期末住院患者出院例数",
                sign: "cyls"
            }, {
                kind: "工作负荷",
                name: "出院患者实际占用总床日（床日）",
                explain: "报告期末出院患者实际占用总床日",
                sign: "cyhzsjzyzcr"
            }, {
                kind: "工作负荷",
                name: "年住院手术例数（例数）",
                explain: "报告期末年住院手术例数",
                sign: "nzyssls"
            }, {
                kind: "工作负荷",
                name: "年门诊手术例数（例数）",
                explain: "报告期末年门诊手术例数",
                sign: "nmzssls"
            }, {
                kind: "工作效率",
                name: "出院患者平均住院日（日）",
                explain: "报告期末平均住院天数",
                sign: "cyhzpjzyr"
            }, {
                kind: "工作效率",
                name: "平均每张床位工作日（床日）",
                explain: "报告期末每一张床平均工作的日数",
                sign: "pjmzcwgzr"
            }, {
                kind: "工作效率",
                name: "床位使用率（%）",
                explain: "指实际占用的总床日数与实际开放的总床日数之比",
                sign: "cwsyl"
            }, {
                kind: "工作效率",
                name: "床位周转次数（次数）",
                explain: "报告期内每张床位的病人出院人数，即出院人数/平均开放床位数",
                sign: "cwzzcs"
            }, {
                kind: "工作效率",
                name: "手术次数（次数）",
                explain: "报告期内手术次数",
                sign: "sscs"
            }, {
                kind: "患者负担",
                name: "每门诊人次费用（元）",
                explain: "门诊患者负担指标，报告期内门诊收入/门诊人次",
                sign: "mmzrcfy"
            }, {
                kind: "患者负担",
                name: "每住院人次费用（元）",
                explain: "住院患者负担指标，报告期内住院收入/出院人次",
                sign: "mzyrcfy"
            }, {
                kind: "患者负担",
                name: "参保患者个人卫生支出比例（%）",
                explain: "参保患者个人支付医疗费用/参保患者就医医疗费用，用于反映患者看病就医负担水平",
                sign: "cbhzgrwszcbl"
            }, {
                kind: "患者负担",
                name: "医保目录外费用比例（%）",
                explain: "参保患者就医医保报销目录外医疗费用／参保患者就医医疗费用，用于反映患者看病就医负担及医院诊疗和用药合理性",
                sign: "ybmlwfybl"
            }
            ]
        ],[
            "MedicalBehaviorMonitor",
        [
            {
            kind: "医生综合信息",
            name: "门急诊量（人次）",
            explain: "报告期末，门急诊人次",
            sign: "mzzl"
        },{
            kind: "医生综合信息",
            name: "出院量（人次）",
            explain: "报告期末住院患者出院人次",
            sign: "cyl"
        },{
            kind: "医生综合信息",
            name: "手术量（人次）",
            explain: "报告期内手术人次",
            sign: "ssl"
        },{
            kind: "医生综合信息",
            name: "平均住院日（天）",
            explain: "报告期内，出院患者占用总床日数占同期出院人数之比",
            sign: "pjzyr"
        },{
            kind: "医生综合信息",
            name: "急救抢救成功率（%）",
            explain: "报告期内，急救抢救成功例数占实施急救抢救人数之比",
            sign: "jjqjcgl"
        },{
            kind: "医生综合信息",
            name: "医疗投诉数（例）",
            explain: "报告期末，医疗投诉数",
            sign: "yltss"
        },{
            kind: "医生综合信息",
            name: "甲级病案率（%）",
            explain: "报告期内，甲级病案份数占病案总数之比",
            sign: "jjbal"
        },{
            kind: "医生综合信息",
            name: "门诊单位时间内平均接诊人次（人/日）",
            explain: "平均每名医师每日担负的诊疗人次数",
            sign: "mzdwsjpjjzrc"
        },{
            kind: "单病种行为",
            name: "入院三日确诊率（%）",
            explain: "报告期内，入院三日内确诊人数占出院病人数之比",
            sign: "rysrqzl"
        },{
            kind: "单病种行为",
            name: "入院三日手术率（%）",
            explain: "报告期内，入院三日内作了手术的例数占做手术的总例数之比",
            sign: "rysrssl"
        },{
            kind: "单病种行为",
            name: "出入院诊断符合率（%）",
            explain: "报告期内，诊断符合患者数占（出院患者数－疑诊患者数）比例",
            sign: "cryzdfhl"
        },{
            kind: "药品行为",
            name: "药占比（%）",
            explain: "报告期内，药品收入占（药品收入+医疗收入+其他收入）的比例",
            sign: "yzb"
        },{
            kind: "药品行为",
            name: "住院抗菌药物使用率（%）",
            explain: "报告期内，出院患者使用抗菌药物例数例数占同期出院患者总例数比例",
            sign: "zykjywsyl"
        },{
            kind: "药品行为",
            name: "住院抗菌药物使用强度（DDD）",
            explain: "报告期内，住院抗菌药物消耗量（累计DDD数）占同期收治患者住院天数",
            sign: "zyddd"
        },{
            kind: "药品行为",
            name: "门诊抗菌药物处方率（%）",
            explain: "报告期内，含有抗菌药物的门诊处方数占同期门诊处方总数",
            sign: "mzkjywcfl"
        },{
            kind: "药品行为",
            name: "门诊人均药费（元/人）",
            explain: "报告期内，门诊药费占同期门诊人次之比",
            sign: "mzrjyf"
        },{
            kind: "药品行为",
            name: "住院人均药费（元/人）",
            explain: "报告期内，住院药费占同期出院人次之比",
            sign: "zyrjyf"
        },{
            kind: "耗材行为",
            name: "医用材料占医疗收入比例（%）",
            explain: "报告期内，医用材料占同期医疗收入之比",
            sign: "yyclzb"
        }
        ]
    ]
    ]
);
export default MixTableDataConfig