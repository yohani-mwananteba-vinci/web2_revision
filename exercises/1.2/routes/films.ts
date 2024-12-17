import { Router } from "express";
import { Film } from "../types";

const defaultfilms: Film[] = [
    {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        duration: 148,
        budget: 160,
        description: "A mind-bending thriller about dream invasion.",
        imageUrl: "https://example.com/inception.jpg"
    },
    {
        id: 2,
        title: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        duration: 136,
        description: "A hacker discovers the reality is a simulation.",
        imageUrl: "https://example.com/matrix.jpg"
    },
    {
        id: 3,
        title: "Interstellar",
        director: "Christopher Nolan",
        duration: 169,
        budget: 165,
        imageUrl: "https://example.com/interstellar.jpg"
    }
];

const router = Router();

router.get("/", (_req, res) => {
    //no need to check if film.duration/film.budget > 0
  return res.json(defaultfilms);
});



export default router;
