import { createElement } from 'react';

import { NodeName } from '../renderer/types';
import type { RecanvasFont } from '../types';


interface Props {
  children?: React.ReactNode;
  style?: RecanvasFont;
}

function Text({ children, ...props }: Props) {
  return createElement(NodeName.Text, props, children);
}

Text.defaultProps = {
  children: undefined,
  style: undefined,
};

export { Text };
export type { Props as TextProps };
