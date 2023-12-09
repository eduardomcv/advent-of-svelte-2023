import type { ElfRecord } from '$lib/types';

const API_URL = 'https://advent.sveltesociety.dev/data/2023/day-one.json';

export async function load() {
	try {
		const res = await fetch(API_URL);
		const records: ElfRecord[] = await res.json();
		return { records };
	} catch (e) {
		console.error('Error fetching data for day01:', e);
	}
}
