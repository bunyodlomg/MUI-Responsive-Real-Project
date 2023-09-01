import { Box, Fab, Modal, Tooltip, Typography, styled, Avatar, TextField, Stack, ButtonGroup, Button } from "@mui/material";
import { Add as AddIcon, DateRange, EmojiEmotions, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { useState } from "react";
const Add = () => {
  const [openModal, setOpenModal] = useState(false)
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  })
  return (
    <>
      <Tooltip
        onClick={e => { setOpenModal(true) }}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 }
        }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={openModal}
        onClose={e => { setOpenModal(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} p={3} bgcolor={"background.default"} color={"text.primary"} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">Create post</Typography>
          <UserBox>
            <Avatar
              src="https://mui.com/static/images/avatar/2.jpg"
              sx={{ width: 30, height: 30 }}
            >
              <Typography flexWrap={500} variant="span">John Doe</Typography>
            </Avatar>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          >
            <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary" />
              <Image color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-aria-label="outlined primary button group"
            >
              <Button>Post</Button>
              <Button sx={{ width: "100%" }}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </TextField>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
