import React, {Component} from 'react';
import {Liquid} from "@ant-design/charts";
import './style/AntdLiquid.less';
import EditTools from "../../edit-tool";

/**
 * 基础柱状图
 */
export default class AntdLiquid extends Component<any, any> {

    render() {
        //todo name属性为演示获取demo数据使用，后续要去掉
        const {LCDesignerStore, elemId} = this.props;
        const {chartConfigs} = LCDesignerStore;
        const config = chartConfigs[elemId + ''];
        const {chartProps, baseStyle} = config;
        return (
            <div style={{width: '100%', height: '100%', position: 'absolute', ...baseStyle}}>
                <EditTools {...this.props} elemId={elemId}/>
                <Liquid supportCSSTransform={true} className={'grid-chart-item'} {...chartProps}/>
            </div>
        );
    }
}
