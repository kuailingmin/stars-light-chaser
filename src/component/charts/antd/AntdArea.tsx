import React, {Component} from 'react';
import {Area} from "@ant-design/charts";
import './style/AntdArea.less';
import EditTools from "../../edit-tool";

/**
 * 基础柱状图
 */
export default class AntdArea extends Component<any, any> {

    state: any = {
        data: []
    }

    constructor(props: any) {
        super(props);
        const {LCDesignerStore, elemId} = this.props;
        const {layoutConfigs} = LCDesignerStore;
        let chartName = "";
        for (let i = 0; i < layoutConfigs.length; i++) {
            if (layoutConfigs[i].id === elemId) {
                chartName = layoutConfigs[i].name;
            }
        }
        switch (chartName) {
            case "AntdBaseArea":
                fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
                    .then((response) => response.json())
                    .then((json) => this.setState({data: json}))
                    .catch((error) => {
                        console.log('fetch data failed', error);
                    });
                break;
            case "AntdStackArea":
                fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
                    .then((response) => response.json())
                    .then((json) => this.setState({data: json}))
                    .catch((error) => {
                        console.log('fetch data failed', error);
                    });
                break;
            case "AntdPercentArea":
                fetch('https://gw.alipayobjects.com/os/bmw-prod/67ef5751-b228-417c-810a-962f978af3e7.json')
                    .then((response) => response.json())
                    .then((json) => this.setState({data: json}))
                    .catch((error) => {
                        console.log('fetch data failed', error);
                    });
                break;
        }

    }

    render() {
        //todo name属性为演示获取demo数据使用，后续要去掉
        const {LCDesignerStore, elemId} = this.props;
        const {chartConfigs} = LCDesignerStore;
        const config = chartConfigs[elemId + ''];
        const {chartProps, baseStyle} = config;
        chartProps.data = this.state.data;
        return (
            <div style={{width: '100%', height: '100%', position: 'absolute', ...baseStyle}}>
                <EditTools {...this.props} elemId={elemId}/>
                <Area supportCSSTransform={true} className={'grid-chart-item'} {...chartProps}/>
            </div>
        );
    }
}
