/**
 * Scroll-triggered entrance motion via Motion One (@motionone/dom): `inView` + `animate` (WAAPI).
 * Initial hidden styles live in `global.css` on `.kr-motion-enter-*`.
 */
import { animate, inView } from '@motionone/dom';

const SELECTOR =
	'.kr-motion-enter-fade-in, .kr-motion-enter-fade-up, .kr-motion-enter-fade-up-sm, .kr-motion-enter-fade-down-sm';

const DURATION = 0.45;
const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

function prefersReducedMotion(): boolean {
	return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

function delaySeconds(el: Element): number {
	if (el.classList.contains('kr-motion-delay-3')) return 0.24;
	if (el.classList.contains('kr-motion-delay-2')) return 0.16;
	if (el.classList.contains('kr-motion-delay-1')) return 0.08;
	return 0;
}

function entranceKind(el: Element): 'fade-in' | 'fade-up' | 'fade-up-sm' | 'fade-down-sm' | null {
	if (el.classList.contains('kr-motion-enter-fade-in')) return 'fade-in';
	if (el.classList.contains('kr-motion-enter-fade-up-sm')) return 'fade-up-sm';
	if (el.classList.contains('kr-motion-enter-fade-down-sm')) return 'fade-down-sm';
	if (el.classList.contains('kr-motion-enter-fade-up')) return 'fade-up';
	return null;
}

function setEntranceInitial(el: HTMLElement): void {
	const kind = entranceKind(el);
	if (!kind) return;
	el.style.opacity = '0';
	if (kind === 'fade-in') {
		el.style.removeProperty('transform');
		return;
	}
	if (kind === 'fade-up') {
		el.style.transform = 'translateY(12px)';
		return;
	}
	if (kind === 'fade-up-sm') {
		el.style.transform = 'translateY(6px)';
		return;
	}
	el.style.transform = 'translateY(-6px)';
}

function revealInstant(el: HTMLElement): void {
	el.style.opacity = '1';
	el.style.transform = 'none';
}

function commitFinished(controls: ReturnType<typeof animate>, el: HTMLElement): void {
	void controls.finished.then(() => {
		try {
			controls.commitStyles();
		} catch {
			revealInstant(el);
		}
	});
}

function runEntrance(el: HTMLElement): void {
	if (prefersReducedMotion()) {
		revealInstant(el);
		return;
	}

	const kind = entranceKind(el);
	if (!kind) return;

	const delay = delaySeconds(el);
	const base = { duration: DURATION, delay } as const;

	if (kind === 'fade-in') {
		commitFinished(animate(el, { opacity: [0, 1] }, { ...base, easing: 'ease-out' }), el);
	} else if (kind === 'fade-up') {
		commitFinished(animate(el, { opacity: [0, 1], y: ['12px', 0] }, { ...base, easing: EASE_OUT_EXPO }), el);
	} else if (kind === 'fade-up-sm') {
		commitFinished(animate(el, { opacity: [0, 1], y: ['6px', 0] }, { ...base, easing: 'ease-out' }), el);
	} else {
		commitFinished(animate(el, { opacity: [0, 1], y: ['-6px', 0] }, { ...base, easing: 'ease-out' }), el);
	}
}

/** Re-run a single entrance (e.g. style guide “Replay”). */
export function replayKrMotionEntrance(el: HTMLElement | null | undefined): void {
	if (!el) return;
	if (prefersReducedMotion()) {
		revealInstant(el);
		return;
	}
	if (!entranceKind(el)) return;
	el.getAnimations().forEach((a) => a.cancel());
	setEntranceInitial(el);
	void el.offsetWidth;
	runEntrance(el);
}

export function initKrMotionEntrances(): void {
	if (typeof document === 'undefined') return;

	if (prefersReducedMotion()) {
		document.querySelectorAll(SELECTOR).forEach((node) => revealInstant(node as HTMLElement));
		return;
	}

	if (typeof IntersectionObserver === 'undefined') {
		document.querySelectorAll(SELECTOR).forEach((node) => runEntrance(node as HTMLElement));
		return;
	}

	inView(
		SELECTOR,
		(entry) => {
			runEntrance(entry.target as HTMLElement);
		},
		{ margin: '0px 0px -6% 0px', amount: 'any' }
	);
}
