import DriveEtaIcon from '@mui/icons-material/DriveEta';
import WarningIcon from '@mui/icons-material/Warning';
import PublicIcon from '@mui/icons-material/Public';
import { Button } from '@mui/material';
import React from 'react';
import './explore.css';

export default function Explore() {
  return (
    <div>
      <table id="table_btn">
        <tr>
          <td id="bt">
            <Button variant="contained" className="btn">
              <DriveEtaIcon /> Cart
            </Button>
          </td>
          <td id="bt">
            <Button variant="contained" className="btn">
              <PublicIcon /> Explore
            </Button>
          </td>
          <td id="bt">
            <Button variant="contained" className="btn">
              <WarningIcon /> Damage Control
            </Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
