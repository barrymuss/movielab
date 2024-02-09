"use client";
import { TodoList, PopularMovie } from "@/modules";
import { Button, Grid, Icon } from "@/components";
import { Card } from "antd";

export default function Home() {
  return (
    <Grid>
      <Grid.Col span={24}>
        <PopularMovie />
      </Grid.Col>
    </Grid>
  );
}
