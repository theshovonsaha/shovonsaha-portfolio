import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion } from "framer-motion"
import ContentWrapper from "../../styles/contentWrapper"
import { ProjectsGrid } from "../../styles/ProjectsGrid"
import { ProjectCard } from "../ProjectCard"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  padding: 6rem 0;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .section-title {
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }
`

const FilterButton = styled(motion.button)`
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.background : theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`

const Projects = ({ content }) => {
  const [filter, setFilter] = useState("All")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Safely get projects with null checks
  const allProjects = content
    ?.flatMap(({ node }) => node?.exports?.projects || [])
    .filter(Boolean)

  // Safely get technologies with null checks
  const allTechnologies = Array.from(
    new Set(
      allProjects
        ?.flatMap(project => project?.technologies || [])
        .filter(Boolean)
    )
  )

  // Filter projects based on selected technology
  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects?.filter(project => project?.technologies?.includes(filter))

  if (!allProjects || allProjects.length === 0) {
    return null
  }

  return (
    <StyledSection id="projects">
      <StyledContentWrapper>
        <motion.h3
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h3>
        <FilterContainer>
          <FilterButton
            active={filter === "All"}
            onClick={() => setFilter("All")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </FilterButton>
          {allTechnologies.map((tech, index) => (
            <FilterButton
              key={`${tech}-${index}`}
              active={filter === tech}
              onClick={() => setFilter(tech)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </FilterButton>
          ))}
        </FilterContainer>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ProjectsGrid>
            {filteredProjects?.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                variants={cardVariants}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </ProjectsGrid>
        </motion.div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Projects.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        exports: PropTypes.shape({
          projects: PropTypes.array,
        }),
      }),
    })
  ).isRequired,
}

export default Projects
