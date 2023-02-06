import createReconciler, { type Fiber } from 'react-reconciler';

import store from '../store';
import { hostConfig } from './host-config';


let container: Fiber;
const reconciler = createReconciler(hostConfig);

// eslint-disable-next-line import/prefer-default-export
export function render(
  element: React.ReactElement,
  canvas: HTMLCanvasElement,
  callback?: () => void,
) {
  container = reconciler.createContainer(
    canvas.getContext('2d')!,
    0,
    null,
    false,
    false,
    'Recanvas',
    () => {},
    null,
  );

  reconciler.updateContainer(element, container, null, callback);
}
