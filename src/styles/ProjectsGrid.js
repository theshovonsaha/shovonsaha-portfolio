import styled from "styled-components"

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-top: 2.5rem;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  }
`
