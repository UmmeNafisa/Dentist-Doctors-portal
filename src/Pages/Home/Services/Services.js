import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import froride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

const services = [
    {
        name: "Flouride Treatement",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor aut voluptas unde repellendus, voluptatem quaerat amet natus saepe a nostrum, id excepturi dignissimos earum! Animi ",
        img: froride
    },
    {
        name: "Cavity Filling",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor aut voluptas unde repellendus, voluptatem quaerat amet natus saepe a nostrum, id excepturi dignissimos earum! Animi ",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor aut voluptas unde repellendus, voluptatem quaerat amet natus saepe a nostrum, id excepturi dignissimos earum! Animi ",
        img: whitening
    }
]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, border: 0, boxShadow: 0, }}>
            <Container sx={{ mx: "auto" }}>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div" >
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, }} component="div" >
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mx: "auto" }}>
                    {services.map(service => <Service

                        key={service.name} service={service}       ></Service>)

                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;