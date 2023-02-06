/// <reference types="react" />
import type { DOMNodeProps } from '../renderer/types';
interface Props extends DOMNodeProps {
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLCanvasElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLCanvasElement>) => void;
}
declare function View({ children, ...props }: Props): import("react").DOMElement<{
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
declare namespace View {
    var defaultProps: {
        children: undefined;
        onClick: undefined;
        onKeyDown: undefined;
    };
}
export { View };
export type { Props as ViewProps };
