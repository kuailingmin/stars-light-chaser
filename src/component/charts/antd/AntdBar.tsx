import React, {Component} from 'react';
import {Bar} from "@ant-design/charts";
import EditTools from "../../edit-tool";
import './style/AntdBar.less';

/**
 * 基础条形图
 */
export default class AntdBar extends Component<any, any> {

    render() {
        const {LCDesignerStore, elemId} = this.props;
        const {chartConfigs} = LCDesignerStore;
        const config = chartConfigs[elemId + ''];
        const {chartProperties, elemBaseProperties} = config;
        return (
            <div style={{width: '100%', height: '100%', position: 'absolute', ...elemBaseProperties}}>
                <EditTools {...this.props} elemId={elemId}/>
                <Bar className={'grid-chart-item'} {...chartProperties}/>
            </div>
        );
    }
}
