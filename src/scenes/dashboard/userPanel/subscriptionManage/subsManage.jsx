import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import basic from "../../../../images/subs/basic.svg";
import pro from "../../../../images/subs/pro.svg";
import business from "../../../../images/subs/business.svg";
import healthy from "../../../../images/subs/Healthy.png";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from '../../../../firebase/firebase';

// JSX and component content removed, only imports left
