declare module "*.jpg"

declare module "*.jpeg"

declare module "*.png"

declare module "*.gif"

declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.svg?url" {
  const content: string;
  export default content;
}
