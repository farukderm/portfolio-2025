/// <reference types="vite/client" />
/// <reference types="vite/client" />

declare module "canvas-confetti" {
  const confetti: (options?: any) => Promise<void>;
  export default confetti;
}

declare module "typewriter-effect" {
  const Typewriter: any;
  export default Typewriter;
}
/// <reference types="vite/client" />

/* Canvas + 2D Context tanımları */
interface HTMLCanvasElement {
  getContext(
    contextId: "2d",
    options?: CanvasRenderingContext2DSettings
  ): CanvasRenderingContext2D | null;
}
