const worldS = 'world';

export function hello(world: string = worldS): string {
	return `Hello ${world}! `;
}
