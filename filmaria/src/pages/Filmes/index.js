import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

//Paths
import api from "../../services/api";

export default function Filmes() {
  const [filme, setFilme] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function loadFilmes() {
      const response = await api
        .get(`movie/${id}`, {
          params: {
            api_key: "4f278857399cee26f668bc6b6985b95d",
            language: "PT-BR",
            page: 1,
          },
        })
        .then((response) => {
          setFilme(response.data);
        })
        .catch(() => {
          console.log("Filme não encontrado");
        });
    }

    loadFilmes();
  }, []);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Card>
            <CardMedia
              component="img"
              alt={filme.title}
              height="550"
              src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
            />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card key={filme.id} sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
              component="img"
              alt="Filme"
              height="550"
              src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            margin="20px"
          >
            <Typography variant="h2" color="white">
              {filme.title}
            </Typography>
            <Typography variant="h5" color="white">
              Sinopse
            </Typography>
            <Typography variant="body1" color="white">
              {filme.overview}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
