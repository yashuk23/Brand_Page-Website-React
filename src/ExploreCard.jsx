import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./ExploreCard.css";

export default function ExploreCard({ IMG_URL, VISIT_URL, shoename, detail, mrp }) {
    return (
        <div className='ExploreCard'>
            <Card
                sx={{
                    maxWidth: 345,
                    height: 400,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <CardMedia
                    component="img"
                    height="160"
                    image={IMG_URL}
                    sx={{ objectFit: "contain", padding: "8px" }}
                />

                <CardContent
                    sx={{
                        flexGrow: 1,
                        backgroundColor: "rgb(210,180,140)",
                        color: "black",
                    }}
                >
                    <Typography variant="h6" textAlign="center">{shoename}</Typography>

                    <Typography variant="body2" textAlign="center"sx={{ mt: 1 }}>
                        {detail}
                    </Typography>

                    <Typography textAlign="center" sx={{ mt: 1, fontWeight: "bold" }}>
                        {mrp}
                    </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "center", backgroundColor:"#D3D3D3",padding:"2px"}}>
                    <Button
                        size="small"
                        component="a"
                        variant="contained"
                        href={VISIT_URL}
                        target="_blank"
                    >
                        Buy
                    </Button>
                </CardActions>
            </Card>
        </div >
    );
}