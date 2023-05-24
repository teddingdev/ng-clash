export interface Config {
  port: number;
  mode: ClashMode;
  'socks-port': number;
  'redir-port': number;
  'mixed-port': number;
  'allow-lan': boolean;
  'log-level': string;
}

export interface ExternalControlConfig {
  hostname: string;
  port: string;
  key: string;
}

export enum ClashMode {
  /** 规则 */
  'RULE' = 'rule',
  /** 脚本 */
  'SCRIPT' = 'script',
  /** 直连 */
  'DIRECT' = 'direct',
  /** 全局 */
  'GLOBAL' = 'global',
}
