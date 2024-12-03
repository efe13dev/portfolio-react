import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateText = (text: string, maxLength: number = 50) => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};
