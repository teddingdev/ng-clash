export interface Proxy {
  name: string;
  type: ProxyType | UnUsedProxy;
  history: History[];
  udp: boolean;
}

export interface Proxies {
  proxies: Record<string, Proxy | PolicyGroup>;
}

export interface ProxiesProvider {
  name: string;
  proxies: Array<PolicyGroup | Proxy>;
  type: 'Proxy';
  vehicleType: 'HTTP' | 'File' | 'Compatible';
  updatedAt?: string;
}

export interface ProxyProviders {
  providers: Record<string, ProxiesProvider>;
}

interface History {
  time: string;
  delay: number;
}

export enum ProxyType {
  Shadowsocks = 'Shadowsocks',
  Vmess = 'Vmess',
  Trojan = 'Trojan',
  Socks = 'Socks',
  Http = 'Http',
  Snell = 'Snell',
}

export enum UnUsedProxy {
  Direct = 'Direct',
  Reject = 'Reject',
  GLOBAL = 'GLOBAL',
}

export interface PolicyGroup {
  name: string;
  type: PolicyGroupType;
  history: History[];
  all: string[];
  now: string;
}

export enum PolicyGroupType {
  Selector = 'Selector',
  URLTest = 'URLTest',
  Fallback = 'Fallback',
  LoadBalance = 'LoadBalance',
}

export type ProxyGroup = SelectProxyGroup &
  UrlTestProxyGroup &
  FallbackProxyGroup &
  LoadBalanceGroup;

export interface SelectProxyGroup {
  name?: string;

  type?: 'select';

  proxies?: string[]; // proxy names
}

export interface LoadBalanceGroup {
  name?: string;

  type?: 'load-balance';

  proxies?: string[]; // proxy names
}

export interface FallbackProxyGroup {
  name?: string;

  type?: 'fallback';

  proxies?: string[]; // proxy names

  url?: string;

  interval?: number; // second
}

export interface UrlTestProxyGroup {
  name?: string;

  type?: 'url-test';

  proxies?: string[]; // proxy names

  url?: string;

  interval?: number; // second
}
