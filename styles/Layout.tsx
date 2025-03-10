import styled from "styled-components";

export const Wrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["padding", "maxWidth"].includes(prop),
})<{
  padding?: string;
  maxWidth?: string;
}>`
  --padding: ${({ padding }) => padding || "4rem"};
  --max-width: ${({ maxWidth }) => maxWidth || "var(--max-width)"};

  min-width: var(--max-width);
  width: 100%;
  max-width: 100%;
  margin-inline: auto;
  padding: var(--padding);

  @media (max-width: 1200px) {
    width: calc(100% - var(--padding));
  }
`;

export const Grid = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["fullScreen", "height", "width", "columns", "gap", "placeItems"].includes(
      prop
    ),
})<{
  fullScreen?: boolean;
  height?: string;
  width?: string;
  columns?: string; // Renamed from `gridTemplateColumns`
  gap?: string;
  placeItems?: string;
}>`
  display: grid;
  place-items: ${({ placeItems }) => placeItems || "center"};
  height: ${({ fullScreen, height }) =>
    fullScreen ? "100vh" : height || "auto"};
  width: ${({ fullScreen, width }) => (fullScreen ? "100vw" : width || "auto")};
  grid-template-columns: ${({ columns }) => columns || "auto"};
  gap: ${({ gap }) => gap || "0"};
`;

export const Flex = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "justifyContent",
      "alignItems",
      "flexDirection",
      "gap",
      "fullWidth",
      "height",
    ].includes(prop),
})<{
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: "row" | "column"; // Allow 'row' or 'column'
  gap?: string;
  fullWidth?: boolean;
  height?: string;
}>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  flex-direction: ${({ flexDirection }) =>
    flexDirection || "row"}; // Default to row
  gap: ${({ gap }) => gap || "0"};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  height: ${({ height }) => height || "auto"};
`;
