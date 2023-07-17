export interface Config {
  port: number;
  'socks-port': number;
  'redir-port': number;
  'tproxy-port': number;
  'mixed-port': number;
  'allow-lan': boolean;
  'bind-address': string;
  mode: keyof typeof ClashMode;
  'log-level': string;
  ipv6: boolean;
}

export interface ExternalControlConfig {
  hostname: string;
  port: string;
  key: string;
}

export enum ClashMode {
  /** 全局 */
  'global' = 'Global',
  /** 规则 */
  'rule' = 'Rule',
  /** 脚本 */
  'script' = 'Script',
  /** 直连 */
  'direct' = 'Direct',
}
