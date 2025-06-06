/*
 * Copyright © 2023-2025 puyinzhen
 * All rights reserved.
 *
 * The copyright of this work (or idea/project/document) is owned by puyinzhen. Without explicit written permission, no part of this work may be reproduced, distributed, or modified in any form for commercial purposes.
 *
 * This copyright statement applies to, but is not limited to: concept descriptions, design documents, source code, images, presentation files, and any related content.
 *
 * For permission to use this work or any part of it, please contact 1182810784@qq.com to obtain written authorization.
 */

import {ICategorize} from "../../../framework/core/AbstractDefinition";
import {AllApplication, Browser, Cube, MapDraw, Monitor, Other, PieThree, Platte, Text} from "@icon-park/react";

export const componentCategorize: ICategorize[] = [
    {
        key: "all",
        name: "所有",
        icon: AllApplication,
    },
    {
        key: "chart",
        name: "图表",
        icon: PieThree,
    },
    {
        key: "info",
        name: "信息",
        icon: Text,
    },
    {
        key: "map",
        name: "地图",
        icon: MapDraw,
    },
    {
        key: "ornament",
        name: "装饰",
        icon: Platte,
    },
    {
        key: "model",
        name: "模型",
        icon: Cube,
    },
    {
        key: "media",
        name: "媒体",
        icon: Monitor,
    },
    {
        key: "web",
        name: "web元素",
        icon: Browser,
    },
    {
        key: "other",
        name: "其他",
        icon: Other
    }
];

export const componentSubCategorize: ICategorize[] = [
    {
        key: "all",
        name: "所有",
    },
    {
        key: "bar",
        name: "条形图",
        parentKey: "chart"
    },
    {
        key: "column",
        name: "柱状图",
        parentKey: "chart"
    },
    {
        key: "line",
        name: "折线图",
        parentKey: "chart"
    },
    {
        key: "pie",
        name: "饼图",
        parentKey: "chart"
    },
    {
        key: "scatter",
        name: "散点图",
        parentKey: "chart"
    },
    {
        key: "wordCloud",
        name: "词云图",
        parentKey: "chart"
    },
    {
        key: "area",
        name: "面积图",
        parentKey: "chart"
    },
    {
        key: "radar",
        name: "雷达图",
        parentKey: "chart"
    },
    {
        key: "funnel",
        name: "漏斗图",
        parentKey: "chart"
    },
    {
        key: "progress",
        name: "进度图",
        parentKey: "chart"
    },
    {
        key: "rose",
        name: "玫瑰图",
        parentKey: "chart"
    },
    {
        key: "radial",
        name: "玉珏图",
        parentKey: "chart"
    },
];