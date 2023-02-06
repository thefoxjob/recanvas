import { type RecanvasFont } from './types';
declare class Store {
    #private;
    get dpr(): number;
    set dpr(value: number);
    get font(): Required<RecanvasFont>;
    set font(value: RecanvasFont);
}
declare const store: Store;
export default store;
