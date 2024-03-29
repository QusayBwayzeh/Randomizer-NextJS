import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
const Names = require("./Names.json");

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const spinningTime = 15;
const spinningAudioDuration = 14;

export default function HomePage() {
  const [cardFlip, setCardFlip] = useState(false);

  const employees = shuffle(Names);
  const winnerIndex = Math.floor(Names.length / 2);

  useEffect(() => {
    if (cardFlip) {
      setTimeout(() => {
        document.querySelector("#spinning").playbackRate =
          spinningAudioDuration / spinningTime;
        document.querySelector("#spinning").play();
      }, 1000);
      setTimeout(() => {
        document.querySelector("#fireworks").play();
      }, spinningTime * 1000 + 1000);
    }
  }, [cardFlip]);

  const listItemLineHieght = 5;
  const [listHeight, setListHeight] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    setListHeight(listRef.current.clientHeight);
  });

  return (
    <>
      <Head>
        <title>Hemmeh 8 - Ramadan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        id="welcome"
      >
        <Container>
          <Typography
            variant="h5"
            align="center"
            className="text-shadow"
            color="white"
            fontWeight="bold"
          >
            Hemmeh {process.env.NEXT_PUBLIC_HEMMEH}
          </Typography>
          <Typography
            variant="h1"
            align="center"
            className="text-shadow"
            color="secondary"
            fontWeight="bold"
          >
            week{" "}
            <Badge
              badgeContent={process.env.NEXT_PUBLIC_WEEK_NO}
              color="primary"
              slotProps={{
                root: { style: { transform: "translate(1rem, -2rem)" } },
                badge: {
                  style: {
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                  },
                },
              }}
            />
          </Typography>
          <Typography
            variant="h3"
            align="center"
            className="text-shadow"
            color="white"
            mb={3}
            gutterBottom
          >
            Ramadan
          </Typography>
          <Card
            className={`card-glassmorphism ${cardFlip ? "card-flip" : ""}`}
            elevation={0}
          >
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                sx={{ minHeight: 350 }}
              >
                <div className={`card-step ${cardFlip ? "hide" : ""}`}>
                  <Typography
                    variant="h4"
                    align="center"
                    marginX="auto"
                    marginBottom={5}
                    maxWidth={500}
                    gutterBottom
                  >
                    The winner of the Week {process.env.NEXT_PUBLIC_WEEK_NO}{" "}
                    attendance of Ramadan is
                  </Typography>
                  <Box display="flex" justifyContent="center">
                    <Button
                      onClick={(e) => setCardFlip(true)}
                      variant="contained"
                      color="secondary"
                      size="large"
                      sx={{ height: 54 }}
                    >
                      <img
                        className="btn-logo"
                        src="./images/logos/symbol.svg"
                        width={27}
                      />{" "}
                      &nbsp;&nbsp; Flip The Card
                    </Button>
                  </Box>
                </div>
                <div
                  className={`card-step ${!cardFlip ? "hide" : ""}`}
                  style={{ justifyContent: "flex-start" }}
                >
                  <div className="list" ref={listRef}>
                    <div className="arrow-left"></div>
                    <div className="arrow-right"></div>

                    <div
                      className="list-names"
                      style={{
                        transform: `translateY(${
                          cardFlip
                            ? `calc(${
                                (-winnerIndex / employees.length) * 100
                              }% + ${listHeight / 2}px - ${
                                listItemLineHieght / 2
                              }rem )`
                            : 0
                        })`,
                      }}
                    >
                      {employees.map((emp, index) => (
                        <div
                          className={`list-names-item ${
                            index == winnerIndex ? "winner" : ""
                          }`}
                          key={index}
                        >
                          <Typography
                            color="secondary"
                            variant="h4"
                            align="center"
                            sx={{
                              textTransform: "capitalize",
                              letterSpacing: "2px",
                            }}
                            key={emp.name}
                            style={{ lineHeight: "5rem" }}
                          >
                            {emp.name}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Box>
            </CardContent>
          </Card>
          <Box display="flex" justifyContent="center" mt={3}>
            <img
              src="./images/logos/symbol-with-text.svg"
              width={125}
              alt="Estarta Logo"
            />
          </Box>
        </Container>

        <div className={`pyro ${cardFlip ? "active" : ""}`}>
          <div className="before"></div>
          <div className="after"></div>
        </div>

        <div className="assets">
          <div className="asset asset-moon rope"></div>
          <div className="asset asset-star-1 rope"></div>
          <div className="asset asset-star-2 rope"></div>
          <div className="asset asset-star-3 rope"></div>
          <div className="asset asset-lantern-1 rope"></div>
          <div className="asset asset-lantern-2 rope"></div>
          <div className="asset asset-cloud-1 cloud"></div>
          <div className="asset asset-cloud-2 cloud"></div>
          <div className="asset asset-cloud-3 cloud"></div>
          <div className="asset asset-cloud-4 cloud"></div>
        </div>
      </Box>

      <div className="audios">
        <audio
          id="spinning"
          src="./audios/wheel-spinning.wav"
          type="audio/mpeg"
          controls
        ></audio>
        <audio
          id="fireworks"
          src="./audios/fireworks.mp3"
          type="audio/mpeg"
          controls
          loop
        ></audio>
      </div>
    </>
  );
}
