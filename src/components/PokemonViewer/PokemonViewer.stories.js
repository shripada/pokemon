import PokemonViewer from './PokemonViewer';

export default {
    title: 'Pokemon/PokemonViewer',
    component: PokemonViewer
};

export const PokemonViewerIdle = () => <PokemonViewer />;
export const PokemonViewerLoading = () => <PokemonViewer status="loading" />;
export const PokemonViewerResolved = () => <PokemonViewer status="resolved" />;
export const PokemonViewerError = () => <PokemonViewer status="error" />;
