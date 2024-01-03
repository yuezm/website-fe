import { MenuProps } from "antd";
import { Note } from "../../model/Note";

export enum DropItemsId {
  AddGroup = 'AddGroup',
  AddNote = 'AddNote',
  Delete = 'Delete',
  Rename = 'Rename',
}

export type CreateMenuItem = (list: Note[], parentKey: string) => NotNull<MenuProps["items"]>;

export type DropMenuItemClick = NotNull<MenuProps["onClick"]>
export type HandleClick = (key: string, info: Parameters<NotNull<MenuProps["onClick"]>>[0]) => void;