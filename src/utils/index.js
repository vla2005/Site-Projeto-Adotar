export const createPageUrl = (name) => {
    if (!name) return '/';
    const clean = String(name).replace(/^\/+/, '');
    return `/${clean}`;
};
