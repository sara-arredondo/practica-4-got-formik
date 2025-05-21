import CardCharacter from './CardCharacter';
import { Box } from '@mui/material';

export default function ContainCard({ characters }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, padding: 4, justifyContent: 'center' }}>
      {characters.length > 0 ? (
        characters.map((char) => (
          <CardCharacter
            key={char.id}
            fullName={char.fullName}
            title={char.title}
            family={char.family}
            imageUrl={char.imageUrl}
          />
        ))
      ) : (
        <p>No hay personajes disponibles.</p>
      )}
    </Box>
  );
}