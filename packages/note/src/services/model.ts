/**
 * Response
 */
export interface Response<T> {
  /**
   * 状态码
   */
  code: number;
  /**
   * 返回的数据
   */
  data: T;
  /**
   * 错误信息
   */
  msg: string;
}

/**
 * NoteList
 */
export interface NoteList {
  /**
   * 时间戳
   */
  created_at: number;
  /**
   * 文章描述
   */
  desc: string;
  /**
   * 唯一键
   */
  id: number;
  /**
   * 文章名称
   */
  name: string;
  /**
   * 需要花费阅读的时间（秒）
   */
  read_time?: number | null;
  /**
   * 时间戳
   */
  updated_at: number;
  /**
   * 文章地址
   */
  url: string;
}
