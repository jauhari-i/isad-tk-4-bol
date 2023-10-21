import { Card, CardContent, Stack, Typography } from "@mui/joy";
import React from "react";

interface AnalyticCardProps {
  title: string;
  count: number;
}

const AnalyticCard = ({ title, count }: AnalyticCardProps) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Stack spacing={0.5}>
          <Typography variant="plain" fontSize={12} fontWeight={500}>
            {title}
          </Typography>
          <Typography variant="plain" fontSize={24} fontWeight={500}>
            {count}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AnalyticCard;
