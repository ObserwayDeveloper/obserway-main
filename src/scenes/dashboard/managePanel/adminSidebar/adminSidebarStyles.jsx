import styled, { css } from 'styled-components';

// Sidebar container
export const SidebarContainer = styled.aside`
    width: 280px; 
    margin-left: 20px;
    margin-bottom:10px;
    height: 80vh;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Shadow added */
    border-radius: 10px;
`;

// Toggle button container
export const Toggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.4rem;
    /* Other styles here */
`;

// Logo container
export const LogoContainer = styled.div`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
`;

// Logo image
export const LogoImg = styled.img`
    width: 80%;
    padding: 20px;
    box-sizing: border-box;
`;

// Close button container
export const CloseButton = styled.div`
    padding-right: 1rem;
    display: none;
    /* Other styles here */
`;

// Sidebar content
export const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 1rem 3rem 4rem rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    height: 70vh;
    position: relative;
    top: 1.5rem;
    transition: all 0.3s ease;
    /* Other styles here */
`;

// Sidebar link
export const SidebarLink = styled.div`
    display: flex;
    align-items: center;
    color: #0056b3; /* Primary color */
    height: 3.7rem;
    gap: 1rem;
    position: relative;
    margin-left: 1rem;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    font-weight: 300;
    text-decoration: none;
    border-radius: 10px; /* Added border radius */
    cursor: pointer;

    &:last-child {
        position: absolute;
        bottom: 2rem;
        width: 100%;
    }

    ${props =>
      props.selected &&
      css`
        background-color: #f0f5ff; /* Light color */
        box-shadow: 10px rgba(0, 0, 0, 0.6); /* Shadow change */
      `
    }

    &:hover {
        color: #0056b3; /* Primary color */
    }
`;

export const MessageCount = styled.span`
    background-color: #ff4d4f; /* Danger color */
    padding: 2px 6px;
    color: #fff; /* White color */
    font-size: 11px;
    border-radius: 4px; /* Small border radius */
    /* Other styles here */
`;
