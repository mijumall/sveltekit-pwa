import type { PageLoadEvent } from './$types';

export function load(e: PageLoadEvent) {
	//console.log("Load invoked", navigator.onLine);
	return {
		d: "some data",
		param: e.params,
	}
}