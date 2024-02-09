"use client";
import { TodoList, PopularMovie } from "@/modules";
import { Button, Grid, Icon } from "@/components";

export default function Home() {
  return (
    <div style={{ width: "100vw" }}>
      <Grid
        justify='center'
        align='top'>
        <Grid.Col span={12}>
          <Button
            type='dashed'
            danger>
            <Icon type='user' />
            Primary Button
          </Button>
        </Grid.Col>
        <Grid.Col span={12}>
          <TodoList />
        </Grid.Col>
      </Grid>
    </div>
  );
}
