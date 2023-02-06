/// <reference types="node" />
/// <reference types="react" />
import type { ViewProps } from './View';
interface Props extends ViewProps {
    src: string | Buffer;
}
declare function Image({ children, ...props }: Props): import("react").DOMElement<{
    src: string | Buffer;
    onClick?: ((event: import("react").MouseEvent<HTMLCanvasElement, MouseEvent>) => void) | undefined;
    onKeyDown?: ((event: import("react").KeyboardEvent<HTMLCanvasElement>) => void) | undefined;
    x: number;
    y: number;
    width: number;
    height: number;
    style?: {
        color?: string | undefined;
    } | undefined;
}, Element>;
export { Image };
export type { Props as ImageProps };
