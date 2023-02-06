/// <reference types="react" />
import type { RecanvasFont } from '../types';
interface Props {
    children?: React.ReactNode;
    style?: RecanvasFont;
}
declare function Text({ children, ...props }: Props): import("react").ReactElement<{
    style?: RecanvasFont | undefined;
}, string | import("react").JSXElementConstructor<any>>;
declare namespace Text {
    var defaultProps: {
        children: undefined;
        style: undefined;
    };
}
export { Text };
export type { Props as TextProps };
