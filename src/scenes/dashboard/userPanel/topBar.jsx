import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import IconButton from "@mui/material/IconButton";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AddIcon from "@mui/icons-material/Add";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import { auth, db } from '../../../firebase/firebase';

const StyledTopbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px;
  background-color: rgba(7, 25, 82, 0.4);
  color: #fff;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BalanceDisplay = styled.div`
  background-color: ${({ theme }) => theme.palette.mode === "dark" ? theme.palette.grey[700] : theme.palette.grey[200]};
  padding: 8px 16px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.mode === "dark" ? 'white' : 'black'};
  margin-right: 20px;
`;

const CurrentPlanDisplay = styled.div`
  background-color: ${({ theme }) => theme.palette.mode === "dark" ? theme.palette.grey[700] : theme.palette.grey[200]};
  padding: 8px 16px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.mode === "dark" ? 'white' : 'black'};
`;

const TopBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [currentPlan, setCurrentPlan] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(collection(db, "users"), user.uid);
        const docSnapshot = await getDoc(userRef);
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          setCurrentPlan(userData.subscription?.planType || "None");
        } else {
          setCurrentPlan("Standart Üyelik");
        }
      }
    });
    return unsubscribe;
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');  
  };


  return (
    <StyledTopbar>
      <IconContainer>
        <BalanceDisplay theme={theme}>
          Balance: 1,000.00 USD
          <IconButton
            size="small"
            sx={{ ml: 1 }}
            onClick={() => navigate('/add-funds')}
          >
            <AddIcon />
          </IconButton>
        </BalanceDisplay>
        <IconButton>
          <NotificationsOutlinedIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton onClick={handleMenuOpen}>
          <PersonOutlinedIcon sx={{ color: 'white' }} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => navigate('/settings')}>Settings</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </IconContainer>
    </StyledTopbar>
  );
};

export default TopBar;
