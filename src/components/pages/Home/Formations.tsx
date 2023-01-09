import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../Container";
import { SectionHeading } from "../../Section";
import { Button } from "../../Button";

const WEBINARS_URL = "https://formations.trackdechets.beta.gouv.fr";

const dows = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
const months = [
  "JAN",
  "FEV",
  "MAR",
  "AVR",
  "MAI",
  "JUN",
  "JUL",
  "AOU",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const FormationsWrapper = styled.div`
  margin-top: 32px;
`;
const WebinarBlock = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 1px -1px, rgba(0, 0, 0, 0.14) 0 1px 1px 0,
    rgba(0, 0, 0, 0.12) 0 1px 3px 0;
`;
const WebinarDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  padding: 12px 24px;
`;
const WebinarDow = styled.div`
  font-size: 24px;
  line-height: 24px;
`;
const WebinarDom = styled.div`
  font-size: 24px;
  line-height: 24px;
  color: #0a76f6;
`;
const WebinarHourWrapper = styled.div`
  margin-right: 12px;
`;
const WebinarTitle = styled.div`
  margin-right: 12px;
`;

const WebinarActions = styled.div`
  margin-left: auto;
`;

const WebinarVisioLink = styled.span`
  margin-left: auto;
  padding: 0 2rem;
  color: rgb(58, 58, 58);
`;

const WebinarChannel = styled.p`
  text-align: right;
`;

function padTo2Digits(num) {
  return String(num).padStart(2, "0");
}

const WebinarHour = ({ webinarDate }) => {
  const dt = new Date(webinarDate);
  return (
    <WebinarHourWrapper>
      {dt.getHours()}:{padTo2Digits(dt.getMinutes())}
    </WebinarHourWrapper>
  );
};

const WebinarDate = ({ webinarDate }) => {
  const dt = new Date(webinarDate);

  return (
    <WebinarDateWrapper>
      <WebinarDow>{dows[dt.getDay()]}</WebinarDow>
      <WebinarDom>{dt.getDate()}</WebinarDom>
      <span>
        {months[dt.getUTCMonth()]} {dt.getFullYear()}
      </span>
    </WebinarDateWrapper>
  );
};

const Webinar = ({ webinar }) => (
  <WebinarBlock>
    <WebinarDate webinarDate={webinar.scheduled_at} />
    <WebinarHour webinarDate={webinar.scheduled_at} />
    <WebinarTitle>{webinar.title}</WebinarTitle>
    <WebinarActions>
      {webinar.visio_link && (
        <WebinarVisioLink>
          <a href="{ webinar.visio_link }">Participer</a>
        </WebinarVisioLink>
      )}
      <Button as="a" href={`${WEBINARS_URL}${webinar.ics}`}>
        Ajouter à mon calendrier
      </Button>
    </WebinarActions>
  </WebinarBlock>
);

export function Formations() {
  const url = `${WEBINARS_URL}/api/webinars/`;

  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);

        if (data.message === "Not Found") {
          setHasError(true);
          return;
        }

        setWebinars(data);
      })
      .catch((e) => {
        setLoading(false);
        setHasError(true);
      });
  }, []);

  if (loading) {
    return <div>load</div>;
  }

  if (hasError) {
    return null;
  }
  if (!webinars?.length) {
    return null;
  }

  return (
    <FormationsWrapper>
      <Container>
        <SectionHeading>Nos prochaines formations</SectionHeading>

        {webinars.map((webinar) => (
          <Webinar webinar={webinar} key={webinar?.id} />
        ))}
        <WebinarChannel>
          Retrouvez nos dernières formations sur notre
          <a href="https://www.youtube.com/@Trackdechets"> chaîne youtube </a>
        </WebinarChannel>
      </Container>
    </FormationsWrapper>
  );
}
