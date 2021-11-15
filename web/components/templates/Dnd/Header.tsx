import React from "react";
// import styled from 'styled-components'
import * as color from "./color";
// import { CardFilter } from './CardFilter'
import { styled } from "@mui/material/styles";

export function Header({
  filterValue,
  onFilterChange,
  className,
}: {
  filterValue?: string;
  onFilterChange?(value: string): void;
  className?: string;
}) {
  const Container = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 16px",
    backgroundColor: `${color.Navy}`,
  });

  const Logo = styled('div')({
    color: `${color.Silver}`,
    fontSize: '16px',
    fontWeight: 'bold',
  })

  return (
    <Container className={className}>
      <Logo>Kanban board</Logo>

      <CardFilter value={filterValue} onChange={onFilterChange} />
    </Container>
  );
}
