export interface Snapshot {
  uploadTotal: number
  downloadTotal: number
  connections: Connections[]
}

export interface Connections {
  id: string
  metadata: {
      network: string
      type: string
      host: string
      processPath?: string
      sourceIP: string
      sourcePort: string
      destinationPort: string
      destinationIP?: string
  }
  upload: number
  download: number
  start: string
  chains: string[]
  rule: string
  rulePayload: string
}
