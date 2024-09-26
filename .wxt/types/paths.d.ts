// Generated by wxt
import "wxt/browser";

declare module "wxt/browser" {
  export type PublicPath =
    | "/background.js"
    | "/content-scripts/content.js"
    | "/icon/128.png"
    | "/icon/16.png"
    | "/icon/32.png"
    | "/icon/48.png"
    | "/icon/96.png"
    | "/svg/generate.svg"
  type HtmlPublicPath = Extract<PublicPath, `${string}.html`>
  export interface WxtRuntime extends Runtime.Static {
    getURL(path: PublicPath): string;
    getURL(path: `${HtmlPublicPath}${string}`): string;
  }
}
