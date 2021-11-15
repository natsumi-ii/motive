import React, { useState } from "react";
// import styled from 'styled-components'
import { Header, Header as _Header } from "./Header";
import { Column } from "./Column";
import { styled } from "@mui/material/styles";

export function App() {
  const Container = styled("div")({
    display: "flex",
    flexFlow: " column",
    height: "100%",
  });

  const MainArea = styled("div")({
    height: "100%",
    padding: "16px 0",
    overflowY: "auto",
  });

  const HorizontalScroll = styled("div")({
    display: "flex",
    width: "100%",
    height: "100%",
    overflowX: "auto",

    // > * {
    //   margin-left: 16px;
    //   flex-shrink: 0;
    // }

    // ::after {
    //   display: block;
    //   flex: 0 0 16px;
    //   content: '';
    // }
  });
  // const [filterValue, setFilterValue] = useState("");
  const [columns, setColumns] = useState([
    {
      id: "A",
      title: "TODO",
      cards: [
        { id: "a", text: "朝食をとる🍞" },
        { id: "b", text: "SNSをチェックする🐦" },
        { id: "c", text: "布団に入る (:3[___]" },
      ],
    },
    {
      id: "B",
      title: "Doing",
      cards: [
        { id: "d", text: "顔を洗う👐" },
        { id: "e", text: "歯を磨く🦷" },
      ],
    },
    {
      id: "C",
      title: "Waiting",
      cards: [],
    },
    {
      id: "D",
      title: "Done",
      cards: [{ id: "f", text: "布団から出る (:3っ)っ -=三[＿＿]" }],
    },
  ]);

  const [draggingCardID, setDraggingCardID] = useState<string | undefined>(
    undefined
  );

  const dropCardTo = (toID: string) => {
    const fromID = draggingCardID;
    if (!fromID) return;

    setDraggingCardID(undefined);

    if (fromID === toID) return;

    setColumns((columns) => {
      const card = columns
        .flatMap((col) => col.cards)
        .find((c) => c.id === fromID);
      if (!card) {
        return columns;
      }

      return columns.map((column) => {
        let newColumn = column;

        if (newColumn.cards.some((c) => c.id === fromID)) {
          newColumn = {
            ...newColumn,
            cards: newColumn.cards.filter((c) => c.id !== fromID),
          };
        }

        // 列の末尾に移動
        if (newColumn.id === toID) {
          newColumn = {
            ...newColumn,
            cards: [...newColumn.cards, card],
          };
        }
        // 列の末尾以外に移動
        else if (newColumn.cards.some((c) => c.id === toID)) {
          newColumn = {
            ...newColumn,
            cards: newColumn.cards.flatMap((c) =>
              c.id === toID ? [card, c] : [c]
            ),
          };
        }

        return newColumn;
      });
    });
  };

  return (
    <Container>
      {/* <Header 
       filterValue={filterValue} onFilterChange={setFilterValue} cards
      /> */}

      <MainArea>
        <HorizontalScroll>
          {columns.map(({ id: columnID, title, cards }) => (
            <Column
              key={columnID}
              title={title}
              // filterValue={filterValue}
              cards={cards}
              onCardDragStart={(cardID) => setDraggingCardID(cardID)}
              onCardDrop={(entered) => dropCardTo(entered ?? columnID)}
            />
          ))}
        </HorizontalScroll>
      </MainArea>
    </Container>
  );
}