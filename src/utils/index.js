// mantém as rotas exatamente como você usa nos Links (Inicio, Adote, etc.)
export const createPageUrl = (name) => {
    if (!name) return '/';
    // garante a barra inicial e evita barras duplas
    const clean = String(name).replace(/^\/+/, '');
    return `/${clean}`;
};
