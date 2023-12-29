import { MenuProps } from "antd";
import { Note } from "../../model/Note";

export function serializeListToMenuItems(list: Note[]): NotNull<MenuProps["items"]> {
  return list.map((item) => {
    return {
      key: item.id,
      label: item.title,
      children: item.children ? serializeListToMenuItems(item.children) : undefined,
    }
  });
}