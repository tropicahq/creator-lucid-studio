import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getInitials(fullName: string) {
	const regexInitials = fullName.match(/(\p{L}{1})\p{L}+/gu) || [];
	const initials = (
		(regexInitials.shift()?.[0] || "") + (regexInitials.pop()?.[0] || "")
	).toLocaleUpperCase();
	return initials;
}

export function formatDate(date: Date) {
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
