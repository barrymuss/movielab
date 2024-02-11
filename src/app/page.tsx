"use client";
import { TodoList, PopularMovie, Banner } from "@/modules";
import { Button, Grid, Icon } from "@/components";
import { Card } from "antd";

export default function Home() {
  return (
    <Grid>
      <Grid.Col
        sm={24}
        md={24}
        lg={24}
        xl={16}
        xxl={16}>
        <Banner />
      </Grid.Col>
    </Grid>
  );
}
