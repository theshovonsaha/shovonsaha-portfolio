import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import ContentWrapper from "../../styles/contentWrapper"
import { ProjectsGrid } from "../../styles/ProjectsGrid"
import { ProjectCard } from "../ProjectCard"
import {
  FaChevronDown,
  FaSearch,
  FaTimes,
  FaExternalLinkAlt,
  FaGlobe,
} from "react-icons/fa"

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
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;
`

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;

  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.7;
  }
`

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 2px solid ${({ theme }) => `${theme.colors.primary}40`};
  border-radius: 100px;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}20`};
  }
`

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
`

const OverlayContent = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: -3rem;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }
`

const DetailedCardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`

const Title = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`

const IconButton = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: ${({ theme }) => `${theme.colors.primary}10`};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => `${theme.colors.primary}20`};
    transform: translateY(-2px);
  }
`

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
`

const Technologies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;

  li {
    background: ${({ theme }) => `${theme.colors.primary}15`};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 100px;
    font-size: 0.9rem;
  }
`

const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.4;

    &:before {
      content: "→";
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  opacity: 0.7;
`

const Projects = ({ content }) => {
  const [filter, setFilter] = useState("")
  const [selectedProject, setSelectedProject] = useState(null)
  const searchRef = useRef(null)

  // Close overlay when pressing escape
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === "Escape") {
        setSelectedProject(null)
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  }

  // Safely get projects with null checks
  const allProjects = content
    ?.flatMap(({ node }) => node?.exports?.projects || [])
    .filter(Boolean)

  // Filter projects based on search term
  const filteredProjects = allProjects?.filter(project => {
    if (!filter) return true

    const searchTerm = filter.toLowerCase()
    return (
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
    )
  })

  if (!allProjects || allProjects.length === 0) {
    return null
  }

  return (
    <StyledSection id="projects">
      <StyledContentWrapper>
        <motion.h3
          className="section-title"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Projects
        </motion.h3>

        <FilterContainer>
          <SearchContainer>
            <FaSearch size={14} />
            <SearchInput
              ref={searchRef}
              type="text"
              placeholder="Search projects by title, description, or technology..."
              value={filter}
              onChange={e => setFilter(e.target.value)}
            />
          </SearchContainer>
        </FilterContainer>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ProjectsGrid>
            {filteredProjects?.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  variants={itemVariants}
                >
                  <ProjectCard.CompactCard
                    {...project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))
            ) : (
              <NoResults>No projects found matching your search.</NoResults>
            )}
          </ProjectsGrid>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <Overlay
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedProject(null)}
            >
              <OverlayContent
                variants={cardVariants}
                onClick={e => e.stopPropagation()}
              >
                <CloseButton onClick={() => setSelectedProject(null)}>
                  <FaTimes />
                </CloseButton>
                <DetailedCardWrapper>
                  <TopRow>
                    <Title>{selectedProject.title}</Title>
                    <ActionButtons>
                      {selectedProject.link && (
                        <IconButton
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View Project"
                          aria-label="View Project"
                        >
                          <FaExternalLinkAlt />
                        </IconButton>
                      )}
                      {selectedProject.demo && (
                        <IconButton
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                          aria-label="Live Demo"
                        >
                          <FaGlobe />
                        </IconButton>
                      )}
                    </ActionButtons>
                  </TopRow>
                  <Description>{selectedProject.description}</Description>
                  <Technologies>
                    {selectedProject.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </Technologies>
                  <Achievements>
                    {selectedProject.achievements?.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </Achievements>
                </DetailedCardWrapper>
              </OverlayContent>
            </Overlay>
          )}
        </AnimatePresence>
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
