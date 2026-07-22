import { AsyncLocalStorage } from 'node:async_hooks';

const asyncLocalStorage = new AsyncLocalStorage<Map<string, string>>();

export const context = {
  getStore: () => asyncLocalStorage.getStore(),
  run: (store: Map<string, string>, callback: () => void) => asyncLocalStorage.run(store, callback),
};