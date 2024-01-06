import { MenuProps, TreeProps } from "antd";

import { Note } from "../../model/Note";

export enum DropItemsId {
  AddGroup = 'AddGroup',
  AddNote = 'AddNote',
  Delete = 'Delete',
  Rename = 'Rename',
}

export type CreateMenuItem = (list: Note[], parentKey: string) => NotNull<TreeProps["treeData"]>;

export type DropMenuItemClick = NotNull<MenuProps["onClick"]>
export type HandleClick = (key: string, info: Parameters<NotNull<MenuProps["onClick"]>>[0]) => void;

export const AddItems: MenuProps['items'] = [
  {
    key: DropItemsId.AddGroup,
    label: '添加分组'
  },
  {
    key: DropItemsId.AddNote,
    label: '添加文档'
  }
]

export const AppendItems: MenuProps['items'] = [
  {
    key: DropItemsId.Rename,
    label: '重命名'
  },
  {
    key: DropItemsId.Delete,
    label: '删除文档'
  },
  ...AddItems,
]