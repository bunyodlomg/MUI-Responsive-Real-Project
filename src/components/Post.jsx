import { useState } from "react";
import {
    FavoriteBorder,
    Favorite,
    MoreVert,
    Share,
    ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import {
    styled,
    Box,
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    Collapse,
    IconButton,
    Typography,
} from "@mui/material"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
function Post({ title, imgUrl, desc, date, name, subtitle }) {
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Box flex={4} sx={{ marginLeft: "auto", marginRight: "auto" }}>
            <Card sx={{
                maxWidth: '100%',
                width: { lg: '70%', md: '70%', sm: '70%' },
                marginLeft: "auto", marginRight: "auto",
            }} data-aos="zoom-in">
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            {name[0]}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title={name}
                    subheader={(new Date(date)).toLocaleString()}
                />
                <CardMedia
                    component="img"
                    height="20%"
                    width="100%"
                    image={`${imgUrl}`}
                    alt="Paella dish"
                />
                <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Typography variant="h6" lineHeight={1} fontWeight={500}>
                        {title}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite sx={{ color: "red" }} />}
                        />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {subtitle}
                        </Typography>
                        <Typography paragraph fontWeight={400} color="text.secondary">
                            {desc}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Box>
    );
}

export default Post;
