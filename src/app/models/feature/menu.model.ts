export interface Nav {
  name: string;
  value: NavValue;
  icon: string;
  activated: boolean;
}

export enum NavValue {
  proxies = 'proxies',
  logs = 'logs',
  rules = 'rules',
  links = 'links',
  settings = 'settings',
}
