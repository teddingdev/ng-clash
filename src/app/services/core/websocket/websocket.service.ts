import { WebSocketReadyState } from '@model';

export class WebsocketService {
  /**websocket 实例*/
  instance: WebSocket | null;

  connected = (): boolean => {
    const instance = this.instance;
    if (!instance) {
      return false;
    }
    if (
      instance.readyState === WebSocketReadyState.CONNECTING ||
      instance.readyState === WebSocketReadyState.OPEN
    ) {
      return true;
    } else {
      return false;
    }
  };
  /** websocket 关闭 */
  onClose = () => {
    const instance = this.instance;
    if (!instance || !this.connected) {
      return;
    }
    instance.close();
    this.instance = null;
  };
  /** webSocket 已连接 */
  onopen = (ev: Event): any => {
    console.log('webSocket 已连接');
    // this.wsHeartBeatStart();
  };
  /** webSocket 已关闭 */
  onclose = (ev: Event): any => {
    console.log('webSocket 已关闭');
    // this.wsHeartBeatStop();
  };

  onmessage = (data: any) => {
    console.log(
      `🍅 -> file: websocket.service.ts:67 -> WebsocketService -> data:`,
      data
    );
  };

  onerror = (error: any) => {
    console.log(error);
  };
  /** webSocket 发送消息 */
  send = (data: any) => {
    if (!this.instance) {
      return;
    }
    this.instance.send(JSON.stringify(data));
  };
  constructor(wsConfig: {
    url: string;
    onopen?: WebSocket['onopen'];
    onerror?: WebSocket['onerror'];
    onclose?: WebSocket['onclose'];
    onmessage?: WebSocket['onmessage'];
  }) {
    const { url, onopen, onerror, onclose, onmessage } = wsConfig;
    this.instance = new WebSocket(url);
    this.instance.onopen = onopen || this.onopen;
    this.instance.onerror = onerror || this.onerror;
    this.instance.onclose = onclose || this.onclose;
    this.instance.onmessage = onmessage || this.onmessage;
  }
}
