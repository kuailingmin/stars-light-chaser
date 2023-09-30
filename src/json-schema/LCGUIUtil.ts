import {Control, ControlValueType} from "./SchemaTypes";
import {SchemaPathNode} from "./LCGUI";

export default class LCGUIUtil {
    public static updateSchema(oldSchema: Control, path: SchemaPathNode[], value: ControlValueType) {
        const currentNode = path.shift();
        const {key, index} = currentNode!;
        if (key && key in oldSchema) {
            if (path.length === 0) {
                //赋值
                oldSchema.value = value;
            } else if (index !== undefined) {
                //取指定数据元素继续递归
                this.updateSchema((oldSchema[key as keyof Control] as [])[index], path, value);
            } else {
                //普通属性继续递归 todo可能还有特殊场景，注意测试
                this.updateSchema(oldSchema[key as keyof Control] as Control, path, value);
            }
        }
    }

    public static updateSchemaStringPath(oldSchema: Control, path: string[], value: ControlValueType) {
        const schemaPathNode: SchemaPathNode[] = [];
        path.forEach((key, index) => {
            if (key.indexOf("_") !== -1) {
                const [_key, index] = key.split("_");
                schemaPathNode.push({key: _key, index: parseInt(index)});
            } else {
                schemaPathNode.push({key});
            }
        });
        this.updateSchema(oldSchema, schemaPathNode, value);
    }

    public static createObjectFromArray(keyPath: string[], value: ControlValueType): object {
        let result = {};
        let current: any = result;
        for (let i = 0; i < keyPath.length; i++) {
            const key = keyPath[i];
            current[key] = i === keyPath.length - 1 ? value : {};
            current = current[key];
        }
        return result;
    }
}