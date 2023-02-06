import { createElement } from 'react';

import { NodeName } from '../renderer/types';
import type { DOMNodeProps } from '../renderer/types';


interface Props extends DOMNodeProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLCanvasElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLCanvasElement>) => void;
}

function View({ children, ...props }: Props) {
  return createElement(NodeName.View, props, children);
}

View.defaultProps = {
  children: undefined,
  onClick: undefined,
  onKeyDown: undefined,
};

export { View };
export type { Props as ViewProps };
