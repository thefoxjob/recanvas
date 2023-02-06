import type { HostConfig } from 'react-reconciler';
import type { DOMNode, DOMNodeProps, HostContext, NodeName, Payload } from './types';
type Container = CanvasRenderingContext2D;
declare const hostConfig: HostConfig<NodeName, DOMNodeProps, Container, DOMNode, never, never, never, DOMNode, HostContext, Payload, Container, unknown, unknown>;
export { hostConfig };
