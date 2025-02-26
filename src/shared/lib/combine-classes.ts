import clsx, { ClassValue } from "clsx";

/**
 * Combine multiple CSS classes into a single string.
 *
 * @param classes - The CSS classes to combine.
 * @returns - A single string containing all the combined CSS classes.
 */
export function combineClasses(...classes: ClassValue[]): string {
  return clsx(...classes);
}
