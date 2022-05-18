import React, {useState, useEffect} from 'react';

//Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//Paths
import api from '../../services/api';

export default function BasicCard() {
    const[filmes, setFilmes] = useState ([]);

    useEffect(() => {
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "4f278857399cee26f668bc6b6985b95d",
                    language: "PT-BR",
                    page: 1,
                }
            })

            console.log(response.data.results)
            setFilmes(response.data.results.slice(0, 15));

        }

        loadFilmes();

    },[])
  return (
        <Box>
            {filmes.map((filme)=>{
                return(
<Card key={filme.id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Filme"
        height="140"
        imagem={`https://api.themoviedb.org/3/movie/${filme.poster_path}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {filme.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                )
            })}
        </Box>
    
  );
}
