function extractElementsAtDepth<T>(array: unknown[], depth: number): T[] {
    if (depth === 1) {
        return array.filter(item => !Array.isArray(item)) as T[];
    }

    return array.reduce((acc: T[], item) => {
        if (Array.isArray(item)) {
            acc.push(...extractElementsAtDepth<T>(item, depth - 1));
        }
        return acc;
    }, []);
}
