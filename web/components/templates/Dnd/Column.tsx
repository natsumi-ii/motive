import React, { useState } from "react";
// import styled from 'styled-components'
import * as color from "./color";
import { Card } from "./Card";
// import { PlusIcon } from './icon'
// import { InputForm as _InputForm } from './InputForm'
import { styled } from "@mui/material/styles";

export function Column({
  title,
  // filterValue: rawFilterValue,
  cards: rawCards,
  onCardDragStart,
  onCardDrop,
}: {
  title?: string;
  // filterValue?: string;
  cards: {
    id: string;
    text?: string;
  }[];
  onCardDragStart?(id: string): void;
  onCardDrop?(entered: string | null): void;
}) {
  const Container = styled("div")({
    display: "flex",
    flexFlow: "column",
    width: "355px",
    height: "100%",
    border: `solid 1px ${color.Silver}`,
    borderRadius: "6px",
    backgroundColor: `${color.LightSilver}`,

    // > :not(:last-child) {
    //   flex-shrink: 0;
    // }
  });

  const Header = styled("div")({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "8px",
  });

  const ColumnName = styled("div")({
    color: `${color.Black}`,
    fontSize: "14px",
    fontWeight: "bold",
  });

  const VerticalScroll = styled("div")({
    height: "100%",
    padding: "8px",
    overflowY: "auto",
    flex: "1 1 auto",

    // > :not(:first-child) {
    //   margin-top: 8px;
    // }
  });

  // const filterValue = rawFilterValue?.trim();
  // const keywords = filterValue?.toLowerCase().split(/\s+/g) ?? [];
  // const cards = rawCards.filter(({ text }) =>
  //   keywords?.every((w) => text?.toLowerCase().includes(w))
  // );
  // const totalCount = rawCards.length;

  // const [text, setText] = useState("");

  //   const [inputMode, setInputMode] = useState(false)
  //   const toggleInput = () => setInputMode(v => !v)
  //   const confirmInput = () => setText('')
  //   const cancelInput = () => setInputMode(false)

  const [draggingCardID, setDraggingCardID] = useState<string | undefined>(
    undefined
  );
  const handleCardDragStart = (id: string) => {
    setDraggingCardID(id);
    onCardDragStart?.(id);
  };

  return (
    <Container>
      <Header>
        {/* <CountBadge>{totalCount}</CountBadge> */}
        <ColumnName>{title}</ColumnName>

        {/* <AddButton onClick={toggleInput} /> */}
      </Header>

      {/* {inputMode && ( */}
      {/* //     <InputForm */}
      {/* //       value={text}
    //       onChange={setText}
    //       onConfirm={confirmInput}
    //       onCancel={cancelInput}
    //     />
    //   )} */}

      {/* {filterValue && <ResultCount>{cards.length} results</ResultCount>} */}

      <VerticalScroll>
        {rawCards.map(({ id, text }, i) => (
          <Card.DropArea
            key={id}
            disabled={
              draggingCardID !== undefined &&
              (id === draggingCardID || rawCards[i - 1]?.id === draggingCardID)
            }
            onDrop={() => onCardDrop?.(id)}
          >
            <Card
              text={text}
              onDragStart={() => handleCardDragStart(id)}
              onDragEnd={() => setDraggingCardID(undefined)}
            />
          </Card.DropArea>
        ))}

        <Card.DropArea
          style={{ height: "100%" }}
          disabled={
            draggingCardID !== undefined &&
            rawCards[rawCards.length - 1]?.id === draggingCardID
          }
          onDrop={() => onCardDrop?.(null)}
        />
      </VerticalScroll>
    </Container>
  );
}

// const CountBadge = styled.div`
//   margin-right: 8px;
//   border-radius: 20px;
//   padding: 2px 6px;
//   color: ${color.Black};
//   background-color: ${color.Silver};
//   font-size: 12px;
//   line-height: 1;
// `

// const AddButton = styled.button.attrs({
//   type: 'button',
// //   children: <PlusIcon />,
// })`
//   margin-left: auto;
//   color: ${color.Black};

//   :hover {
//     color: ${color.Blue};
//   }
// `

// // const InputForm = styled(_InputForm)`
// //   padding: 8px;
// // `

// const ResultCount = styled.div`
//   color: ${color.Black};
//   font-size: 12px;
//   text-align: center;
// `
