import { createElement } from 'react';

import { NodeName } from '../renderer/types';
import type { ViewProps } from './View';


interface Props extends ViewProps {
  src: string | Buffer;
}

function Image({ children, ...props }: Props) {
  return createElement(NodeName.Image, props, children);
}

export { Image };
export type { Props as ImageProps };
