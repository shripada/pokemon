export enum Status {
  idle = 'idle',
  loading = 'loading',
  resolved = 'resolved',
  error = 'error',
}

// type Status = 
// |'idle' | 'loading' | 'resolved' | 'error';



export interface PokemonProps {
  pokemonData: object | undefined,
  status: Status
}