import type { PageLoadEvent } from './$types';

export function load(e: PageLoadEvent) {
	console.log("Loaded");
	return {
		param: e.params,
		d: e.data,
	};
}