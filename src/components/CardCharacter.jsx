import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


export default function CardCharacter ({

        fullName,
        title,
        family,
        imageUrl

    })

{
    return (
        <Card sx={{ width: 345 }}>
            <CardMedia
                sx={{ height: 300 }}
                image={imageUrl}
                title={fullName}
        />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">{fullName}</Typography>
                <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                <Typography gutterBottom variant="h5" component="div">{family}</Typography>
            </CardContent>
        </Card>
    )
}

