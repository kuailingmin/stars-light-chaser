import {
    AbstractDefinition,
    MenuToConfigMappingType
} from "../../../framework/core/AbstractDefinition";
import BaseImageController, {BaseImageComponentProps} from "./BaseImageController";
import {BaseInfoType} from "../../../designer/DesignerType";
import baseImage from './baseImage.png';
import {ClazzTemplate} from "../../common-component/common-types";
import {MenuInfo} from "../../../designer/right/MenuType";
import {getDefaultMenuList} from "../../../designer/right/util";
import BaseInfo from "../../common-component/base-info/BaseInfo";
import {BaseImageStyleConfig} from "./BaseImageConfig";

export default class BaseImageDefinition extends AbstractDefinition<BaseImageController, BaseImageComponentProps> {
    getBaseInfo(): BaseInfoType {
        return {
            compName: "基础图片",
            compKey: "LcBaseImage",
            type: "基础",
            typeKey: "base",
            desc: "标准提供的基础图片",
        };
    }

    getChartImg(): string | null {
        return baseImage;
    }

    getComponent(): ClazzTemplate<BaseImageController> | null {
        return BaseImageController;
    }

    getInitConfig(): BaseImageComponentProps {
        return {
            info: {
                id: "",
                name: '基础图片',
                type: 'LcBaseImage',
                desc: '标准提供的基础图片',
            },
            style: {
                type: 'online',
                localUrl: '',
                onLineUrl: '',
            },
        };
    }

    getMenuList(): Array<MenuInfo> | null {
        return getDefaultMenuList().filter((item: MenuInfo) => (item.key !== 'theme' && item.key !== 'data' && item.key !== 'mapping'));
    }

    getMenuToConfigContentMap(): MenuToConfigMappingType | null {
        return {
            info: BaseInfo,
            style: BaseImageStyleConfig,
        };
    }


}