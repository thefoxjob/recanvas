/**
 *
 * @param callback Function that is executed at each animation frame. Can be throttled using `delay` param.
 * @param delayInMs The duration after which the callback is executed.
 */
export declare function useAnimationFrame(callback: (time: number) => void, delayInMs?: number, paused?: boolean): void;
