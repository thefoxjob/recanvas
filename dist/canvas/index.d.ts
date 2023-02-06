import { type DOMNode } from '../renderer/types';
export { insertImage } from './image';
export declare function createCanvas(width?: number, height?: number): HTMLCanvasElement;
export declare function insertChildToCanvas(ctx: CanvasRenderingContext2D, child: DOMNode): void;
