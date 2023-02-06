/// <reference types="react" />
import type { DOMNodeProps } from './renderer/types';


export interface ViewProps extends DOMNodeProps {
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLCanvasElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLCanvasElement>) => void;
}
export declare function View({ children, ...props }: ViewProps): import('react').DOMElement<{
    onClick?: ((event: import('react').MouseEvent<HTMLCanvasElement, MouseEvent>) => void) | undefined;
    onKeyDown?: ((event: import('react').KeyboardEvent<HTMLCanvasElement>) => void) | undefined;
    x: number;
    y: number;
    width: number;
    height: number;
    style?: {
        color?: string | undefined;
    } | undefined;
}, Element>;
