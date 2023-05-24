export interface Rule {
  type: string;
  payload: string;
  proxy: string;
}

export interface Rules {
  rules: Rule[];
}

export interface RuleProvider {
  name: string;
  type: 'Rule';
  vehicleType: 'HTTP' | 'File';
  behavior: string;
  ruleCount: number;
  updatedAt?: string;
}
