let timer: number;

export function debounce(cb: () => void, ms = 250) {
	clearTimeout(timer);
	timer = setTimeout(cb, ms);
}
