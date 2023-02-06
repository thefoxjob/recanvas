export type ImageOptions = {
    x: number;
    y: number;
    height?: number;
    width?: number;
} & ({
    resize?: 'crop' | 'fill' | 'fit';
    origin?: string;
} | {
    source: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
});
export declare function insertImage(ctx: CanvasRenderingContext2D, src: string, options: ImageOptions): Promise<void>;
