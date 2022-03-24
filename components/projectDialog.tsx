import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

interface Props {
    setDialogOpen: (open: boolean) => void,
    projectTitle: string,
    projectDescriptionAndVideo: JSX.Element;
}

export default function ProjectDialog({ setDialogOpen, projectTitle, projectDescriptionAndVideo }: Props) {
    const handleClose = () => {
        setDialogOpen(false);
    };

    return (
        <div>
            <Dialog maxWidth={"lg"} fullWidth open={true} onClose={handleClose}>
                <div className="logo" style={{ position: "absolute", margin: 25, textAlign: "left" }}>{projectTitle}</div>
                <DialogContent style={{ marginTop: 90 }}>
                    <DialogContentText>
                      {projectDescriptionAndVideo}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" style={{ background: "hotpink" }} onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}