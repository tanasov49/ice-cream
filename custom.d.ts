declare module "*.jpg"

declare module "*.jpeg"

declare module "*.png"

declare module "*.gif"

declare module "*.svg" {
    const path: string;
    export default path;
  }